(function(e, a) {
  for (var i in a) e[i] = a[i];
})(
  exports,
  /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! exports provided: sum, diff */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          'Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(/*! ./math */ 1);\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_0__math__["b"]; });\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return __WEBPACK_IMPORTED_MODULE_0__math__["a"]; });\n\n\n/**\n * main module : export math functions\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1bSwgZGlmZiB9IGZyb20gJy4vbWF0aCc7XG5cbi8qKlxuICogbWFpbiBtb2R1bGUgOiBleHBvcnQgbWF0aCBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IHsgc3VtLCBkaWZmIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n'
        );

        /***/
      },
      /* 1 */
      /*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
      /*! exports provided: sum, diff */
      /*! exports used: diff, sum */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diff; });\n/**\n * sum operation\n * @param  {Number} a number value\n * @param  {Number} b number value\n * @return {Number}   number value (a+b)\n */\nconst sum = (a, b) => Number(a) + Number(b);\n\n/**\n * diff operation\n * @param  {Number} a number value\n * @param  {Number} b number value\n * @return {Number}   number value (a-b)\n */\nconst diff = (a, b) => Number(a) - Number(b);\n\n/**\n * export functions\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYXRoLmpzPzMxZDciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzdW0gb3BlcmF0aW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGEgbnVtYmVyIHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGIgbnVtYmVyIHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgbnVtYmVyIHZhbHVlIChhK2IpXG4gKi9cbmNvbnN0IHN1bSA9IChhLCBiKSA9PiBOdW1iZXIoYSkgKyBOdW1iZXIoYik7XG5cbi8qKlxuICogZGlmZiBvcGVyYXRpb25cbiAqIEBwYXJhbSAge051bWJlcn0gYSBudW1iZXIgdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0gYiBudW1iZXIgdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICBudW1iZXIgdmFsdWUgKGEtYilcbiAqL1xuY29uc3QgZGlmZiA9IChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG5cbi8qKlxuICogZXhwb3J0IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgeyBzdW0sIGRpZmYgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hdGguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n'
        );

        /***/
      },
      /******/
    ]
  )
);
