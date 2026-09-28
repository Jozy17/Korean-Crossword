/* Crossword generator. Each grid cell holds one Hangul syllable; words cross
 * where they share a syllable. Tries several random layouts and keeps the
 * one with the most words, then the most crossings, then the most compact. */
(function (root) {
  function makeRng(seed) {
    if (seed === undefined || seed === null) return Math.random;
    var s = seed >>> 0;
    return function () {
      s = (s + 0x6d2b79f5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Weighted random order (Efraimidis–Spirakis): higher weight → earlier on average.
  function weightedOrder(items, weightOf, rng) {
    return items
      .map(function (it) { return { it: it, k: Math.pow(rng(), 1 / Math.max(0.01, weightOf(it))) }; })
      .sort(function (a, b) { return b.k - a.k; })
      .map(function (x) { return x.it; });
  }

  function Layout(maxSize) {
    this.cells = new Map();
    this.words = [];
    this.maxSize = maxSize;
    this.minR = 0; this.maxR = -1; this.minC = 0; this.maxC = -1;
    this.crossings = 0;
  }

  Layout.prototype.get = function (r, c) { return this.cells.get(r + ',' + c); };

  // Returns number of crossings, or -1 if the word cannot go here.
  Layout.prototype.check = function (letters, r, c, dir) {
    var dr = dir === 'down' ? 1 : 0;
    var dc = dir === 'down' ? 0 : 1;
    var len = letters.length;
    if (this.get(r - dr, c - dc) || this.get(r + dr * len, c + dc * len)) return -1;
    var endR = r + dr * (len - 1);
    var endC = c + dc * (len - 1);
    if (this.words.length) {
      var h = Math.max(this.maxR, endR) - Math.min(this.minR, r) + 1;
      var w = Math.max(this.maxC, endC) - Math.min(this.minC, c) + 1;
      if (h > this.maxSize || w > this.maxSize) return -1;
    }
    var crossings = 0;
    for (var i = 0; i < len; i++) {
      var rr = r + dr * i;
      var cc = c + dc * i;
      var cell = this.get(rr, cc);
      if (cell) {
        if (cell.ch !== letters[i] || cell[dir] !== undefined) return -1;
        crossings++;
      } else if (dir === 'across') {
        if (this.get(rr - 1, cc) || this.get(rr + 1, cc)) return -1;
      } else if (this.get(rr, cc - 1) || this.get(rr, cc + 1)) {
        return -1;
      }
    }
    return crossings;
  };

  Layout.prototype.place = function (entry, letters, r, c, dir, crossings) {
    var dr = dir === 'down' ? 1 : 0;
    var dc = dir === 'down' ? 0 : 1;
    var idx = this.words.length;
    for (var i = 0; i < letters.length; i++) {
      var rr = r + dr * i;
      var cc = c + dc * i;
      var key = rr + ',' + cc;
      var cell = this.cells.get(key);
      if (!cell) { cell = { ch: letters[i], r: rr, c: cc }; this.cells.set(key, cell); }
      cell[dir] = idx;
    }
    if (!this.words.length) {
      this.minR = r; this.minC = c;
      this.maxR = r + dr * (letters.length - 1);
      this.maxC = c + dc * (letters.length - 1);
    } else {
      this.minR = Math.min(this.minR, r);
      this.minC = Math.min(this.minC, c);
      this.maxR = Math.max(this.maxR, r + dr * (letters.length - 1));
      this.maxC = Math.max(this.maxC, c + dc * (letters.length - 1));
    }
    this.crossings += crossings;
    this.words.push({ entry: entry, letters: letters, r: r, c: c, dir: dir });
  };

  Layout.prototype.area = function () {
    return (this.maxR - this.minR + 1) * (this.maxC - this.minC + 1);
  };

  // Best spot for a word that crosses the existing grid, or null.
  Layout.prototype.findSpot = function (letters, rng) {
    var best = null;
    var self = this;
    this.cells.forEach(function (cell) {
      for (var j = 0; j < letters.length; j++) {
        if (letters[j] !== cell.ch) continue;
        var dirs = [];
        if (cell.across === undefined) dirs.push('across');
        if (cell.down === undefined) dirs.push('down');
        for (var d = 0; d < dirs.length; d++) {
          var dir = dirs[d];
          var r = dir === 'down' ? cell.r - j : cell.r;
          var c = dir === 'down' ? cell.c : cell.c - j;
          var x = self.check(letters, r, c, dir);
          if (x < 1) continue;
          var endR = r + (dir === 'down' ? letters.length - 1 : 0);
          var endC = c + (dir === 'down' ? 0 : letters.length - 1);
          var h = Math.max(self.maxR, endR) - Math.min(self.minR, r) + 1;
          var w = Math.max(self.maxC, endC) - Math.min(self.minC, c) + 1;
          // Prefer more crossings, then compact and square-ish grids.
          var score = x * 12 - h * w * 0.25 - Math.abs(h - w) * 0.8 + rng() * 3;
          if (!best || score > best.score) best = { r: r, c: c, dir: dir, x: x, score: score };
        }
      }
    });
    return best;
  };

  function buildOnce(theme, fillers, opts, rng) {
    var order = weightedOrder(theme, function (e) { return e.weight || 1; }, rng);
    var letterCount = {};
    order.forEach(function (e) {
      Array.from(e.ko).forEach(function (ch) { letterCount[ch] = (letterCount[ch] || 0) + 1; });
    });
    // Seed with a well-connected word from the front of the order.
    var seedIdx = 0;
    var seedScore = -1;
    for (var i = 0; i < Math.min(8, order.length); i++) {
      var s = Array.from(order[i].ko).reduce(function (a, ch) { return a + letterCount[ch] - 1; }, 0) + order[i].ko.length;
      if (s > seedScore) { seedScore = s; seedIdx = i; }
    }
    var layout = new Layout(opts.maxSize);
    layout.themeCount = 0;
    layout.fillerCount = 0;
    var seed = order.splice(seedIdx, 1)[0];
    var seedLetters = Array.from(seed.ko);
    if (seedLetters.length > opts.maxSize) return layout;
    layout.place(seed, seedLetters, 0, 0, rng() < 0.5 ? 'across' : 'down', 0);
    layout.themeCount = 1;

    var remaining = order;
    var fillerPool = weightedOrder(fillers, function (e) { return e.weight || 1; }, rng);
    var maxFillers = Math.floor(opts.target * (opts.maxFillerShare || 0.45));

    while (layout.words.length < opts.target) {
      // Place every theme word that fits right now.
      var placedAny = true;
      while (placedAny && layout.words.length < opts.target) {
        placedAny = false;
        var next = [];
        for (var k = 0; k < remaining.length; k++) {
          if (layout.words.length >= opts.target) { next.push(remaining[k]); continue; }
          var letters = Array.from(remaining[k].ko);
          if (letters.length > opts.maxSize) continue;
          var spot = layout.findSpot(letters, rng);
          if (spot) {
            layout.place(remaining[k], letters, spot.r, spot.c, spot.dir, spot.x);
            layout.themeCount++;
            placedAny = true;
          } else {
            next.push(remaining[k]);
          }
        }
        remaining = next;
      }
      if (layout.words.length >= opts.target || !remaining.length) break;
      if (layout.fillerCount >= maxFillers || !fillerPool.length) break;

      // No theme word fits: add a bridge word that opens up syllables the theme words need.
      var wanted = {};
      remaining.forEach(function (e) { Array.from(e.ko).forEach(function (ch) { wanted[ch] = true; }); });
      var best = null;
      var tried = 0;
      for (var f = 0; f < fillerPool.length && tried < 80; f++) {
        var fl = Array.from(fillerPool[f].ko);
        if (fl.length > opts.maxSize) continue;
        var useful = 0;
        for (var q = 0; q < fl.length; q++) if (wanted[fl[q]]) useful++;
        if (!useful) continue;
        tried++;
        var fspot = layout.findSpot(fl, rng);
        if (!fspot) continue;
        // Count wanted syllables that land on new (uncrossed) cells.
        var open = 0;
        for (var z = 0; z < fl.length; z++) {
          var rr = fspot.r + (fspot.dir === 'down' ? z : 0);
          var cc = fspot.c + (fspot.dir === 'down' ? 0 : z);
          if (wanted[fl[z]] && !layout.get(rr, cc)) open++;
        }
        if (!open) continue;
        var score = open * 10 + fspot.score;
        if (!best || score > best.score) best = { idx: f, letters: fl, spot: fspot, score: score };
      }
      if (!best) break;
      layout.place(fillerPool[best.idx], best.letters, best.spot.r, best.spot.c, best.spot.dir, best.spot.x);
      layout.words[layout.words.length - 1].bridge = true;
      layout.fillerCount++;
      fillerPool.splice(best.idx, 1);
    }

    return layout;
  }

  function finalize(layout) {
    var rows = layout.maxR - layout.minR + 1;
    var cols = layout.maxC - layout.minC + 1;
    var grid = [];
    for (var r = 0; r < rows; r++) {
      var row = [];
      for (var c = 0; c < cols; c++) row.push(null);
      grid.push(row);
    }
    layout.cells.forEach(function (cell) {
      grid[cell.r - layout.minR][cell.c - layout.minC] = { ch: cell.ch };
    });
    var words = layout.words.map(function (w) {
      return { entry: w.entry, answer: w.letters.join(''), r: w.r - layout.minR, c: w.c - layout.minC, dir: w.dir, len: w.letters.length, bridge: !!w.bridge };
    });
    // Standard numbering: reading order of word starts.
    var starts = {};
    words.forEach(function (w) { starts[w.r + ',' + w.c] = true; });
    var num = 0;
    var numbers = {};
    for (var rr = 0; rr < rows; rr++) {
      for (var cc = 0; cc < cols; cc++) {
        if (starts[rr + ',' + cc]) numbers[rr + ',' + cc] = ++num;
      }
    }
    words.forEach(function (w) { w.num = numbers[w.r + ',' + w.c]; });
    words.sort(function (a, b) {
      if (a.dir !== b.dir) return a.dir === 'across' ? -1 : 1;
      return a.num - b.num;
    });
    return { rows: rows, cols: cols, grid: grid, words: words, crossings: layout.crossings };
  }

  /*
   * theme:   entries the puzzle is about ({ ko, weight? }).
   * fillers: optional bridge words, used only to connect more theme words.
   * opts:    { target: words wanted, maxSize: max rows/cols, attempts, seed, maxFillerShare }
   */
  function generate(theme, fillers, opts) {
    opts = Object.assign({ target: 10, maxSize: 9, attempts: 30 }, opts || {});
    var rng = makeRng(opts.seed);
    var ok = function (e) { return e.ko && Array.from(e.ko).length >= 2; };
    var usable = theme.filter(ok);
    if (!usable.length) return null;
    var themeKeys = {};
    usable.forEach(function (e) { themeKeys[e.ko] = true; });
    var bridges = (fillers || []).filter(function (e) { return ok(e) && !themeKeys[e.ko]; });
    var best = null;
    var bestScore = -Infinity;
    for (var a = 0; a < opts.attempts; a++) {
      var layout = buildOnce(usable, bridges, opts, rng);
      var score = layout.themeCount * 100 + layout.fillerCount * 35 + layout.crossings * 8 - layout.area() * 0.3;
      if (score > bestScore) { bestScore = score; best = layout; }
      if (layout.themeCount >= opts.target && a >= opts.attempts / 2) break;
    }
    return finalize(best);
  }

  var api = { generate: generate, makeRng: makeRng };
  root.KC = root.KC || {};
  root.KC.generator = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
