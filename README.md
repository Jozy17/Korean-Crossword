# 한글 Crossword

A Korean vocabulary crossword game for phones and computers. Every square holds one Hangul syllable (사|과), and words cross where they share a syllable.

## Features

- **3 levels** following the National Institute of Korean Language learner vocabulary grades (국립국어원 한국어 학습용 어휘 목록, A/B/C), the list most TOPIK study material builds on:
  - 초급 Beginner: TOPIK I (1–2)
  - 중급 Intermediate: TOPIK II (3–4)
  - 고급 Advanced: TOPIK II (5–6)
- **14 topics**: food, colors, things to do, places, people & family, body & health, weather & nature, time, transport, home, shopping & money, school & work, feelings, society & culture. Topics you create with your own words show up too.
- **Clues in English or Korean.** Switch all clues with the EN/한 toggle, or flip one clue at a time. Korean clues are a mix of short definitions (뜻풀이) and fill-in-the-blank sentences (예문). You can choose one style in Settings.
- **Hints:** 초성 hint (initial consonants such as ㅂㅂㅂ), reveal one syllable, check word, reveal word, check all.
- **Audio:** the browser's Korean voice reads solved words and Korean clues aloud.
- **Romanization** (Revised Romanization, approximate) under Korean clues and in word lists.
- **Review list:** words you reveal or get wrong are saved. Solve one twice without help and it's cleared. There's also a "Practice these words" puzzle.
- **Timer, score and daily streak.**
- **Your own words:** add them one at a time, or import a list (CSV, TSV, TXT or JSON, pasted or from a file). You can export them as CSV.
- **Works offline** and can be added to the iPhone home screen.

Puzzles are generated fresh every time. Words you've seen less, and words on your review list, come up more often. Korean words share syllables less often than English words share letters. So a topic puzzle may include a few **bonus** words from another topic, at the same or an easier level, to connect the grid.

## Playing on an iPhone

1. Host the site. The easiest way is GitHub Pages: repo **Settings → Pages → Deploy from a branch**, then pick the branch and `/ (root)`.
2. Open the URL in Safari, tap **Share → Add to Home Screen**.
3. Tap a square or a clue, then type the whole word with the Korean keyboard. Syllables fill in as you type. **Return** jumps to the next unsolved clue.

## Running locally

No build step and no dependencies:

```sh
python3 -m http.server 8000   # or: npm start
# open http://localhost:8000
```

Opening `index.html` directly also works (offline caching needs http/https).

## Importing words

Only the Korean word and the English meaning are needed:

```
korean, english, level, topics, Korean definition, example
사과, apple, 1, food, 빨갛고 둥근 과일, 아침에 {사과}를 먹었어요.
공항 - airport
환율	exchange rate	TOPIK 5	shopping
```

- The level can be `1/2/3`, `초급/중급/고급`, `A/B/C`, or `TOPIK 1–6`.
- Separate several topics with `;`. Unknown topic names become new topics.
- In example sentences, put the answer in `{braces}`. If the word appears as written, it's marked automatically.
- If you import a word that's already built in, your meaning and level are used and the built-in clues are kept.

Everything you add is stored in your browser (localStorage) on that device. Use **Export CSV** to back it up or move it to another device.

## Word bank

`js/data/words.js` has about 750 words, each with an English meaning, a Korean definition and an example sentence. The beginner and intermediate words come mostly from the NIKL learner list. Advanced words also include common TOPIK II exam vocabulary that isn't on the 2003 list. The English meanings, definitions and example sentences were written for this project. Please report any mistakes.

To add words to the built-in bank, add lines to the right level block:

```
korean|english|categories|Korean definition|example with {answer}
```

## Development

```sh
npm test   # checks romanization, the word bank, import parsing and the grid generator
```

| File | Purpose |
| --- | --- |
| `js/data/words.js` | Built-in word bank, topics, levels |
| `js/hangul.js` | Syllable helpers, 초성, romanization |
| `js/wordbank.js` | Word parsing, list import/export |
| `js/generator.js` | Crossword layout generator |
| `js/app.js` | UI and game logic |
| `sw.js`, `manifest.webmanifest` | Offline support, home-screen install |
