!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.es6starterkit = t())
    : (e.es6starterkit = t());
})(self, () =>
  (() => {
    'use strict';
    var e = {
        d: (t, o) => {
          for (var r in o)
            e.o(o, r) &&
              !e.o(t, r) &&
              Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        },
      },
      t = {};
    e.r(t), e.d(t, { diff: () => r, sum: () => o });
    const o = (e, t) => Number(e) + Number(t),
      r = (e, t) => Number(e) - Number(t);
    return t;
  })()
);
