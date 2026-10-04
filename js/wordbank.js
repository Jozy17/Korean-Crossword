/* Word bank: parses the built-in list, merges custom words, and imports
 * word lists pasted or loaded from CSV / TSV / TXT / JSON files. */
(function (root) {
  var hangul = root.KC && root.KC.hangul;
  var data = root.KC && root.KC.data;
  var duolingo = root.KC && root.KC.duolingo;
  var single = root.KC && root.KC.single;
  if (typeof module !== 'undefined' && module.exports) {
    hangul = require('./hangul.js');
    data = require('./data/words.js');
    duolingo = require('./data/duolingo.js');
    single = require('./data/single.js');
  }

  // One-syllable words are kept for the 한 글자 game; the crossword uses 2+ syllables.
  var MIN_LEN = 1;
  var CROSSWORD_MIN = 2;
  var MAX_LEN = 8;

  function splitCats(str) {
    return (str || '')
      .split(/[,;|/]/)
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  function parseBuiltin() {
    var out = [];
    var sources = [data.RAW];
    if (single) sources.push(single.RAW);
    sources.forEach(function (raw) {
     Object.keys(raw).forEach(function (lvl) {
      raw[lvl].split('\n').forEach(function (line) {
        line = line.trim();
        if (!line) return;
        var p = line.split('|');
        out.push({
          ko: p[0].trim(),
          en: p[1].trim(),
          level: Number(lvl),
          cats: splitCats(p[2]),
          def: (p[3] || '').trim(),
          ex: (p[4] || '').trim(),
          custom: false
        });
      });
     });
    });
    if (duolingo) addDuolingo(out);
    if (single && duolingo) {
      var byKo = {};
      out.forEach(function (w) { byKo[w.ko] = w; });
      single.DUO.split(/\s+/).forEach(function (ko) {
        if (byKo[ko] && byKo[ko].cats.indexOf(duolingo.tag) < 0) byKo[ko].cats.push(duolingo.tag);
      });
    }
    return out;
  }

  // Your Duolingo course words: tag the ones we already have, add the rest (English clues only).
  function addDuolingo(out) {
    var tag = duolingo.tag;
    var byKo = {};
    out.forEach(function (w) { byKo[w.ko] = w; });
    duolingo.known.split(/\s+/).forEach(function (ko) {
      if (byKo[ko] && byKo[ko].cats.indexOf(tag) < 0) byKo[ko].cats.push(tag);
    });
    duolingo.words.split('\n').forEach(function (line) {
      line = line.trim();
      if (!line) return;
      var p = line.split('|');
      var ko = p[0].trim();
      if (byKo[ko]) {
        if (byKo[ko].cats.indexOf(tag) < 0) byKo[ko].cats.push(tag);
        return;
      }
      var w = { ko: ko, en: p[1].trim(), level: Number(p[2]) || 1, cats: splitCats(p[3]).concat(tag), def: '', ex: '', custom: false, source: tag };
      byKo[ko] = w;
      out.push(w);
    });
  }

  // Replace the {marked} part of an example sentence with a blank.
  function blankExample(ex) {
    if (!ex) return '';
    return ex.replace(/\{[^}]*\}/g, '＿＿');
  }

  function plainExample(ex) {
    return (ex || '').replace(/[{}]/g, '');
  }

  // If an imported example has no {braces}, mark the word (or its stem) automatically.
  function autoMarkExample(ex, ko) {
    if (!ex || /\{[^}]*\}/.test(ex)) return ex;
    if (ex.indexOf(ko) >= 0) return ex.replace(ko, '{' + ko + '}');
    if (ko.length >= 2 && ko[ko.length - 1] === '다') {
      // Conjugated verbs: blank the stem (먹다 → {먹}어요). A one-syllable stem must appear only once.
      var stem = ko.slice(0, -1);
      var at = ex.indexOf(stem);
      if (at >= 0 && (stem.length > 1 || ex.indexOf(stem, at + 1) < 0)) return ex.replace(stem, '{' + stem + '}');
    }
    return '';
  }

  function cleanKorean(str) {
    return hangul.normalize(String(str || '')).replace(/\s+/g, '').replace(/[.,!?~·()[\]"'“”‘’]/g, '');
  }

  // Accepts 1/2/3, 초급/중급/고급, beginner/intermediate/advanced, A/B/C (NIKL grades),
  // or TOPIK 1–6 (e.g. "TOPIK 4", "topik4").
  function parseLevel(value, fallback) {
    if (value === undefined || value === null) return fallback;
    var s = String(value).trim().toLowerCase();
    if (!s) return fallback;
    var topik = s.match(/topik\s*(i{1,2}|[1-6])/);
    if (topik) {
      var t = topik[1];
      if (t === 'i') return 1;
      if (t === 'ii') return 2;
      var n = Number(t);
      return n <= 2 ? 1 : n <= 4 ? 2 : 3;
    }
    if (/^(1|a|초급|초|beginner|easy|basic)$/.test(s)) return 1;
    if (/^(2|b|중급|중|intermediate|medium)$/.test(s)) return 2;
    if (/^(3|c|고급|고|advanced|hard)$/.test(s)) return 3;
    if (/^[4]$/.test(s)) return 2;
    if (/^[56]$/.test(s)) return 3;
    return fallback;
  }

  function looksLikeLevel(value) {
    return parseLevel(value, null) !== null;
  }

  // Split one CSV line, honoring double quotes.
  function splitCsv(line, delim) {
    var out = [];
    var cur = '';
    var q = false;
    for (var i = 0; i < line.length; i++) {
      var c = line[i];
      if (q) {
        if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
        else if (c === '"') q = false;
        else cur += c;
      } else if (c === '"') {
        q = true;
      } else if (c === delim) {
        out.push(cur); cur = '';
      } else {
        cur += c;
      }
    }
    out.push(cur);
    return out.map(function (s) { return s.trim(); });
  }

  function splitLine(line) {
    if (line.indexOf('\t') >= 0) return splitCsv(line, '\t');
    if (line.indexOf('|') >= 0) return line.split('|').map(function (s) { return s.trim(); });
    // "사과 - apple, fruit" / "사과 = apple" / "사과: apple"
    var m = line.match(/^([가-힣 ]+?)\s*[-–—=:]\s*(.+)$/);
    if (m) return [m[1].trim(), m[2].trim()];
    if (line.indexOf(',') >= 0 || line.indexOf('"') >= 0) return splitCsv(line, ',');
    if (line.indexOf(';') >= 0) return splitCsv(line, ';');
    m = line.match(/^(\S+)\s+(.+)$/);
    if (m) return [m[1].trim(), m[2].trim()];
    return [line.trim()];
  }

  function fromObject(o, defaults) {
    var pick = function () {
      for (var i = 0; i < arguments.length; i++) {
        var k = arguments[i];
        if (o[k] !== undefined && o[k] !== null && String(o[k]).trim() !== '') return o[k];
      }
      return '';
    };
    var cats = pick('cats', 'categories', 'category', 'topic');
    var lv = pick('level', 'topik', 'grade', '등급');
    return {
      ko: extractKorean(pick('ko', 'korean', 'word', 'hangul', '단어', '한국어')),
      en: oneLine(pick('en', 'english', 'meaning', 'translation', 'translations', 'definition_en', '뜻', '영어')),
      level: parseLevel(lv, defaults.level),
      levelGiven: looksLikeLevel(lv),
      cats: Array.isArray(cats) ? cats : splitCats(cats),
      def: pick('def', 'definition', 'korean_definition', 'hint', '풀이', '뜻풀이'),
      ex: pick('ex', 'example', 'sentence', '예문')
    };
  }

  // Remove HTML, Anki sound/cloze markup and entities from a flashcard field.
  function stripMarkup(str) {
    var entities = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'" };
    return String(str == null ? '' : str)
      .replace(/\[sound:[^\]]*\]/g, ' ')
      .replace(/\{\{c\d+::(.*?)(::[^}]*)?\}\}/g, '$1')
      .replace(/<(br|\/div|\/p|\/li)\s*\/?>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/&(#\d+|#x[0-9a-f]+|[a-z]+|#39);/gi, function (m, e) {
        if (entities[e.toLowerCase()] !== undefined) return entities[e.toLowerCase()];
        if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1)));
        return m;
      })
      .replace(/[ \t ]+/g, ' ')
      .replace(/\s*\n\s*/g, '\n')
      .trim();
  }

  // The first run of Hangul in a field: "사과 (sagwa)" → 사과, "먹다 - to eat" → 먹다, "생일 파티" → 생일파티.
  function extractKorean(str) {
    var first = stripMarkup(str).split('\n')[0];
    var m = hangul.normalize(first).match(/[가-힣][가-힣 ]*/);
    return m ? m[0].replace(/\s+/g, ' ').trim() : '';
  }

  function oneLine(str) {
    return stripMarkup(str).replace(/\n+/g, '; ').trim();
  }

  // Field is "Korean" when it starts with Hangul or Hangul makes up most of its letters.
  function isKoreanField(str) {
    var t = stripMarkup(str);
    if (/^[^a-z가-힣]*[가-힣]/i.test(t)) return true;
    var ko = (t.match(/[가-힣]/g) || []).length;
    var latin = (t.match(/[a-z]/gi) || []).length;
    return ko > 0 && ko * 2 >= latin;
  }

  function isEnglishField(str) {
    var t = stripMarkup(str);
    return /[a-z]/i.test(t) && !isKoreanField(t);
  }

  // Guess which field is which from the content (flashcards, unknown CSVs).
  function fromFields(fields, defaults) {
    // The word is the shortest Korean field; longer ones are usually example sentences.
    var koIdx = -1, enIdx = -1, koLen = Infinity;
    for (var i = 0; i < fields.length; i++) {
      var k = isKoreanField(fields[i]) ? extractKorean(fields[i]) : '';
      if (k && k.length < koLen) { koIdx = i; koLen = k.length; }
      else if (!k && enIdx < 0 && isEnglishField(fields[i])) enIdx = i;
    }
    var rec = { ko: koIdx >= 0 ? extractKorean(fields[koIdx]) : '', en: enIdx >= 0 ? oneLine(fields[enIdx]) : '', level: defaults.level, cats: [], def: '', ex: '' };
    // A longer Korean field that uses the word is a good example sentence.
    if (rec.ko) {
      var word = rec.ko.replace(/\s+/g, '');
      var stem = word.length >= 2 && word[word.length - 1] === '다' ? word.slice(0, -1) : word;
      for (var j = 0; j < fields.length; j++) {
        if (j === koIdx || !isKoreanField(fields[j])) continue;
        var t = stripMarkup(fields[j]).split('\n')[0];
        if (t.length > rec.ko.length + 3 && t.indexOf(stem) >= 0) { rec.ex = t; break; }
      }
    }
    return rec;
  }

  // Columns: korean, english, [level], [categories], [Korean definition], [example]
  function fromColumns(cols, defaults) {
    var c = cols.slice();
    if (!isKoreanField(c[0] || '')) {
      if (c.length >= 2 && isKoreanField(c[1]) && isEnglishField(c[0])) { var t = c[0]; c[0] = c[1]; c[1] = t; }
      else return fromFields(cols, defaults);
    }
    var rec = { ko: extractKorean(c[0]), en: oneLine(c[1] || ''), level: defaults.level, cats: [], def: '', ex: '' };
    var rest = c.slice(2);
    if (rest.length && looksLikeLevel(rest[0])) {
      rec.level = parseLevel(rest.shift(), defaults.level);
      rec.levelGiven = true;
    }
    if (rest.length) rec.cats = splitCats(rest.shift());
    if (rest.length) rec.def = stripMarkup(rest.shift());
    if (rest.length) rec.ex = stripMarkup(rest.shift());
    return rec;
  }

  var HEADER_ROLES = [
    ['ko', /^(korean|korean word|word|hangul|hangeul|vocab|vocabulary|expression|lexeme|한국어|단어|낱말|어휘)$/],
    ['def', /^(korean[ _-]?(definition|clue|meaning)|def|hint|풀이|뜻풀이)$/],
    ['en', /^(english|meaning|meanings|translation|translations|definition|gloss|뜻|영어|의미)$/],
    ['level', /^(level|topik|topik level|grade|등급|난이도)$/],
    ['cats', /^(category|categories|topic|topics|주제)$/],
    ['ex', /^(example|examples|sentence|example sentence|korean example|예문)$/]
  ];

  // Map header names to roles; returns null when nothing useful is recognized.
  function headerMap(names) {
    var map = {};
    names.forEach(function (n, i) {
      var key = stripMarkup(n).toLowerCase().replace(/["']/g, '').trim();
      for (var k = 0; k < HEADER_ROLES.length; k++) {
        var role = HEADER_ROLES[k][0];
        if (map[role] === undefined && HEADER_ROLES[k][1].test(key)) { map[role] = i; break; }
      }
    });
    return map.ko !== undefined || map.en !== undefined ? map : null;
  }

  function fromMapped(cols, map, defaults) {
    var get = function (role) { return map[role] !== undefined ? cols[map[role]] || '' : ''; };
    var guess = null;
    var ko = get('ko');
    if (!ko || !isKoreanField(ko)) { guess = fromFields(cols, defaults); ko = guess.ko; } else ko = extractKorean(ko);
    var en = map.en !== undefined ? oneLine(get('en')) : (guess || fromFields(cols, defaults)).en;
    var lv = get('level');
    var rec = {
      ko: ko, en: en,
      level: parseLevel(lv, defaults.level),
      levelGiven: looksLikeLevel(lv),
      cats: splitCats(stripMarkup(get('cats'))),
      def: stripMarkup(get('def')),
      ex: map.ex !== undefined ? stripMarkup(get('ex')).split('\n')[0] : (guess ? guess.ex : '')
    };
    return rec;
  }

  /*
   * Parse pasted text or file contents into word records. Understands our own
   * format, CSV/TSV with header rows (Duolingo/Duoninja exports, spreadsheets),
   * Anki "Notes in Plain Text" exports, simple "word - meaning" lists and JSON.
   * Returns { words: [...], skipped: [{line, text, reason}] }.
   */
  function parseImport(text, defaults) {
    defaults = normDefaults(defaults);
    var raw = [];
    var trimmed = (text || '').replace(/^﻿/, '').trim();

    if (/^[[{]/.test(trimmed)) {
      try {
        var json = JSON.parse(trimmed);
        var arr = Array.isArray(json) ? json : (json.words || json.items || json.vocabulary || []);
        arr.forEach(function (o, i) {
          if (Array.isArray(o)) raw.push({ rec: fromColumns(o.map(String), defaults), line: i + 1, src: JSON.stringify(o) });
          else if (o && typeof o === 'object') raw.push({ rec: fromObject(o, defaults), line: i + 1, src: JSON.stringify(o) });
        });
      } catch (e) {
        return { words: [], skipped: [{ line: 0, text: '', reason: 'Could not read JSON: ' + e.message }] };
      }
      return finishImport(raw, defaults);
    }

    // Anki plain-text exports start with "#key:value" lines.
    var anki = { sep: null, drop: {}, columns: null, isAnki: false };
    var seps = { tab: '\t', comma: ',', semicolon: ';', pipe: '|', colon: ':', space: ' ' };
    var lines = trimmed.split(/\r?\n/);
    var map = null;
    var first = true;
    lines.forEach(function (line, i) {
      var meta = line.match(/^#([a-z ]+):(.*)$/i);
      if (meta) {
        var key = meta[1].trim().toLowerCase();
        var val = meta[2].trim();
        anki.isAnki = true;
        if (key === 'separator') anki.sep = seps[val.toLowerCase()] || val;
        else if (/^(guid|notetype|deck|tags) column$/.test(key)) anki.drop[Number(val) - 1] = true;
        else if (key === 'columns') anki.columns = val;
        return;
      }
      var src = line;
      if (!anki.isAnki) line = line.replace(/^\s*(\d+[.)]|[-*•])\s+/, '');
      if (!line.trim() || line[0] === '#') return;
      var cols = anki.sep ? splitCsv(line, anki.sep) : splitLine(line.trim());
      cols = cols.filter(function (c, k) { return !anki.drop[k]; });
      if (anki.columns && !map) {
        var names = splitCsv(anki.columns, anki.sep || '\t').filter(function (c, k) { return !anki.drop[k]; });
        map = headerMap(names) || { none: true };
      }
      if (first) {
        first = false;
        // A header row: no Korean in it.
        if (!hangul.hasHangul(line)) {
          if (!map) map = headerMap(cols);
          return;
        }
      }
      var rec;
      if (map && !map.none) rec = fromMapped(cols, map, defaults);
      else if (anki.isAnki) rec = fromFields(cols, defaults);
      else rec = fromColumns(cols, defaults);
      raw.push({ rec: rec, line: i + 1, src: src });
    });
    return finishImport(raw, defaults);
  }

  /*
   * Records from flashcard notes: [{ fields: [...], names: [...], tags, deck }].
   * Field names (from the Anki note type) are used when they're recognizable.
   */
  function parseNotes(notes, defaults) {
    defaults = normDefaults(defaults);
    var raw = notes.map(function (n, i) {
      var map = n.names ? headerMap(n.names) : null;
      var rec = map ? fromMapped(n.fields, map, defaults) : fromFields(n.fields, defaults);
      return { rec: rec, line: i + 1, src: n.fields.map(stripMarkup).filter(Boolean).join(' | ').slice(0, 80) };
    });
    return finishImport(raw, defaults);
  }

  function normDefaults(defaults) {
    defaults = Object.assign({}, defaults || {});
    defaults.level = defaults.level || 1;
    defaults.cats = defaults.cats || [];
    return defaults;
  }

  function finishImport(raw, defaults) {
    var words = [];
    var skipped = [];
    var seen = {};
    raw.forEach(function (r) {
      var rec = r.rec;
      var ko = cleanKorean(rec.ko);
      if (!ko) { skipped.push({ line: r.line, text: r.src, reason: 'No Korean word' }); return; }
      var tokens = String(rec.ko).trim().split(/\s+/);
      if (tokens.length > 2 || (tokens.length === 2 && /(요|니다|니까|세요)$/.test(ko))) { skipped.push({ line: r.line, text: r.src, reason: 'Looks like a sentence, not a word' }); return; }
      if (!hangul.isHangulWord(ko)) { skipped.push({ line: r.line, text: r.src, reason: 'Korean word must be complete Hangul syllables' }); return; }
      if (ko.length > MAX_LEN) { skipped.push({ line: r.line, text: r.src, reason: 'Longer than ' + MAX_LEN + ' syllables' }); return; }
      var en = String(rec.en || '').trim();
      if (!en) { skipped.push({ line: r.line, text: r.src, reason: 'Missing English meaning' }); return; }
      if (en.length > 120) en = en.slice(0, 117) + '…';
      if (seen[ko]) { skipped.push({ line: r.line, text: r.src, reason: 'Duplicate in this list' }); return; }
      seen[ko] = true;
      var cats = (rec.cats && rec.cats.length ? rec.cats : defaults.cats).map(normalizeCat);
      var ex = autoMarkExample(String(rec.ex || '').trim(), ko);
      words.push({
        ko: ko,
        en: en,
        level: rec.level || defaults.level,
        levelGiven: !!rec.levelGiven,
        cats: cats,
        def: String(rec.def || '').trim(),
        ex: ex,
        custom: true
      });
    });
    return { words: words, skipped: skipped };
  }

  // Map category names like "Food" or "음식" to built-in ids; keep anything else as a custom category.
  function normalizeCat(name) {
    var s = String(name).trim();
    var low = s.toLowerCase();
    for (var i = 0; i < data.CATEGORIES.length; i++) {
      var c = data.CATEGORIES[i];
      if (low === c.id || low === c.en.toLowerCase() || s === c.ko) return c.id;
      var parts = c.ko.split('·').concat(c.en.toLowerCase().split(/\s*&\s*/));
      if (parts.indexOf(s) >= 0 || parts.indexOf(low) >= 0) return c.id;
    }
    return s;
  }

  function toCsv(words) {
    var esc = function (v) {
      v = String(v == null ? '' : v);
      return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
    };
    var lines = ['korean,english,level,categories,korean_definition,example'];
    words.forEach(function (w) {
      lines.push([w.ko, w.en, w.level, (w.cats || []).join(';'), w.def, w.ex].map(esc).join(','));
    });
    return lines.join('\n');
  }

  var api = {
    parseBuiltin: parseBuiltin,
    parseImport: parseImport,
    parseNotes: parseNotes,
    stripMarkup: stripMarkup,
    parseLevel: parseLevel,
    normalizeCat: normalizeCat,
    blankExample: blankExample,
    plainExample: plainExample,
    autoMarkExample: autoMarkExample,
    cleanKorean: cleanKorean,
    toCsv: toCsv,
    MIN_LEN: MIN_LEN,
    CROSSWORD_MIN: CROSSWORD_MIN,
    MAX_LEN: MAX_LEN
  };
  root.KC = root.KC || {};
  root.KC.wordbank = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
