/* 한글 Crossword — UI and game logic. */
(function () {
  'use strict';

  var KC = window.KC;
  var H = KC.hangul;
  var WB = KC.wordbank;
  var DATA = KC.data;
  var store = KC.storage;

  var SIZES = {
    small: { target: 6, maxSize: 7 },
    medium: { target: 9, maxSize: 9 },
    large: { target: 12, maxSize: 11 }
  };
  var REVIEW_CAT = '__review';

  var DEFAULT_SETTINGS = {
    level: 1,
    category: 'all',
    size: 'medium',
    includeEasier: true,
    hintLang: 'en',
    koStyle: 'mix',
    romanization: false,
    autoCheck: true,
    autoSpeak: true,
    rate: 0.9,
    theme: 'auto'
  };

  var settings = Object.assign({}, DEFAULT_SETTINGS, store.load('settings', {}));
  var custom = store.load('custom', []);
  var progress = Object.assign({ seen: {}, missed: {}, recent: [], stats: {} }, store.load('progress', {}));
  progress.stats = Object.assign({ puzzles: 0, words: 0, best: {}, streakDays: 0, lastDay: null }, progress.stats);

  var builtin = WB.parseBuiltin();
  var game = store.load('game', null);
  var input = null; // answer <input>
  var snapshot = null; // values of the selected word's open squares when it was selected
  var openSlots = []; // squares of the selected word that typing fills (fixed squares are skipped)
  var timerId = null;

  // ---------- helpers ----------
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function saveSettings() { store.save('settings', settings); }
  function saveProgress() { store.save('progress', progress); }
  function saveCustom() { store.save('custom', custom); }
  var saveGameTimer = null;
  function saveGame() {
    clearTimeout(saveGameTimer);
    saveGameTimer = setTimeout(function () { store.save('game', game); }, 250);
  }

  var toastTimer = null;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  function fmtTime(ms) {
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    s = s % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function applyTheme() {
    if (settings.theme === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', settings.theme);
  }

  // ---------- word bank ----------
  function allWords() {
    var byKo = {};
    builtin.forEach(function (w) { byKo[w.ko] = w; });
    custom.forEach(function (w) { byKo[w.ko] = w; });
    return Object.keys(byKo).map(function (k) { return byKo[k]; });
  }

  function categoryList() {
    var cats = DATA.CATEGORIES.slice();
    var known = {};
    cats.forEach(function (c) { known[c.id] = true; });
    custom.forEach(function (w) {
      (w.cats || []).forEach(function (c) {
        if (!known[c]) { known[c] = true; cats.push({ id: c, ko: c, en: '', icon: '🏷️', custom: true }); }
      });
    });
    return cats;
  }

  function catById(id) {
    return categoryList().filter(function (c) { return c.id === id; })[0];
  }

  function catLabel(id) {
    if (id === 'all') return '전체 All topics';
    if (id === REVIEW_CAT) return '복습 Review';
    var c = catById(id);
    if (!c) return id;
    return c.en ? c.ko + ' ' + c.en : c.ko;
  }

  function levelInfo(id) {
    return DATA.LEVELS.filter(function (l) { return l.id === id; })[0] || DATA.LEVELS[0];
  }

  function missedKeys() {
    return Object.keys(progress.missed || {});
  }

  // ---------- speech ----------
  var voices = [];
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = window.speechSynthesis.getVoices().filter(function (v) {
      return /^ko/i.test(v.lang.replace('_', '-'));
    });
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function speak(text) {
    if (!('speechSynthesis' in window)) { toast('Speech is not supported in this browser'); return; }
    if (!text) return;
    var synth = window.speechSynthesis;
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'ko-KR';
    if (voices.length) u.voice = voices[0];
    u.rate = Number(settings.rate) || 0.9;
    synth.speak(u);
  }

  // ---------- navigation ----------
  var current = 'home';
  function show(screen) {
    ['home', 'game', 'review', 'words'].forEach(function (s) {
      $('screen-' + s).hidden = s !== screen;
    });
    current = screen;
    $('backBtn').hidden = screen === 'home';
    $('gameMeta').hidden = screen !== 'game';
    $('brand').hidden = screen === 'game';
    if (screen !== 'game') stopTimer();
    if (screen === 'home') renderHome();
    if (screen === 'review') renderReview();
    if (screen === 'words') renderWords();
    window.scrollTo(0, 0);
  }

  // ---------- home ----------
  function poolFor(level, category, includeEasier) {
    var words = allWords();
    if (category === REVIEW_CAT) {
      var keys = {};
      missedKeys().forEach(function (k) { keys[k] = true; });
      return words.filter(function (w) { return keys[w.ko]; });
    }
    return words.filter(function (w) {
      var inCat = category === 'all' || (w.cats || []).indexOf(category) >= 0;
      if (!inCat) return false;
      if (w.level === level) return true;
      return includeEasier && category !== 'all' && w.level < level;
    });
  }

  function renderHome() {
    var lp = $('levelPicker');
    lp.innerHTML = DATA.LEVELS.map(function (l) {
      return '<button class="level-card" data-level="' + l.id + '" aria-pressed="' + (settings.level === l.id) + '">' +
        '<span class="lv-ko">' + l.ko + '</span><span class="lv-en">' + l.en + '</span>' +
        '<span class="lv-topik">' + l.topik + '</span></button>';
    }).join('');

    var cats = [{ id: 'all', ko: '전체', en: 'All', icon: '🎲' }].concat(categoryList());
    var html = cats.map(function (c) {
      var n = poolFor(settings.level, c.id, false).length;
      var label = c.en ? c.ko + ' · ' + c.en : c.ko;
      return '<button class="chip" data-cat="' + esc(c.id) + '" aria-pressed="' + (settings.category === c.id) + '"' +
        (n < 2 ? ' disabled' : '') + '>' + c.icon + ' ' + esc(label) + ' <small>' + n + '</small></button>';
    }).join('');
    var nMissed = missedKeys().length;
    html += '<button class="chip" data-cat="' + REVIEW_CAT + '" aria-pressed="' + (settings.category === REVIEW_CAT) + '"' +
      (nMissed < 2 ? ' disabled' : '') + '>⭐ 복습 · Review <small>' + nMissed + '</small></button>';
    $('categoryPicker').innerHTML = html;

    Array.prototype.forEach.call($('sizePicker').children, function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.size === settings.size));
    });
    $('includeEasier').checked = !!settings.includeEasier;
    $('easierRow').hidden = settings.level === 1 || settings.category === 'all' || settings.category === REVIEW_CAT;

    if (game && !game.done) {
      $('continueCard').hidden = false;
      var filled = countFilled();
      $('continueInfo').textContent = levelInfo(game.level).ko + ' · ' + catLabel(game.category) + ' · ' + filled + '% filled';
    } else {
      $('continueCard').hidden = true;
    }

    $('reviewCount').textContent = nMissed ? nMissed + ' word' + (nMissed === 1 ? '' : 's') + ' to practice' : 'Words to practice';
    var st = progress.stats;
    $('statsLine').textContent = st.puzzles
      ? st.puzzles + ' puzzle' + (st.puzzles === 1 ? '' : 's') + ' solved · ' + st.words + ' words · ' +
        (st.streakDays > 1 ? '🔥 ' + st.streakDays + '-day streak' : 'Keep it up!')
      : 'Words from the NIKL learner vocabulary list, graded by TOPIK level.';
  }

  function countFilled() {
    if (!game) return 0;
    var total = 0, filled = 0;
    for (var r = 0; r < game.rows; r++) {
      for (var c = 0; c < game.cols; c++) {
        if (game.solution[r][c]) { total++; if (game.fill[r][c]) filled++; }
      }
    }
    return total ? Math.round((filled / total) * 100) : 0;
  }

  // ---------- puzzle creation ----------
  function weightFor(w, level) {
    var seen = progress.seen[w.ko] || 0;
    var weight = 1 / (1 + seen * 0.6);
    if (progress.missed[w.ko]) weight += 1.5;
    if (w.level !== level) weight *= 0.5;
    if (w.custom) weight += 0.5;
    return weight;
  }

  function newGame(opts) {
    opts = opts || {};
    var level = opts.level || settings.level;
    var category = opts.category || settings.category;
    var size = SIZES[settings.size] || SIZES.medium;
    var theme = poolFor(level, category, settings.includeEasier);
    if (theme.length < 2) {
      toast('Not enough words for this topic yet');
      return false;
    }
    var maxLevel = level;
    if (category === REVIEW_CAT) maxLevel = Math.max.apply(null, theme.map(function (w) { return w.level; }));
    var fillers = category === 'all' ? [] : allWords().filter(function (w) { return w.level <= maxLevel; });
    var weigh = function (w) { return Object.assign({}, w, { weight: weightFor(w, level) }); };
    var puzzle = KC.generator.generate(theme.map(weigh), fillers.map(weigh), { target: size.target, maxSize: size.maxSize });
    if (!puzzle || puzzle.words.length < 2) {
      toast('Could not build a puzzle from these words. Try another topic.');
      return false;
    }
    var solution = puzzle.grid.map(function (row) { return row.map(function (c) { return c ? c.ch : null; }); });
    game = {
      id: Date.now(),
      level: level,
      category: category,
      size: settings.size,
      rows: puzzle.rows,
      cols: puzzle.cols,
      solution: solution,
      fill: solution.map(function (row) { return row.map(function () { return ''; }); }),
      locked: solution.map(function (row) { return row.map(function () { return false; }); }),
      wrong: solution.map(function (row) { return row.map(function () { return false; }); }),
      words: puzzle.words.map(function (w) {
        var e = w.entry;
        var koClue = 'def';
        if (e.ex && !e.def) koClue = 'ex';
        else if (e.ex && e.def) {
          if (settings.koStyle === 'ex') koClue = 'ex';
          else if (settings.koStyle === 'mix') koClue = Math.random() < 0.5 ? 'ex' : 'def';
        }
        return {
          num: w.num, dir: w.dir, r: w.r, c: w.c, len: w.len, answer: w.answer, bridge: w.bridge,
          entry: { ko: e.ko, en: e.en, level: e.level, cats: e.cats, def: e.def, ex: e.ex, custom: !!e.custom },
          koClue: koClue,
          flipped: false,
          hints: { cho: false, reveals: 0, wrongChecks: 0, revealedWord: false },
          solved: false,
          checked: false
        };
      }),
      sel: 0,
      elapsed: 0,
      done: false
    };
    store.save('game', game);
    startGameScreen();
    return true;
  }

  // ---------- game screen ----------
  function cellsOf(w) {
    var out = [];
    for (var i = 0; i < w.len; i++) {
      out.push(w.dir === 'across' ? [w.r, w.c + i] : [w.r + i, w.c]);
    }
    return out;
  }

  function wordsAt(r, c) {
    var out = [];
    game.words.forEach(function (w, i) {
      cellsOf(w).forEach(function (p) { if (p[0] === r && p[1] === c) out.push(i); });
    });
    return out;
  }

  function isWordCorrect(w) {
    return cellsOf(w).every(function (p) { return game.fill[p[0]][p[1]] === game.solution[p[0]][p[1]]; });
  }

  function wordPoints(w) {
    if (w.hints.revealedWord) return 0;
    var pts = 10 * (w.entry.level || 1) - (w.hints.cho ? 3 : 0) - w.hints.reveals * 5 - w.hints.wrongChecks * 2;
    return Math.max(0, pts);
  }

  function liveScore() {
    return game.words.reduce(function (a, w) { return a + (isWordCorrect(w) ? wordPoints(w) : 0); }, 0);
  }

  function startGameScreen() {
    show('game');
    var lv = levelInfo(game.level);
    $('gameTitle').textContent = lv.ko + ' ' + lv.en + ' · ' + catLabel(game.category);
    renderGrid();
    renderClueLists();
    selectWord(game.sel || 0, false);
    updateMeta();
    startTimer();
  }

  function cellSize() {
    var avail = Math.min(document.querySelector('main').clientWidth - 32, 640);
    var gap = 3;
    var size = Math.floor((avail - gap * (game.cols - 1)) / game.cols);
    // Leave room for the clue and answer box (and the phone keyboard) below the grid.
    var tall = Math.floor((window.innerHeight * 0.42 - gap * (game.rows - 1)) / game.rows);
    return Math.max(26, Math.min(54, size, Math.max(30, tall)));
  }

  function renderGrid() {
    var g = $('grid');
    var size = cellSize();
    g.style.gridTemplateColumns = 'repeat(' + game.cols + ', ' + size + 'px)';
    g.style.gridAutoRows = size + 'px';
    g.style.fontSize = Math.round(size * 0.5) + 'px';
    var nums = {};
    game.words.forEach(function (w) { nums[w.r + ',' + w.c] = w.num; });
    var html = '';
    for (var r = 0; r < game.rows; r++) {
      for (var c = 0; c < game.cols; c++) {
        if (!game.solution[r][c]) { html += '<div class="cell block"></div>'; continue; }
        var n = nums[r + ',' + c];
        html += '<button class="cell" data-r="' + r + '" data-c="' + c + '" aria-label="Row ' + (r + 1) + ' column ' + (c + 1) + '">' +
          (n ? '<span class="num">' + n + '</span>' : '') + '<span class="ch"></span></button>';
      }
    }
    g.innerHTML = html;
    refreshCells();
  }

  function cellEl(r, c) {
    return $('grid').querySelector('.cell[data-r="' + r + '"][data-c="' + c + '"]');
  }

  function refreshCells() {
    var sel = game.words[game.sel];
    var selCells = {};
    var cursorKey = null;
    if (sel) {
      cellsOf(sel).forEach(function (p) { selCells[p[0] + ',' + p[1]] = true; });
      var typed = input ? Array.from(input.value).length : 0;
      if (typed < openSlots.length) cursorKey = openSlots[typed][0] + ',' + openSlots[typed][1];
    }
    var correctCells = {};
    game.words.forEach(function (w) {
      if (isShownCorrect(w)) {
        cellsOf(w).forEach(function (p) { correctCells[p[0] + ',' + p[1]] = true; });
      }
    });
    Array.prototype.forEach.call($('grid').querySelectorAll('.cell[data-r]'), function (el) {
      var r = +el.dataset.r, c = +el.dataset.c, key = r + ',' + c;
      el.querySelector('.ch').textContent = game.fill[r][c] || '';
      el.classList.toggle('in-word', !!selCells[key]);
      el.classList.toggle('cursor', key === cursorKey);
      el.classList.toggle('correct', !!correctCells[key]);
      el.classList.toggle('wrong', !!game.wrong[r][c]);
      el.classList.toggle('revealed', !!game.locked[r][c]);
    });
  }

  function clueText(w) {
    var lang = w.flipped ? (settings.hintLang === 'en' ? 'ko' : 'en') : settings.hintLang;
    if (lang === 'en') return { text: w.entry.en, lang: 'en' };
    var e = w.entry;
    if (w.koClue === 'ex' && e.ex) return { text: WB.blankExample(e.ex), lang: 'ko', speak: WB.blankExample(e.ex).replace(/＿＿/g, '무엇') };
    if (e.def) return { text: e.def, lang: 'ko', speak: e.def };
    if (e.ex) return { text: WB.blankExample(e.ex), lang: 'ko', speak: WB.blankExample(e.ex).replace(/＿＿/g, '무엇') };
    return { text: e.en, lang: 'en', note: 'no Korean clue yet' };
  }

  function renderClueLists() {
    ['across', 'down'].forEach(function (dir) {
      var list = $(dir === 'across' ? 'acrossList' : 'downList');
      list.innerHTML = game.words.map(function (w, i) {
        if (w.dir !== dir) return '';
        var ct = clueText(w);
        var cls = (i === game.sel ? 'active ' : '') + (isWordCorrect(w) ? 'solved' : '');
        return '<li data-i="' + i + '" class="' + cls + '"><span class="n">' + w.num + '</span>' +
          '<span class="t" lang="' + ct.lang + '">' + esc(ct.text) +
          (w.bridge && game.category !== 'all' ? '<span class="tag" title="Bridge word from another topic">bonus</span>' : '') +
          '</span><span class="len">(' + w.len + ')</span></li>';
      }).join('');
    });
  }

  function renderClueBar() {
    var w = game.words[game.sel];
    if (!w) return;
    var ct = clueText(w);
    $('clueLabel').textContent = w.num + ' ' + (w.dir === 'across' ? '가로 Across' : '세로 Down') + ' · ' + w.len + '글자' +
      (ct.note ? ' · ' + ct.note : '');
    $('clueText').textContent = ct.text;
    $('clueText').lang = ct.lang;
    var showRoman = settings.romanization && ct.lang === 'ko';
    $('clueRoman').hidden = !showRoman;
    if (showRoman) $('clueRoman').textContent = H.romanize(ct.text);
    $('clueCho').hidden = !w.hints.cho;
    if (w.hints.cho) $('clueCho').textContent = H.choseong(w.answer).split('').join(' ');
    $('flipClue').textContent = ct.lang === 'en' ? '한' : 'EN';
    $('flipClue').title = ct.lang === 'en' ? 'Show this clue in Korean' : 'Show this clue in English';
    $('langEn').setAttribute('aria-pressed', String(settings.hintLang === 'en'));
    $('langKo').setAttribute('aria-pressed', String(settings.hintLang === 'ko'));
  }

  // A word shows green once it's right (instantly, or after "Check" when auto-check is off).
  function isShownCorrect(w) {
    return isWordCorrect(w) && (settings.autoCheck || w.checked);
  }

  // Squares the current word can't change: revealed ones and ones that belong
  // to a finished (green) crossing word. Typing skips over these.
  function isFixedFor(i, r, c) {
    if (game.locked[r][c]) return true;
    return wordsAt(r, c).some(function (j) { return j !== i && isShownCorrect(game.words[j]); });
  }

  function selectWord(i, focus) {
    if (!game.words[i]) i = 0;
    game.sel = i;
    var w = game.words[i];
    // The answer box holds only the open squares, frozen while this word is selected.
    openSlots = cellsOf(w).filter(function (p) { return !isFixedFor(i, p[0], p[1]); });
    var pre = '';
    for (var k = 0; k < openSlots.length; k++) {
      var v = game.fill[openSlots[k][0]][openSlots[k][1]];
      if (!v) break;
      pre += v;
    }
    var preLen = Array.from(pre).length;
    snapshot = openSlots.map(function (p, k) { return k < preLen ? '' : game.fill[p[0]][p[1]]; });
    input.value = pre;
    input.maxLength = Math.max(openSlots.length, 1);
    var fixed = w.len - openSlots.length;
    input.placeholder = !openSlots.length ? '완성! · all squares filled'
      : fixed ? '빈칸 ' + openSlots.length + '개만 · type the ' + openSlots.length + ' empty square' + (openSlots.length === 1 ? '' : 's')
      : '여기에 입력 · type here';
    renderClueBar();
    renderClueLists();
    refreshCells();
    if (focus) {
      input.focus();
      try { input.setSelectionRange(input.value.length, input.value.length); } catch (e) { /* ignore */ }
    }
    saveGame();
  }

  function onCellTap(r, c) {
    var ids = wordsAt(r, c);
    if (!ids.length) return;
    var next = ids[0];
    if (ids.length > 1 && ids.indexOf(game.sel) >= 0) {
      // Tapping a crossing cell of the current word switches direction.
      next = ids[(ids.indexOf(game.sel) + 1) % ids.length];
    }
    selectWord(next, true);
  }

  function onInput(e) {
    var w = game.words[game.sel];
    if (!w || game.done) return;
    var chars = Array.from(H.normalize(input.value).replace(/\s+/g, ''));
    var composing = e && (e.isComposing || e.type === 'compositionupdate');
    // Never hold more syllables than there are open squares. Trim once the
    // keyboard has finished composing so the Korean IME isn't interrupted.
    if (chars.length > openSlots.length && !composing) {
      chars = chars.slice(0, openSlots.length);
      input.value = chars.join('');
    }
    var touched = {};
    openSlots.forEach(function (p, k) {
      var r = p[0], c = p[1];
      if (game.locked[r][c]) return;
      var v = k < chars.length ? chars[k] : snapshot[k];
      if (game.fill[r][c] !== v) {
        game.fill[r][c] = v;
        game.wrong[r][c] = false;
        touched[r + ',' + c] = true;
      }
    });
    afterChange(Object.keys(touched));
  }

  function afterChange(touchedKeys) {
    var affected = {};
    touchedKeys.forEach(function (k) {
      var p = k.split(',');
      wordsAt(+p[0], +p[1]).forEach(function (i) { affected[i] = true; });
    });
    var newlySolved = [];
    Object.keys(affected).forEach(function (i) {
      var w = game.words[i];
      var ok = isWordCorrect(w);
      if (ok && !w.solved) { w.solved = true; newlySolved.push(w); }
      if (!ok) w.solved = false;
    });
    refreshCells();
    renderClueLists();
    updateMeta();
    if (newlySolved.length && settings.autoCheck) {
      newlySolved.forEach(function (w) {
        cellsOf(w).forEach(function (p) {
          var el = cellEl(p[0], p[1]);
          if (el) { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
        });
      });
      if (settings.autoSpeak) speak(newlySolved[newlySolved.length - 1].answer);
    }
    saveGame();
    checkComplete();
  }

  function updateMeta() {
    $('scoreLive').textContent = liveScore() + '점';
    $('timer').textContent = fmtTime(game.elapsed);
  }

  function nextWord(step, onlyUnsolved) {
    var n = game.words.length;
    for (var k = 1; k <= n; k++) {
      var i = (game.sel + step * k + n * n) % n;
      if (!onlyUnsolved || !isWordCorrect(game.words[i])) return i;
    }
    return (game.sel + step + n) % n;
  }

  // ---------- hints ----------
  function hintCho() {
    var w = game.words[game.sel];
    if (!w.hints.cho) { w.hints.cho = true; toast('초성 hint: −3 points for this word'); }
    renderClueBar();
    updateMeta();
    saveGame();
    input.focus();
  }

  function revealLetter() {
    var w = game.words[game.sel];
    var cells = cellsOf(w);
    for (var k = 0; k < cells.length; k++) {
      var r = cells[k][0], c = cells[k][1];
      if (game.fill[r][c] !== game.solution[r][c]) {
        game.fill[r][c] = game.solution[r][c];
        game.locked[r][c] = true;
        game.wrong[r][c] = false;
        w.hints.reveals++;
        selectWord(game.sel, false);
        afterChange([r + ',' + c]);
        return;
      }
    }
    toast('This word is already correct');
  }

  function checkWords(list) {
    var anyWrong = false, anyChecked = false;
    list.forEach(function (w) {
      var wrongHere = false, filledAny = false;
      cellsOf(w).forEach(function (p) {
        var r = p[0], c = p[1];
        if (!game.fill[r][c]) return;
        filledAny = true;
        if (game.fill[r][c] !== game.solution[r][c]) { game.wrong[r][c] = true; wrongHere = true; }
      });
      if (!filledAny) return;
      anyChecked = true;
      w.checked = true;
      if (isWordCorrect(w)) w.solved = true;
      if (wrongHere) { w.hints.wrongChecks++; anyWrong = true; }
    });
    refreshCells();
    renderClueLists();
    updateMeta();
    saveGame();
    if (!anyChecked) toast('Type something first');
    else if (anyWrong) toast('Red squares are wrong');
    else toast('Looks good so far 👍');
  }

  function revealWord() {
    var w = game.words[game.sel];
    var keys = [];
    cellsOf(w).forEach(function (p) {
      var r = p[0], c = p[1];
      if (game.fill[r][c] !== game.solution[r][c]) {
        game.fill[r][c] = game.solution[r][c];
        game.locked[r][c] = true;
        game.wrong[r][c] = false;
        keys.push(r + ',' + c);
      }
    });
    if (!keys.length) { toast('This word is already correct'); return; }
    w.hints.revealedWord = true;
    w.checked = true;
    selectWord(game.sel, false);
    afterChange(keys);
    speak(w.answer);
  }

  function clearGrid() {
    if (!confirm('Clear all your answers? (Revealed letters stay.)')) return;
    for (var r = 0; r < game.rows; r++) {
      for (var c = 0; c < game.cols; c++) {
        if (!game.locked[r][c]) game.fill[r][c] = '';
        game.wrong[r][c] = false;
      }
    }
    game.words.forEach(function (w) { w.solved = isWordCorrect(w); });
    selectWord(game.sel, false);
    updateMeta();
    saveGame();
  }

  // ---------- timer ----------
  var lastTick = 0;
  function startTimer() {
    stopTimer();
    if (game.done) return;
    lastTick = Date.now();
    timerId = setInterval(function () {
      var now = Date.now();
      if (!document.hidden) game.elapsed += now - lastTick;
      lastTick = now;
      $('timer').textContent = fmtTime(game.elapsed);
    }, 1000);
  }
  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  // ---------- completion ----------
  function checkComplete() {
    if (game.done) return;
    for (var r = 0; r < game.rows; r++) {
      for (var c = 0; c < game.cols; c++) {
        if (game.solution[r][c] && game.fill[r][c] !== game.solution[r][c]) return;
      }
    }
    finish();
  }

  function finish() {
    game.done = true;
    stopTimer();
    game.words.forEach(function (w) { w.checked = true; w.solved = true; });
    refreshCells();
    var score = liveScore();
    game.score = score;
    store.save('game', game);

    // Progress bookkeeping.
    var st = progress.stats;
    st.puzzles++;
    st.words += game.words.length;
    var bestKey = game.level + '-' + game.size;
    if (!st.best[bestKey] || game.elapsed < st.best[bestKey]) st.best[bestKey] = game.elapsed;
    var d = today();
    if (st.lastDay !== d) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      var yd = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
      st.streakDays = st.lastDay === yd ? (st.streakDays || 0) + 1 : 1;
      st.lastDay = d;
    }
    game.words.forEach(function (w) {
      var ko = w.answer;
      progress.seen[ko] = (progress.seen[ko] || 0) + 1;
      var h = w.hints;
      var missed = h.revealedWord || h.reveals > 0 || h.wrongChecks > 0;
      if (missed) {
        var m = progress.missed[ko] || { count: 0, streak: 0 };
        m.count++;
        m.streak = 0;
        m.last = Date.now();
        progress.missed[ko] = m;
      } else if (progress.missed[ko]) {
        progress.missed[ko].streak = (progress.missed[ko].streak || 0) + 1;
        if (progress.missed[ko].streak >= 2) delete progress.missed[ko];
      }
      progress.recent = [ko].concat((progress.recent || []).filter(function (k) { return k !== ko; })).slice(0, 60);
    });
    saveProgress();

    $('doneStats').innerHTML = '<span>⏱ ' + fmtTime(game.elapsed) + '</span><span>★ ' + score + '점</span><span>' + game.words.length + ' words</span>';
    $('doneWords').innerHTML = game.words.map(function (w) {
      var h = w.hints;
      var missed = h.revealedWord || h.reveals > 0 || h.wrongChecks > 0;
      return wordRow(w.entry, { miss: missed, points: wordPoints(w) });
    }).join('');
    setTimeout(function () {
      input.blur();
      if ($('doneDialog').showModal) $('doneDialog').showModal();
      else $('doneDialog').setAttribute('open', '');
    }, 450);
  }

  // ---------- word rows (shared) ----------
  function wordRow(w, opts) {
    opts = opts || {};
    var lv = levelInfo(w.level);
    var cats = (w.cats || []).map(function (c) { var cc = catById(c); return cc ? cc.icon + ' ' + (cc.en || cc.ko) : c; }).join(', ');
    return '<li data-ko="' + esc(w.ko) + '">' +
      '<div class="w-main"><div><span class="w-ko" lang="ko">' + esc(w.ko) + '</span>' +
      '<span class="w-rom">' + esc(H.romanize(w.ko)) + '</span>' +
      (opts.miss ? ' <span class="miss">review</span>' : '') + '</div>' +
      '<div class="w-en">' + esc(w.en) + '</div>' +
      (opts.showDef && w.def ? '<div class="w-def" lang="ko">' + esc(w.def) + '</div>' : '') +
      (opts.meta !== false ? '<div class="w-meta">' + lv.ko + ' ' + lv.en + (cats ? ' · ' + esc(cats) : '') +
        (w.custom ? ' · ✎ yours' : '') + (opts.extra ? ' · ' + esc(opts.extra) : '') + '</div>' : '') +
      '</div><div class="w-actions">' +
      '<button data-act="speak" aria-label="Say ' + esc(w.ko) + '">🔊</button>' +
      (opts.actions || '') + '</div></li>';
  }

  // ---------- review ----------
  function renderReview() {
    var st = progress.stats;
    var bestParts = [];
    DATA.LEVELS.forEach(function (l) {
      ['small', 'medium', 'large'].forEach(function (s) {
        if (st.best[l.id + '-' + s]) bestParts.push(st.best[l.id + '-' + s]);
      });
    });
    var best = bestParts.length ? fmtTime(Math.min.apply(null, bestParts)) : '—';
    $('statTiles').innerHTML = [
      [st.puzzles, 'Puzzles solved'], [st.words, 'Words solved'],
      [(st.streakDays || 0) + (st.streakDays ? ' 🔥' : ''), 'Day streak'], [best, 'Fastest puzzle']
    ].map(function (t) { return '<div class="stat-tile"><div class="v">' + t[0] + '</div><div class="l">' + t[1] + '</div></div>'; }).join('');

    var words = {};
    allWords().forEach(function (w) { words[w.ko] = w; });
    var missed = missedKeys().filter(function (k) { return words[k]; })
      .sort(function (a, b) { return progress.missed[b].count - progress.missed[a].count; });
    $('missedList').innerHTML = missed.length ? missed.map(function (k) {
      var m = progress.missed[k];
      return wordRow(words[k], {
        showDef: true,
        extra: 'missed ' + m.count + '×' + (m.streak ? ', ' + m.streak + '/2 clean solves' : ''),
        actions: '<button data-act="unmiss" aria-label="Remove from review">✕</button>'
      });
    }).join('') : '<li class="empty">Nothing to review yet. Words you reveal or get wrong show up here.</li>';
    $('practiceMissedBtn').disabled = missed.length < 2;

    var recent = (progress.recent || []).filter(function (k) { return words[k]; }).slice(0, 30);
    $('recentList').innerHTML = recent.length ? recent.map(function (k) { return wordRow(words[k], {}); }).join('')
      : '<li class="empty">Solve a puzzle to see your words here.</li>';
  }

  // ---------- words screen ----------
  var wordsTab = 'browse';
  function levelOptions(includeAll) {
    return (includeAll ? '<option value="0">All levels</option>' : '') + DATA.LEVELS.map(function (l) {
      return '<option value="' + l.id + '">' + l.ko + ' ' + l.en + ' (' + l.topik + ')</option>';
    }).join('');
  }
  function catOptions(includeAll, noneLabel) {
    return (includeAll ? '<option value="all">All topics</option>' : '') +
      (noneLabel ? '<option value="">' + noneLabel + '</option>' : '') +
      categoryList().map(function (c) {
        return '<option value="' + esc(c.id) + '">' + c.icon + ' ' + esc(c.en ? c.ko + ' · ' + c.en : c.ko) + '</option>';
      }).join('');
  }

  function renderWords() {
    $('mineCount').textContent = custom.length ? '(' + custom.length + ')' : '';
    Array.prototype.forEach.call(document.querySelectorAll('.tabs button'), function (b) {
      b.classList.toggle('active', b.dataset.tab === wordsTab);
    });
    ['browse', 'add', 'import', 'mine'].forEach(function (t) { $('tab-' + t).hidden = t !== wordsTab; });
    if (wordsTab === 'browse') renderBrowse();
    if (wordsTab === 'add') renderAddForm();
    if (wordsTab === 'import') renderImportForm();
    if (wordsTab === 'mine') renderMine();
  }

  function renderBrowse() {
    var lvSel = $('browseLevel'), catSel = $('browseCat');
    if (!lvSel.options.length) {
      lvSel.innerHTML = levelOptions(true);
      lvSel.value = String(settings.level);
    }
    var prevCat = catSel.value || 'all';
    catSel.innerHTML = catOptions(true);
    catSel.value = prevCat;
    if (catSel.value !== prevCat) catSel.value = 'all';
    var q = $('browseSearch').value.trim().toLowerCase();
    var lv = Number(lvSel.value);
    var cat = catSel.value;
    var list = allWords().filter(function (w) {
      if (lv && w.level !== lv) return false;
      if (cat !== 'all' && (w.cats || []).indexOf(cat) < 0) return false;
      if (q && w.ko.indexOf(q) < 0 && w.en.toLowerCase().indexOf(q) < 0 && H.romanize(w.ko).indexOf(q) < 0) return false;
      return true;
    }).sort(function (a, b) { return a.level - b.level || a.ko.localeCompare(b.ko, 'ko'); });
    $('browseCount').textContent = list.length + ' word' + (list.length === 1 ? '' : 's');
    var shown = list.slice(0, 300);
    $('browseList').innerHTML = shown.map(function (w) { return wordRow(w, { showDef: true }); }).join('') +
      (list.length > shown.length ? '<li class="empty">Showing first 300. Search or filter to narrow down.</li>' : '');
  }

  function renderAddForm() {
    if (!$('fLevel').options.length) $('fLevel').innerHTML = levelOptions(false);
    var selected = {};
    ($('fCats').dataset.sel || '').split('\n').filter(Boolean).forEach(function (c) { selected[c] = true; });
    $('fCats').innerHTML = categoryList().map(function (c) {
      return '<button type="button" class="chip" data-cat="' + esc(c.id) + '" aria-pressed="' + !!selected[c.id] + '">' +
        c.icon + ' ' + esc(c.en || c.ko) + '</button>';
    }).join('');
  }

  function formCats() {
    return ($('fCats').dataset.sel || '').split('\n').filter(Boolean);
  }

  function setFormCats(list) {
    $('fCats').dataset.sel = list.join('\n');
  }

  function resetAddForm() {
    $('addForm').reset();
    $('editKey').value = '';
    setFormCats([]);
    $('fLevel').value = String(settings.level);
    $('cancelEditBtn').hidden = true;
    $('saveWordBtn').textContent = 'Save word';
    renderAddForm();
  }

  function editWord(ko) {
    var w = allWords().filter(function (x) { return x.ko === ko; })[0];
    if (!w) return;
    wordsTab = 'add';
    renderWords();
    $('editKey').value = w.custom ? w.ko : '';
    $('fKo').value = w.ko;
    $('fEn').value = w.en;
    $('fLevel').value = String(w.level);
    $('fDef').value = w.def || '';
    $('fEx').value = w.ex || '';
    setFormCats(w.cats || []);
    renderAddForm();
    $('cancelEditBtn').hidden = false;
    $('saveWordBtn').textContent = w.custom ? 'Update word' : 'Save my version';
    $('addMsg').textContent = w.custom ? '' : 'Saving makes your own copy of this built-in word.';
    $('addMsg').className = 'form-msg';
    window.scrollTo(0, 0);
  }

  function saveWordFromForm(e) {
    e.preventDefault();
    var msg = $('addMsg');
    var ko = WB.cleanKorean($('fKo').value);
    var en = $('fEn').value.trim();
    msg.className = 'form-msg err';
    if (!H.isHangulWord(ko)) { msg.textContent = 'The Korean word must be complete Hangul syllables (e.g. 사과).'; return; }
    if (ko.length < WB.MIN_LEN || ko.length > WB.MAX_LEN) { msg.textContent = 'Words need 2–8 syllables to fit the crossword.'; return; }
    if (!en) { msg.textContent = 'Please add the English meaning.'; return; }
    var cats = formCats();
    var newCat = $('fNewCat').value.trim();
    if (newCat) cats.push(WB.normalizeCat(newCat));
    var ex = WB.autoMarkExample($('fEx').value.trim(), ko);
    if ($('fEx').value.trim() && !ex) {
      msg.textContent = 'Put the answer in {braces} in the example sentence, e.g. 아침에 {사과}를 먹었어요.'; return;
    }
    var word = {
      ko: ko, en: en, level: Number($('fLevel').value) || 1,
      cats: cats.filter(function (c, i) { return cats.indexOf(c) === i; }),
      def: $('fDef').value.trim(), ex: ex, custom: true
    };
    var editKey = $('editKey').value;
    custom = custom.filter(function (w) { return w.ko !== ko && w.ko !== editKey; });
    custom.push(word);
    saveCustom();
    var wasEdit = !!editKey;
    resetAddForm();
    msg.className = 'form-msg ok';
    msg.textContent = (wasEdit ? 'Updated ' : 'Added ') + ko + ' (' + en + ').';
    $('mineCount').textContent = '(' + custom.length + ')';
  }

  var pendingImport = null;
  var deckNotes = null; // notes read from an Anki deck, re-parsed when the defaults change
  var deckInfo = '';
  function renderImportForm() {
    if (!$('importLevel').options.length) {
      $('importLevel').innerHTML = levelOptions(false);
      $('importLevel').value = String(settings.level);
    }
    var prev = $('importCat').value;
    $('importCat').innerHTML = catOptions(false, 'No topic');
    $('importCat').value = prev || '';
  }

  function importDefaults() {
    var cat = $('importCat').value;
    return { level: Number($('importLevel').value) || 1, cats: cat ? [cat] : [] };
  }

  // Words we already have keep their level (unless the list gives one), clues and topics.
  function mergeWithExisting(words) {
    var existing = {};
    allWords().forEach(function (w) { existing[w.ko] = w; });
    return words.map(function (w) {
      var old = existing[w.ko];
      var out = Object.assign({}, w);
      delete out.levelGiven;
      if (!old) return out;
      out.known = true;
      if (!w.levelGiven) out.level = old.level;
      out.cats = w.cats.length ? w.cats.concat((old.cats || []).filter(function (c) { return w.cats.indexOf(c) < 0; })) : (old.cats || []);
      out.def = w.def || old.def || '';
      out.ex = w.ex || old.ex || '';
      return out;
    });
  }

  function previewImport() {
    var text = $('importText').value;
    var res;
    if (deckNotes && !text.trim()) {
      res = WB.parseNotes(deckNotes, importDefaults());
    } else if (text.trim()) {
      deckNotes = null;
      deckInfo = '';
      res = WB.parseImport(text, importDefaults());
    } else {
      $('importPreview').innerHTML = '<p class="form-msg err">Paste some words or choose a file first.</p>';
      return;
    }
    showImportPreview(res);
  }

  function showImportPreview(res) {
    var words = mergeWithExisting(res.words);
    var known = words.filter(function (w) { return w.known; }).length;
    pendingImport = words;
    var unit = deckNotes ? 'card' : 'line';
    var html = (deckInfo ? '<p class="small">' + esc(deckInfo) + '</p>' : '') +
      '<p class="small"><strong>' + words.length + '</strong> word' + (words.length === 1 ? '' : 's') + ' ready' +
      (known ? ' (' + known + ' already in the word bank; their clues are kept)' : '') + '.' +
      (res.skipped.length ? ' <strong>' + res.skipped.length + '</strong> ' + unit + (res.skipped.length === 1 ? '' : 's') + ' skipped.' : '') + '</p>';
    if (words.length) {
      html += '<ul class="word-list compact">' + words.slice(0, 8).map(function (w) { return wordRow(w, {}); }).join('') +
        (words.length > 8 ? '<li class="empty">…and ' + (words.length - 8) + ' more</li>' : '') + '</ul>' +
        '<button class="btn primary" id="confirmImportBtn">Import ' + words.length + ' word' + (words.length === 1 ? '' : 's') + '</button>';
    }
    if (res.skipped.length) {
      html += '<details class="skipped"' + (res.skipped.length <= 20 ? ' open' : '') + '><summary>Skipped ' + unit + 's</summary><ul>' +
        res.skipped.slice(0, 300).map(function (s) {
          return '<li>' + (unit === 'card' ? 'Card ' : 'Line ') + s.line + ': ' + esc(s.reason) + (s.text ? ' — <code>' + esc(s.text.slice(0, 60)) + '</code>' : '') + '</li>';
        }).join('') + '</ul></details>';
    }
    $('importPreview').innerHTML = html;
  }

  function readDeckFile(file) {
    $('importText').value = '';
    $('importPreview').innerHTML = '<p class="small">Reading ' + esc(file.name) + '…</p>';
    file.arrayBuffer().then(function (buf) {
      return KC.anki.read(buf);
    }).then(function (deck) {
      deckNotes = deck.notes;
      deckInfo = file.name + ': ' + deck.notes.length + ' cards' + (deck.decks.length ? ' from ' + deck.decks.slice(0, 3).join(', ') + (deck.decks.length > 3 ? '…' : '') : '');
      previewImport();
    }).catch(function (err) {
      deckNotes = null;
      $('importPreview').innerHTML = '<p class="form-msg err">' + esc(err.message || String(err)) + '</p>';
    });
  }

  function confirmImport() {
    if (!pendingImport || !pendingImport.length) return;
    var words = pendingImport.map(function (w) { var o = Object.assign({}, w); delete o.known; return o; });
    var keys = {};
    words.forEach(function (w) { keys[w.ko] = true; });
    custom = custom.filter(function (w) { return !keys[w.ko]; }).concat(words);
    saveCustom();
    toast('Imported ' + words.length + ' words');
    pendingImport = null;
    deckNotes = null;
    deckInfo = '';
    $('importText').value = '';
    $('importPreview').innerHTML = '';
    wordsTab = 'mine';
    renderWords();
  }

  function renderMine() {
    var list = custom.slice().sort(function (a, b) { return a.level - b.level || a.ko.localeCompare(b.ko, 'ko'); });
    $('mineList').innerHTML = list.length ? list.map(function (w) {
      return wordRow(w, {
        showDef: true,
        actions: '<button data-act="edit" aria-label="Edit">✎</button><button data-act="delete" aria-label="Delete">🗑</button>'
      });
    }).join('') : '<li class="empty">No words yet. Add one or import a list.</li>';
    $('exportBtn').disabled = !list.length;
    $('deleteAllBtn').disabled = !list.length;
  }

  function exportCsv() {
    var blob = new Blob(['﻿' + WB.toCsv(custom)], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my-korean-words.csv';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  // ---------- settings ----------
  function openSettings() {
    $('sHintLang').value = settings.hintLang;
    $('sKoStyle').value = settings.koStyle;
    $('sRoman').checked = settings.romanization;
    $('sAutoCheck').checked = settings.autoCheck;
    $('sAutoSpeak').checked = settings.autoSpeak;
    $('sRate').value = settings.rate;
    $('sTheme').value = settings.theme;
    var d = $('settingsDialog');
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  }

  function readSettings() {
    settings.hintLang = $('sHintLang').value;
    settings.koStyle = $('sKoStyle').value;
    settings.romanization = $('sRoman').checked;
    settings.autoCheck = $('sAutoCheck').checked;
    settings.autoSpeak = $('sAutoSpeak').checked;
    settings.rate = Number($('sRate').value);
    settings.theme = $('sTheme').value;
    saveSettings();
    applyTheme();
    if (current === 'game' && game) { renderClueBar(); renderClueLists(); refreshCells(); }
  }

  // ---------- events ----------
  function delegate(el, selector, type, fn) {
    el.addEventListener(type, function (e) {
      var t = e.target.closest(selector);
      if (t && el.contains(t)) fn(t, e);
    });
  }

  function wordListActions(listEl) {
    delegate(listEl, 'button[data-act]', 'click', function (btn) {
      var li = btn.closest('li[data-ko]');
      if (!li) return;
      var ko = li.dataset.ko;
      var act = btn.dataset.act;
      if (act === 'speak') speak(ko);
      if (act === 'unmiss') { delete progress.missed[ko]; saveProgress(); renderReview(); }
      if (act === 'edit') editWord(ko);
      if (act === 'delete') {
        if (!confirm('Delete ' + ko + '?')) return;
        custom = custom.filter(function (w) { return w.ko !== ko; });
        saveCustom();
        renderWords();
      }
    });
  }

  function bind() {
    input = $('answer');
    applyTheme();

    $('backBtn').addEventListener('click', function () { show('home'); });
    $('settingsBtn').addEventListener('click', openSettings);
    $('settingsDialog').addEventListener('close', readSettings);
    ['sHintLang', 'sKoStyle', 'sRoman', 'sAutoCheck', 'sAutoSpeak', 'sRate', 'sTheme'].forEach(function (id) {
      $(id).addEventListener('change', readSettings);
    });
    $('resetProgressBtn').addEventListener('click', function () {
      if (!confirm('Reset all stats and review words? Your own words are kept.')) return;
      progress = { seen: {}, missed: {}, recent: [], stats: { puzzles: 0, words: 0, best: {}, streakDays: 0, lastDay: null } };
      saveProgress();
      toast('Progress reset');
      if (current === 'home') renderHome();
      if (current === 'review') renderReview();
    });

    // Home
    delegate($('levelPicker'), '[data-level]', 'click', function (b) {
      settings.level = Number(b.dataset.level); saveSettings(); renderHome();
    });
    delegate($('categoryPicker'), '[data-cat]', 'click', function (b) {
      settings.category = b.dataset.cat; saveSettings(); renderHome();
    });
    delegate($('sizePicker'), '[data-size]', 'click', function (b) {
      settings.size = b.dataset.size; saveSettings(); renderHome();
    });
    $('includeEasier').addEventListener('change', function () { settings.includeEasier = this.checked; saveSettings(); });
    $('startBtn').addEventListener('click', function () {
      if (game && !game.done && countFilled() > 0 && !confirm('Start a new puzzle? Your current one will be lost.')) return;
      newGame();
    });
    $('continueBtn').addEventListener('click', startGameScreen);
    delegate(document.querySelector('.home-links'), '[data-go]', 'click', function (b) { show(b.dataset.go); });

    // Game
    delegate($('grid'), '.cell[data-r]', 'click', function (el) { onCellTap(+el.dataset.r, +el.dataset.c); });
    input.addEventListener('input', onInput);
    input.addEventListener('compositionend', onInput);
    input.addEventListener('keydown', function (e) {
      if (e.isComposing || e.keyCode === 229) return;
      if (e.key === 'Enter') { e.preventDefault(); selectWord(nextWord(1, true), true); }
      else if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) { e.preventDefault(); selectWord(nextWord(1, false), true); }
      else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) { e.preventDefault(); selectWord(nextWord(-1, false), true); }
    });
    $('prevClue').addEventListener('click', function () { selectWord(nextWord(-1, false), true); });
    $('nextClue').addEventListener('click', function () { selectWord(nextWord(1, false), true); });
    delegate($('screen-game'), '.clue-list li[data-i]', 'click', function (li) {
      selectWord(+li.dataset.i, true);
      $('clueBar').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    delegate(document.querySelector('.lang-toggle'), '[data-lang]', 'click', function (b) {
      settings.hintLang = b.dataset.lang;
      game.words.forEach(function (w) { w.flipped = false; });
      saveSettings(); saveGame(); renderClueBar(); renderClueLists();
    });
    $('flipClue').addEventListener('click', function () {
      var w = game.words[game.sel]; w.flipped = !w.flipped;
      saveGame(); renderClueBar(); renderClueLists(); input.focus();
    });
    $('speakClue').addEventListener('click', function () {
      var ct = clueText(game.words[game.sel]);
      if (ct.lang === 'ko') speak(ct.speak || ct.text);
      else toast('Switch this clue to 한 to hear it in Korean');
    });
    // Keep the keyboard open when tapping tool buttons on iOS.
    Array.prototype.forEach.call(document.querySelectorAll('.tools .tool, #flipClue, #prevClue, #nextClue'), function (b) {
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
    });
    $('hintCho').addEventListener('click', hintCho);
    $('revealLetter').addEventListener('click', revealLetter);
    $('checkWord').addEventListener('click', function () { checkWords([game.words[game.sel]]); });
    $('checkAll').addEventListener('click', function () { checkWords(game.words); });
    $('revealWord').addEventListener('click', revealWord);
    $('restartBtn').addEventListener('click', clearGrid);
    $('newFromGameBtn').addEventListener('click', function () {
      if (!game.done && countFilled() > 0 && !confirm('Start a new puzzle? This one will be lost.')) return;
      newGame({ level: game.level, category: game.category });
    });

    // Done dialog
    wordListActions($('doneWords'));
    $('doneHomeBtn').addEventListener('click', function () { $('doneDialog').close(); show('home'); });
    $('doneNextBtn').addEventListener('click', function () {
      $('doneDialog').close();
      var cat = game.category;
      if (cat === REVIEW_CAT && missedKeys().length < 2) cat = settings.category === REVIEW_CAT ? 'all' : settings.category;
      newGame({ level: game.level, category: cat });
    });

    // Review
    wordListActions($('missedList'));
    wordListActions($('recentList'));
    $('practiceMissedBtn').addEventListener('click', function () {
      var lv = Math.max.apply(null, [1].concat(allWords().filter(function (w) { return progress.missed[w.ko]; }).map(function (w) { return w.level; })));
      newGame({ level: lv, category: REVIEW_CAT });
    });

    // Words
    delegate(document.querySelector('.tabs'), '[data-tab]', 'click', function (b) {
      wordsTab = b.dataset.tab;
      if (wordsTab === 'add') resetAddForm();
      renderWords();
    });
    $('browseSearch').addEventListener('input', renderBrowse);
    $('browseLevel').addEventListener('change', renderBrowse);
    $('browseCat').addEventListener('change', renderBrowse);
    wordListActions($('browseList'));
    wordListActions($('mineList'));
    delegate($('browseList'), 'li[data-ko] .w-main', 'click', function (el) { speak(el.closest('li').dataset.ko); });
    delegate($('fCats'), '[data-cat]', 'click', function (b) {
      var list = formCats();
      var id = b.dataset.cat;
      var i = list.indexOf(id);
      if (i >= 0) list.splice(i, 1); else list.push(id);
      setFormCats(list);
      b.setAttribute('aria-pressed', String(i < 0));
    });
    $('addForm').addEventListener('submit', saveWordFromForm);
    $('cancelEditBtn').addEventListener('click', function () { resetAddForm(); $('addMsg').textContent = ''; });
    $('previewImportBtn').addEventListener('click', previewImport);
    $('importFile').addEventListener('change', function () {
      var f = this.files && this.files[0];
      this.value = '';
      if (!f) return;
      if (/\.(apkg|colpkg)$/i.test(f.name)) { readDeckFile(f); return; }
      deckNotes = null;
      deckInfo = '';
      var reader = new FileReader();
      reader.onload = function () { $('importText').value = String(reader.result || ''); previewImport(); };
      reader.readAsText(f, 'utf-8');
    });
    $('importLevel').addEventListener('change', function () { if (pendingImport) previewImport(); });
    $('importCat').addEventListener('change', function () { if (pendingImport) previewImport(); });
    delegate($('importPreview'), '#confirmImportBtn', 'click', confirmImport);
    wordListActions($('importPreview'));
    $('exportBtn').addEventListener('click', exportCsv);
    $('deleteAllBtn').addEventListener('click', function () {
      if (!confirm('Delete all ' + custom.length + ' of your words?')) return;
      custom = []; saveCustom(); renderWords();
    });

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { if (current === 'game' && game) renderGrid(); }, 150);
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && game) store.save('game', game);
    });
  }

  bind();
  show('home');

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').catch(function () { /* offline support is optional */ });
  }
})();
