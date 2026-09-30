const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const WB = require('../js/wordbank.js');
const anki = require('../js/anki.js');

const fixture = name => fs.readFileSync(path.join(__dirname, 'fixtures', name));

test('reads an older Anki deck (collection.anki2) using field names', async () => {
  const deck = await anki.read(fixture('legacy.apkg'));
  assert.deepStrictEqual(deck.decks, ['Korean::Beginner']);
  const res = WB.parseNotes(deck.notes, { level: 1 });
  assert.deepStrictEqual(res.words.map(w => [w.ko, w.en, w.ex]), [
    ['사과', 'apple', '아침에 {사과}를 먹었어요.'],
    ['먹다', 'to eat; to have (a meal)', '저는 밥을 {먹}어요.'],
    ['도서관', 'library', '책을 빌리러 {도서관}에 가요.']
  ]);
  assert.deepStrictEqual(res.skipped.map(s => s.reason), [
    'Needs at least 2 syllables to fit a crossword',
    'Looks like a sentence, not a word'
  ]);
});

test('reads a new Anki deck (zstd collection.anki21b) with English on the front', async () => {
  const deck = await anki.read(fixture('modern.apkg'));
  assert.deepStrictEqual(deck.decks, ['Korean::Food']);
  const res = WB.parseNotes(deck.notes, { level: 2, cats: ['food'] });
  assert.deepStrictEqual(res.words.map(w => [w.ko, w.en, w.level, w.cats]), [
    ['김치', 'kimchi', 2, ['food']],
    ['떡국', 'rice cake soup', 2, ['food']],
    ['과일', 'fruit', 2, ['food']]
  ]);
});

test('rejects files that are not decks', async () => {
  await assert.rejects(anki.read(Buffer.from('not a zip')), /valid Anki deck/);
});

test('imports Anki "Notes in Plain Text" exports', () => {
  const text = [
    '#separator:tab',
    '#html:true',
    '#notetype column:1',
    '#deck column:2',
    'Basic\tKorean\t<b>사과</b> [sound:a.mp3]\tapple<br>fruit',
    'Basic\tKorean\tto eat\t먹다 (meokda)\t저는 밥을 먹어요.',
    'Basic\tKorean\t저는 학생이에요\tI am a student'
  ].join('\n');
  const res = WB.parseImport(text);
  assert.deepStrictEqual(res.words.map(w => [w.ko, w.en, w.ex]), [
    ['사과', 'apple; fruit', ''],
    ['먹다', 'to eat', '저는 밥을 {먹}어요.']
  ]);
  assert.strictEqual(res.skipped.length, 1);
});

test('imports word-list CSVs with header rows (Duolingo / Duoninja style)', () => {
  const res = WB.parseImport('Word,Translation,Skill\n사과,"apple, fruit",Food\n학교,school,Basics');
  assert.deepStrictEqual(res.words.map(w => [w.ko, w.en, w.levelGiven]), [['사과', 'apple, fruit', false], ['학교', 'school', false]]);

  const flipped = WB.parseImport('English,Korean,Romanization,Level\nmilk,우유,uyu,TOPIK 1');
  assert.deepStrictEqual(flipped.words.map(w => [w.ko, w.en, w.level, w.levelGiven]), [['우유', 'milk', 1, true]]);

  const own = WB.parseImport(WB.toCsv([{ ko: '사과', en: 'apple', level: 3, cats: ['food'], def: '과일', ex: '{사과}를 먹어요.' }]));
  assert.deepStrictEqual(own.words.map(w => [w.ko, w.level, w.cats, w.def, w.ex]), [['사과', 3, ['food'], '과일', '{사과}를 먹어요.']]);
});
