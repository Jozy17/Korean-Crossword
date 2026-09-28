/* Hangul helpers: syllable checks, 초성 (initial consonant) hints and an
 * approximate Revised Romanization that handles the common sound changes
 * (liaison, nasalization, ㄹ assimilation, aspiration). */
(function (root) {
  var BASE = 0xac00;
  var LAST = 0xd7a3;
  var INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  var FINALS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  var VOWELS_R = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
  var INIT_R = {
    'ㄱ': 'g', 'ㄲ': 'kk', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄸ': 'tt', 'ㄹ': 'r', 'ㅁ': 'm', 'ㅂ': 'b', 'ㅃ': 'pp',
    'ㅅ': 's', 'ㅆ': 'ss', 'ㅇ': '', 'ㅈ': 'j', 'ㅉ': 'jj', 'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h'
  };
  // How each final sounds at the end of a syllable (before a consonant or pause).
  var NEUTRAL = {
    'ㄱ': 'k', 'ㄲ': 'k', 'ㅋ': 'k', 'ㄳ': 'k', 'ㄺ': 'k',
    'ㄴ': 'n', 'ㄵ': 'n', 'ㄶ': 'n',
    'ㄷ': 't', 'ㅅ': 't', 'ㅆ': 't', 'ㅈ': 't', 'ㅊ': 't', 'ㅌ': 't', 'ㅎ': 't',
    'ㄹ': 'l', 'ㄼ': 'l', 'ㄽ': 'l', 'ㄾ': 'l', 'ㅀ': 'l',
    'ㅁ': 'm', 'ㄻ': 'm',
    'ㅂ': 'p', 'ㅍ': 'p', 'ㅄ': 'p', 'ㄿ': 'p',
    'ㅇ': 'ng'
  };
  var DOUBLE = {
    'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'],
    'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ']
  };
  var ASPIRATE = { 'ㄱ': 'k', 'ㄷ': 't', 'ㅈ': 'ch' };

  function isSyllable(ch) {
    if (!ch) return false;
    var code = ch.charCodeAt(0);
    return code >= BASE && code <= LAST;
  }

  function isHangulWord(str) {
    if (!str) return false;
    for (var i = 0; i < str.length; i++) if (!isSyllable(str[i])) return false;
    return true;
  }

  function hasHangul(str) {
    return /[가-힣ㄱ-ㆎ]/.test(str || '');
  }

  function decompose(ch) {
    var code = ch.charCodeAt(0) - BASE;
    return { i: Math.floor(code / 588), v: Math.floor((code % 588) / 28), f: code % 28 };
  }

  function choseong(word) {
    var out = '';
    for (var i = 0; i < word.length; i++) {
      out += isSyllable(word[i]) ? INITIALS[decompose(word[i]).i] : word[i];
    }
    return out;
  }

  // Returns [romanized final of this syllable, override for the next initial or null].
  function link(f, n, isPredicate) {
    var neutral = NEUTRAL[f];
    if (n === 'ㅇ') {
      if (f === 'ㅇ') return ['ng', null];
      if (f === 'ㅎ') return ['', null];
      if (DOUBLE[f]) {
        var a = DOUBLE[f][0], b = DOUBLE[f][1];
        if (b === 'ㅎ') return ['', a === 'ㄹ' ? 'r' : INIT_R[a]];
        return [NEUTRAL[a], b === 'ㄹ' ? 'r' : INIT_R[b]];
      }
      return ['', f === 'ㄹ' ? 'r' : INIT_R[f]];
    }
    if (f === 'ㅎ' || f === 'ㄶ' || f === 'ㅀ') {
      var keep = f === 'ㅎ' ? '' : (f === 'ㄶ' ? 'n' : 'l');
      if (ASPIRATE[n]) return [keep, ASPIRATE[n]];
      if (n === 'ㅅ') return [keep, 'ss'];
      if (n === 'ㄴ') return [f === 'ㅀ' ? 'l' : 'n', f === 'ㅀ' ? 'l' : 'n'];
      return [keep, null];
    }
    if (n === 'ㅎ') {
      // Aspiration is written out for verbs/adjectives but not for nouns (RR rule).
      if (isPredicate) {
        if (f === 'ㅈ' || f === 'ㅊ') return ['', 'ch'];
        if (neutral === 'k' || neutral === 't' || neutral === 'p') return ['', neutral];
      }
      return [neutral, null];
    }
    if (n === 'ㄴ' || n === 'ㅁ') {
      if (neutral === 'k') return ['ng', null];
      if (neutral === 't') return ['n', null];
      if (neutral === 'p') return ['m', null];
      if (neutral === 'l' && n === 'ㄴ') return ['l', 'l'];
      return [neutral, null];
    }
    if (n === 'ㄹ') {
      if (neutral === 'l' || neutral === 'n') return ['l', 'l'];
      if (neutral === 'm' || neutral === 'ng') return [neutral, 'n'];
      if (neutral === 'k') return ['ng', 'n'];
      if (neutral === 'p') return ['m', 'n'];
      if (neutral === 't') return ['n', 'n'];
    }
    return [neutral, null];
  }

  function romanizeWord(word) {
    var syl = [];
    for (var i = 0; i < word.length; i++) syl.push(decompose(word[i]));
    var isPredicate = word.length > 1 && word[word.length - 1] === '다';
    var out = '';
    var carry = null;
    for (var j = 0; j < syl.length; j++) {
      var s = syl[j];
      var ini = INITIALS[s.i];
      var init = carry !== null ? carry : INIT_R[ini];
      if (carry === null && ini === 'ㄹ' && j > 0 && FINALS[syl[j - 1].f] === 'ㄹ') init = 'l';
      carry = null;
      out += init + VOWELS_R[s.v];
      var f = FINALS[s.f];
      if (!f) continue;
      if (j === syl.length - 1) { out += NEUTRAL[f]; continue; }
      var res = link(f, INITIALS[syl[j + 1].i], isPredicate);
      out += res[0];
      carry = res[1];
    }
    return out;
  }

  function romanize(text) {
    if (!text) return '';
    return text.replace(/[가-힣]+/g, romanizeWord);
  }

  function normalize(str) {
    return (str || '').normalize('NFC');
  }

  var api = {
    isSyllable: isSyllable,
    isHangulWord: isHangulWord,
    hasHangul: hasHangul,
    choseong: choseong,
    romanize: romanize,
    normalize: normalize
  };
  root.KC = root.KC || {};
  root.KC.hangul = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
