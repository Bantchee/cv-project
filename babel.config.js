module.exports = function (api) {
  api.cache.forever();
  // api.cache.never();
  // api.cache.using(fn);
    return {
      plugins: ['macros'],
    }
  }
  