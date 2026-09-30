/* Reads Anki deck packages (.apkg / .colpkg) in the browser.
 * An .apkg is a zip holding an SQLite collection: "collection.anki21b"
 * (zstd-compressed, Anki 2.1.50+), "collection.anki21" or "collection.anki2".
 * The zip, zstd and SQLite libraries in js/vendor load only when needed. */
(function (root) {
  var isNode = typeof module !== 'undefined' && module.exports && typeof window === 'undefined';
  var libsPromise = null;

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function libs() {
    if (libsPromise) return libsPromise;
    var base;
    var ready;
    if (isNode) {
      base = __dirname + '/vendor/';
      ready = Promise.resolve({
        fflate: require('./vendor/fflate.js'),
        fzstd: require('./vendor/fzstd.js'),
        initSqlJs: require('./vendor/sql-wasm.js')
      });
    } else {
      base = 'js/vendor/';
      ready = Promise.all(['fflate.js', 'fzstd.js', 'sql-wasm.js'].map(function (f) { return loadScript(base + f); }))
        .then(function () { return { fflate: root.fflate, fzstd: root.fzstd, initSqlJs: root.initSqlJs }; });
    }
    libsPromise = ready.then(function (l) {
      return l.initSqlJs({ locateFile: function (f) { return base + f; } }).then(function (SQL) {
        l.SQL = SQL;
        return l;
      });
    });
    libsPromise.catch(function () { libsPromise = null; });
    return libsPromise;
  }

  function query(db, sql) {
    try {
      var res = db.exec(sql);
      return res.length ? res[0].values : [];
    } catch (e) {
      return null;
    }
  }

  function tryJson(s) {
    try { return JSON.parse(s); } catch (e) { return null; }
  }

  /*
   * Returns { notes: [{ fields, names, tags, deck }], decks: [names] }.
   */
  function read(buffer) {
    return libs().then(function (l) {
      var files;
      try {
        files = l.fflate.unzipSync(new Uint8Array(buffer), {
          filter: function (f) { return /^collection\.(anki21b|anki21|anki2)$/.test(f.name); }
        });
      } catch (e) {
        throw new Error('This file isn’t a valid Anki deck (.apkg).');
      }
      var bytes;
      if (files['collection.anki21b']) bytes = l.fzstd.decompress(files['collection.anki21b']);
      else bytes = files['collection.anki21'] || files['collection.anki2'];
      if (!bytes) throw new Error('No card collection found inside this file.');

      var db = new l.SQL.Database(bytes);
      try {
        // Field names per note type: older collections keep JSON in col.models,
        // newer ones have a "fields" table.
        var names = {};
        var models = query(db, 'SELECT models FROM col');
        var parsed = models && models[0] && tryJson(models[0][0]);
        if (parsed && Object.keys(parsed).length) {
          Object.keys(parsed).forEach(function (id) {
            names[id] = (parsed[id].flds || []).map(function (f) { return f.name; });
          });
        } else {
          (query(db, 'SELECT ntid, ord, name FROM fields ORDER BY ntid, ord') || []).forEach(function (r) {
            (names[r[0]] = names[r[0]] || [])[r[1]] = r[2];
          });
        }

        var deckNames = {};
        var decksJson = query(db, 'SELECT decks FROM col');
        var dj = decksJson && decksJson[0] && tryJson(decksJson[0][0]);
        if (dj && Object.keys(dj).length) {
          Object.keys(dj).forEach(function (id) { deckNames[id] = dj[id].name; });
        } else {
          (query(db, 'SELECT id, name FROM decks') || []).forEach(function (r) {
            deckNames[r[0]] = String(r[1]).split('\x1f').join('::');
          });
        }
        var noteDeck = {};
        (query(db, 'SELECT nid, did FROM cards') || []).forEach(function (r) {
          if (!(r[0] in noteDeck)) noteDeck[r[0]] = deckNames[r[1]] || '';
        });

        var used = {};
        var notes = (query(db, 'SELECT id, mid, flds, tags FROM notes ORDER BY id') || []).map(function (r) {
          var deck = noteDeck[r[0]] || '';
          if (deck) used[deck] = true;
          return { fields: String(r[2]).split('\x1f'), names: names[r[1]] || null, tags: String(r[3] || '').trim(), deck: deck };
        });
        return { notes: notes, decks: Object.keys(used) };
      } finally {
        db.close();
      }
    });
  }

  var api = { read: read };
  root.KC = root.KC || {};
  root.KC.anki = api;
  if (isNode) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
