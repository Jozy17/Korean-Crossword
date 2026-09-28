/* Word bank: parses the built-in list, merges custom words, and imports
 * word lists pasted or loaded from CSV / TSV / TXT / JSON files. */
(function (root) {
  var hangul = root.KC && root.KC.hangul;
  var data = root.KC && root.KC.data;
  if (typeof module !== 'undefined' && module.exports) {
    hangul = require('./hangul.js');
    data = require('./data/words.js');
  }

  var MIN_LEN = 2;
  var MAX_LEN = 8;

  function splitCats(str) {
    return (str || '')
      .split(/[,;|/]/)
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  function parseBuiltin() {
    var out = [];
    Object.keys(data.RAW).forEach(function (lvl) {
      data.RAW[lvl].split('\n').forEach(function (line) {
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
    return out;
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
    var stem = ko.length > 2 && ko[ko.length - 1] === '다' ? ko.slice(0, -1) : ko;
    if (ex.indexOf(ko) >= 0) return ex.replace(ko, '{' + ko + '}');
    if (ko[ko.length - 1] === '다' && ex.indexOf(stem) >= 0) return ex.replace(stem, '{' + stem + '}');
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
    var cats = pick('cats', 'categories', 'category', 'topic', 'tags');
    return {
      ko: pick('ko', 'korean', 'word', 'hangul', '단어', '한국어'),
      en: pick('en', 'english', 'meaning', 'translation', 'definition_en', '뜻', '영어'),
      level: parseLevel(pick('level', 'topik', 'grade', '등급'), defaults.level),
      cats: Array.isArray(cats) ? cats : splitCats(cats),
      def: pick('def', 'definition', 'korean_definition', 'hint', '풀이', '뜻풀이'),
      ex: pick('ex', 'example', 'sentence', '예문')
    };
  }

  // Columns: korean, english, [level], [categories], [Korean definition], [example]
  function fromColumns(cols, defaults) {
    var c = cols.slice();
    // Tolerate "english, korean" order.
    if (c.length >= 2 && !hangul.hasHangul(c[0]) && hangul.hasHangul(c[1])) {
      var t = c[0]; c[0] = c[1]; c[1] = t;
    }
    var rec = { ko: c[0], en: c[1] || '', level: defaults.level, cats: [], def: '', ex: '' };
    var rest = c.slice(2);
    if (rest.length && looksLikeLevel(rest[0])) {
      rec.level = parseLevel(rest.shift(), defaults.level);
    }
    if (rest.length) rec.cats = splitCats(rest.shift());
    if (rest.length) rec.def = rest.shift();
    if (rest.length) rec.ex = rest.shift();
    return rec;
  }

  /*
   * Parse pasted text or file contents into word records.
   * Returns { words: [...], skipped: [{line, reason}] }.
   */
  function parseImport(text, defaults) {
    defaults = defaults || {};
    defaults.level = defaults.level || 1;
    defaults.cats = defaults.cats || [];
    var raw = [];
    var trimmed = (text || '').replace(/^﻿/, '').trim();

    if (/^[[{]/.test(trimmed)) {
      try {
        var json = JSON.parse(trimmed);
        var arr = Array.isArray(json) ? json : (json.words || json.items || []);
        arr.forEach(function (o, i) {
          if (Array.isArray(o)) raw.push({ rec: fromColumns(o.map(String), defaults), line: i + 1, src: JSON.stringify(o) });
          else if (o && typeof o === 'object') raw.push({ rec: fromObject(o, defaults), line: i + 1, src: JSON.stringify(o) });
        });
      } catch (e) {
        return { words: [], skipped: [{ line: 0, text: '', reason: 'Could not read JSON: ' + e.message }] };
      }
    } else {
      var lines = trimmed.split(/\r?\n/);
      lines.forEach(function (line, i) {
        var src = line;
        line = line.replace(/^\s*(\d+[.)]|[-*•])\s+/, '').trim();
        if (!line || line[0] === '#') return;
        var cols = splitLine(line);
        // Skip a header row (no Hangul anywhere, or common header words).
        if (i === 0 && (!hangul.hasHangul(line) || /^(korean|word|한국어|단어)$/i.test(cols[0]))) return;
        raw.push({ rec: fromColumns(cols, defaults), line: i + 1, src: src });
      });
    }

    var words = [];
    var skipped = [];
    var seen = {};
    raw.forEach(function (r) {
      var rec = r.rec;
      var ko = cleanKorean(rec.ko);
      if (!ko) { skipped.push({ line: r.line, text: r.src, reason: 'No Korean word' }); return; }
      if (!hangul.isHangulWord(ko)) { skipped.push({ line: r.line, text: r.src, reason: 'Korean word must be complete Hangul syllables' }); return; }
      if (ko.length < MIN_LEN) { skipped.push({ line: r.line, text: r.src, reason: 'Needs at least 2 syllables to fit a crossword' }); return; }
      if (ko.length > MAX_LEN) { skipped.push({ line: r.line, text: r.src, reason: 'Longer than ' + MAX_LEN + ' syllables' }); return; }
      var en = String(rec.en || '').trim();
      if (!en) { skipped.push({ line: r.line, text: r.src, reason: 'Missing English meaning' }); return; }
      if (seen[ko]) { skipped.push({ line: r.line, text: r.src, reason: 'Duplicate in this list' }); return; }
      seen[ko] = true;
      var cats = (rec.cats && rec.cats.length ? rec.cats : defaults.cats).map(normalizeCat);
      var ex = autoMarkExample(String(rec.ex || '').trim(), ko);
      words.push({
        ko: ko,
        en: en,
        level: rec.level || defaults.level,
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
    parseLevel: parseLevel,
    normalizeCat: normalizeCat,
    blankExample: blankExample,
    plainExample: plainExample,
    autoMarkExample: autoMarkExample,
    cleanKorean: cleanKorean,
    toCsv: toCsv,
    MIN_LEN: MIN_LEN,
    MAX_LEN: MAX_LEN
  };
  root.KC = root.KC || {};
  root.KC.wordbank = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
