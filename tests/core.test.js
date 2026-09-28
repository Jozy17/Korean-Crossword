const test = require('node:test');
const assert = require('node:assert');
const H = require('../js/hangul.js');
const WB = require('../js/wordbank.js');
const G = require('../js/generator.js');
const DATA = require('../js/data/words.js');

test('romanization handles common sound changes', () => {
  const cases = {
    사과: 'sagwa', 김치: 'gimchi', 한국어: 'hangugeo', 맛있다: 'masitda', 좋아하다: 'joahada',
    신라: 'silla', 읽다: 'ikda', 먹다: 'meokda', 입학: 'iphak', 백화점: 'baekhwajeom', 독립: 'dongnip'
  };
  for (const [ko, rom] of Object.entries(cases)) assert.strictEqual(H.romanize(ko), rom, ko);
});

test('choseong hint', () => {
  assert.strictEqual(H.choseong('비빔밥'), 'ㅂㅂㅂ');
  assert.strictEqual(H.choseong('사과'), 'ㅅㄱ');
});

test('built-in word bank is well formed', () => {
  const words = WB.parseBuiltin();
  const cats = new Set(DATA.CATEGORIES.map(c => c.id));
  const seen = new Set();
  assert.ok(words.length > 700);
  for (const w of words) {
    assert.ok(!seen.has(w.ko), 'duplicate ' + w.ko);
    seen.add(w.ko);
    assert.ok(H.isHangulWord(w.ko) && w.ko.length >= 2, 'bad word ' + w.ko);
    assert.ok([1, 2, 3].includes(w.level));
    assert.ok(w.en && w.def, 'missing clue ' + w.ko);
    assert.match(w.ex, /\{[^}]+\}/, 'example needs a {blank}: ' + w.ko);
    assert.ok(!WB.blankExample(w.ex).includes(w.ko), 'example leaks answer: ' + w.ko);
    assert.ok(!w.def.includes(w.ko), 'definition leaks answer: ' + w.ko);
    for (const c of w.cats) assert.ok(cats.has(c), 'unknown category ' + c);
  }
});

test('import accepts CSV, TSV, dash lists and JSON', () => {
  const text = [
    'korean,english,level,topic',
    '김치볶음밥, kimchi fried rice, 1, food',
    '공항 - airport',
    '환율\texchange rate\tTOPIK 5\tshopping;Society & culture',
    '"생일 파티","birthday party, celebration",초급',
    'x, bad',
    '사,one'
  ].join('\n');
  const res = WB.parseImport(text, { level: 2 });
  assert.deepStrictEqual(res.words.map(w => w.ko), ['김치볶음밥', '공항', '환율', '생일파티']);
  assert.strictEqual(res.words[1].level, 2);
  assert.strictEqual(res.words[2].level, 3);
  assert.deepStrictEqual(res.words[2].cats, ['shopping', 'society']);
  assert.strictEqual(res.words[3].en, 'birthday party, celebration');
  assert.strictEqual(res.skipped.length, 2);

  const json = WB.parseImport(JSON.stringify([{ korean: '떡갈비', english: 'rib patties', level: 'B', example: '점심에 떡갈비를 먹었어요.' }]));
  assert.strictEqual(json.words[0].level, 2);
  assert.strictEqual(json.words[0].ex, '점심에 {떡갈비}를 먹었어요.');
});

test('generator builds valid connected grids', () => {
  const all = WB.parseBuiltin();
  for (const level of [1, 2, 3]) {
    const theme = all.filter(w => w.level === level && w.cats.includes('food'));
    const fillers = all.filter(w => w.level <= level);
    const p = G.generate(theme, fillers, { target: 9, maxSize: 9, seed: 42 + level });
    assert.ok(p.words.length >= 4, 'too few words at level ' + level);
    assert.ok(p.rows <= 9 && p.cols <= 9);
    // Every word matches the grid, and every filled cell belongs to a word.
    const covered = new Set();
    for (const w of p.words) {
      for (let i = 0; i < w.len; i++) {
        const r = w.dir === 'down' ? w.r + i : w.r;
        const c = w.dir === 'down' ? w.c : w.c + i;
        assert.strictEqual(p.grid[r][c].ch, w.answer[i]);
        covered.add(r + ',' + c);
      }
    }
    p.grid.forEach((row, r) => row.forEach((cell, c) => { if (cell) assert.ok(covered.has(r + ',' + c)); }));
    // No unintended words: every run of 2+ filled cells is a placed word.
    const runs = new Set(p.words.map(w => w.dir + ':' + w.r + ',' + w.c + ':' + w.len));
    for (let r = 0; r < p.rows; r++) {
      for (let c = 0; c < p.cols; c++) {
        if (!p.grid[r][c]) continue;
        if (!(c > 0 && p.grid[r][c - 1])) {
          let len = 0; while (c + len < p.cols && p.grid[r][c + len]) len++;
          if (len > 1) assert.ok(runs.has('across:' + r + ',' + c + ':' + len), 'stray across run');
        }
        if (!(r > 0 && p.grid[r - 1][c])) {
          let len = 0; while (r + len < p.rows && p.grid[r + len][c]) len++;
          if (len > 1) assert.ok(runs.has('down:' + r + ',' + c + ':' + len), 'stray down run');
        }
      }
    }
  }
});
