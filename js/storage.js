/* Small localStorage wrapper. Everything stays on this device. */
(function (root) {
  var PREFIX = 'kc.';
  var memory = {};

  function load(key, fallback) {
    try {
      var raw = root.localStorage.getItem(PREFIX + key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return key in memory ? memory[key] : fallback;
    }
  }

  function save(key, value) {
    memory[key] = value;
    try {
      root.localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function remove(key) {
    delete memory[key];
    try { root.localStorage.removeItem(PREFIX + key); } catch (e) { /* ignore */ }
  }

  root.KC = root.KC || {};
  root.KC.storage = { load: load, save: save, remove: remove };
})(typeof window !== 'undefined' ? window : globalThis);
