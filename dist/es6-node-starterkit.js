(() => {
  'use strict';
  var e = {
      d: (r, o) => {
        for (var t in o)
          e.o(o, t) &&
            !e.o(r, t) &&
            Object.defineProperty(r, t, { enumerable: !0, get: o[t] });
      },
      o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
      r: (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    r = {};
  e.r(r), e.d(r, { diff: () => t, sum: () => o });
  const o = (e, r) => Number(e) + Number(r),
    t = (e, r) => Number(e) - Number(r);
  var u = exports;
  for (var b in r) u[b] = r[b];
  r.__esModule && Object.defineProperty(u, '__esModule', { value: !0 });
})();
