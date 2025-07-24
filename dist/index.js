/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: function() { return /* binding */ color; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var colorPrototype = {
  setRGB: function setRGB(_r, _g, _b, _a) {
    var _rgb2hsl = rgb2hsl(_r, _g, _b),
      _rgb2hsl2 = _slicedToArray(_rgb2hsl, 3),
      _h = _rgb2hsl2[0],
      _s = _rgb2hsl2[1],
      _l = _rgb2hsl2[2];
    var _v = rgb2hsv(_r, _g, _b)[2];
    this.h = _h;
    this.s = _s;
    this.l = _l;
    this.v = _v;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.a = _a === undefined ? 255 : _a;
    return this;
  },
  setSL: function setSL(_s, _l) {
    var r = this.r,
      g = this.g,
      b = this.b;
    var _rgb2hsl3 = rgb2hsl(r, g, b),
      _rgb2hsl4 = _slicedToArray(_rgb2hsl3, 1),
      h = _rgb2hsl4[0];
    var _hsl2rgb = hsl2rgb(h, _s, _l),
      _hsl2rgb2 = _slicedToArray(_hsl2rgb, 3),
      _r = _hsl2rgb2[0],
      _g = _hsl2rgb2[1],
      _b = _hsl2rgb2[2];
    var _v = rgb2hsv(_r, _g, _b)[2];
    this.s = _s;
    this.l = _l;
    this.v = _v;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    return this;
  },
  setH: function setH(_h) {
    var r = this.r,
      g = this.g,
      b = this.b;
    var _rgb2hsl5 = rgb2hsl(r, g, b),
      _rgb2hsl6 = _slicedToArray(_rgb2hsl5, 3),
      s = _rgb2hsl6[1],
      l = _rgb2hsl6[2];
    var _hsl2rgb3 = hsl2rgb(_h, s, l),
      _hsl2rgb4 = _slicedToArray(_hsl2rgb3, 3),
      _r = _hsl2rgb4[0],
      _g = _hsl2rgb4[1],
      _b = _hsl2rgb4[2];
    this.h = _h;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    return this;
  },
  setSV: function setSV(_s, _v) {
    var r = this.r,
      g = this.g,
      b = this.b;
    var _rgb2hsl7 = rgb2hsl(r, g, b),
      _rgb2hsl8 = _slicedToArray(_rgb2hsl7, 1),
      h = _rgb2hsl8[0];
    var _hsv2rgb = hsv2rgb(h, _s, _v),
      _hsv2rgb2 = _slicedToArray(_hsv2rgb, 3),
      _r = _hsv2rgb2[0],
      _g = _hsv2rgb2[1],
      _b = _hsv2rgb2[2];
    var _l = rgb2hsl(_r, _g, _b)[2];
    this.s = _s;
    this.v = _v;
    this.l = _l;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    return this;
  },
  setHex: function setHex(hex) {
    this.setRGB.apply(this, _toConsumableArray(hex2rgb(hex)));
  },
  clone: function clone() {
    return color(this.r, this.g, this.b, this.a);
  }
};

/**
 * Simple color object
 * @returns {object}
 */
function color() {
  var length = arguments.length;
  var _arguments = Array.prototype.slice.call(arguments),
    _r = _arguments[0],
    _g = _arguments[1],
    _b = _arguments[2],
    _a = _arguments[3];
  var _color = Object.create(colorPrototype, {
    h: {
      writable: true
    },
    s: {
      writable: true
    },
    l: {
      writable: true
    },
    v: {
      writable: true
    },
    r: {
      writable: true
    },
    g: {
      writable: true
    },
    b: {
      writable: true
    },
    a: {
      writable: true
    },
    hex: {
      get: function get() {
        var r = this.r,
          g = this.g,
          b = this.b,
          a = this.a;
        return isValid(r, g, b, a) ? rgb2hex(r, g, b, a) : undefined;
      }
    },
    hexflat: {
      get: function get() {
        var r = this.r,
          g = this.g,
          b = this.b;
        return isValid(r, g, b) ? rgb2hex(r, g, b) : undefined;
      }
    },
    luminance: {
      get: function get() {
        var r = this.r,
          g = this.g,
          b = this.b;
        return isValid(r, g, b) ? (0.375 * r + 0.5 * g + 0.125 * b) / 255 : undefined;
      }
    }
  });
  var firstType = _typeof(_r);
  if (length === 1 && firstType === 'string') {
    _color.setHex(_r);
  } else if (firstType === 'number') {
    if (length === 3 && isValid(_r, _g, _b) || length === 4 && isValid(_r, _g, _b, _a)) {
      _color.setRGB(_r, _g, _b, _a);
    }
  }
  return _color;
}

/**
 * Test arguments are set and of the same type
 * @param {object} args
 * @returns {boolean}
 */
function isValid() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var isSet = args.filter(function (n) {
    return n === null || n === undefined || isNaN(n);
  }).length === 0;
  var firstType = _typeof(args[0]);
  var isType = args.filter(function (n) {
    return _typeof(n) !== firstType;
  }).length === 0;
  return isSet && isType;
}

/**
 * Convert hex value to rgb
 * @param {string} hex
 * @returns {number[]}
 */
function hex2rgb(hex) {
  var hex34 = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i.exec(hex);
  var hex68 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
  return (hex34 === null || hex34 === void 0 ? void 0 : hex34.slice(1).filter(function (n) {
    return n !== undefined;
  }).map(function (n) {
    return parseInt(n + n, 16);
  })) || (hex68 === null || hex68 === void 0 ? void 0 : hex68.slice(1).filter(function (n) {
    return n !== undefined;
  }).map(function (n) {
    return parseInt(n, 16);
  })) || [];
}

/**
 * Convert rgb values to hex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
function rgb2hex(r, g, b, a) {
  var rgb = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  return a === undefined || a === 255 ? '#' + rgb : '#' + rgb + a.toString(16).padStart(2, '0').toUpperCase();
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number[]}
 */
function rgb2hsl(r, g, b) {
  var r1 = r / 255;
  var g1 = g / 255;
  var b1 = b / 255;
  var max = Math.max(r1, g1, b1);
  var min = Math.min(r1, g1, b1);
  var h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r1:
        h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
        break;
      case g1:
        h = (b1 - r1) / d + 2;
        break;
      case b1:
        h = (r1 - g1) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}

/**
 * hsl2rgb helper method
 * @param {number} p
 * @param {number} q
 * @param {number} t
 * @returns {number}
 */
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 * @todo guard hsl params
 */
function hsl2rgb(h, s, l) {
  var r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [r, g, b].map(function (n) {
    return Math.floor(n * 255);
  });
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number[]}
 */
function rgb2hsv(r, g, b) {
  var r1 = r / 255;
  var g1 = g / 255;
  var b1 = b / 255;
  var max = Math.max(r1, g1, b1);
  var min = Math.min(r1, g1, b1);
  var h,
    s,
    v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r1:
        h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
        break;
      case g1:
        h = (b1 - r1) / d + 2;
        break;
      case b1:
        h = (r1 - g1) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, v];
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @param {number} h
 * @param {number} s
 * @param {number} v
 * @returns {number[]}
 * @todo guard hsv params
 */
function hsv2rgb(h, s, v) {
  var r, g, b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;
    case 1:
      r = q, g = v, b = p;
      break;
    case 2:
      r = p, g = v, b = t;
      break;
    case 3:
      r = p, g = q, b = v;
      break;
    case 4:
      r = t, g = p, b = v;
      break;
    case 5:
      r = v, g = p, b = q;
      break;
  }
  return [r, g, b].map(function (n) {
    return Math.floor(n * 255);
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mcpicker {\n\n  --mcp-color: #f04;\n  --mcp-w: 14rem;\n  --mcp-h: 8rem;\n  --mcp-gutter: 1rem;\n  --mcp-font-size: 0.8rem;\n\n  position: absolute;\n  width: var(--mcp-w);\n  height: var(--mcp-h);\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  background-color: var(--mcp-color);\n  box-shadow:\n      0 0 0 1px white,\n      0 2px 4px rgba(0, 0, 0, 0.4),\n      0 4px 8px rgba(0, 0, 0, 0.3);\n  /* color */\n  div {\n    position: relative;\n    width: 100%;\n    height: calc(100% - 2*var(--mcp-gutter));\n    user-select: none;\n    background:\n      linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, red, white)\n    ;\n    .mcpicker--alpha & {\n      width: calc(100% - var(--mcp-gutter));\n    }\n    /* color marker */\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      z-index: 1;\n      width: 0.5rem;\n      height: 0.5rem;\n      transform: translate(-50%,50%);\n      border-radius: 1rem;\n      box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n      pointer-events: none;\n    }\n    /* huey */\n    & + div {\n      height: var(--mcp-gutter);\n      background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n      /* huey marker */\n      &:after {\n        width: 3px;\n        height: inherit;\n        transform: translateX(-2px);\n        box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n      }\n      /* optional alpha */\n      & + div {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: var(--mcp-gutter)!important;\n        height: calc(100% - var(--mcp-gutter));\n        --mcp-checker-c1: #444;\n        --mcp-checker-c2: #bbb;\n        --mcp-checker: calc(var(--mcp-gutter)/1.5);\n        --mcp-checker-2: calc(var(--mcp-checker)/2);\n        --mcp-checker-2m: calc(var(--mcp-checker)/-2);\n        background: \n          linear-gradient(var(--mcp-color), transparent),\n          linear-gradient(45deg, var(--mcp-checker-c1) 25%, transparent 25%),\n          linear-gradient(45deg, transparent 75%, var(--mcp-checker-c1) 75%),\n          linear-gradient(45deg, transparent 75%, var(--mcp-checker-c1) 75%),\n          linear-gradient(45deg, var(--mcp-checker-c1) 25%, var(--mcp-checker-c2) 25%)\n        ;\n        background-size:\n          100% 100%,\n          var(--mcp-checker) var(--mcp-checker),\n          var(--mcp-checker) var(--mcp-checker),\n          var(--mcp-checker) var(--mcp-checker),\n          var(--mcp-checker) var(--mcp-checker)\n        ;       \n        background-position: \n          0 0, \n          0 0, \n          0 0, \n          var(--mcp-checker-2m) var(--mcp-checker-2m), \n          var(--mcp-checker-2) var(--mcp-checker-2)\n        ;\n        /* alpha marker */\n        &:after {\n          width: inherit;\n          height: 3px;\n          transform: translateY(-2px);\n          box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n        }\n      }\n    }\n  }\n  /* inputs */\n  input {\n    width: 40%;\n    height: var(--mcp-gutter);\n    display: block;\n    float: left;\n    margin: 0;\n    padding: 0.125rem 0.25rem;\n    border: 0;\n    border-radius: 0;\n    box-sizing: border-box;\n    outline: none;\n    box-shadow: none;\n    background-color: transparent;\n    font-size: var(--mcp-font-size);\n    line-height: 1rem;\n    font-family: monospace;\n    font-weight: 600;\n    text-align: center;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    /* rgb inputs */ \n    &[type=number] {\n      -moz-appearance:textfield;\n      box-shadow: 1px 0 0 rgba(white,0.5) inset;\n    }\n    +input {\n      &,+input {\n        &,+input {\n          width: calc(60% / 3);\n        }\n      }\n    }\n    /* alpha */ \n    +input {\n      &,+input {\n        &,+input {\n          &,+input {\n            .mcpicker--alpha & {\n              width: calc(60% / 4);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;EAEE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,uBAAuB;;EAEvB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,WAAW;EACX,kCAAkC;EAClC;;;kCAGgC;EAChC,UAAU;EACV;IACE,kBAAkB;IAClB,WAAW;IACX,wCAAwC;IACxC,iBAAiB;IACjB;;;IAGA;IACA;MACE,qCAAqC;IACvC;IACA,iBAAiB;IACjB;MACE,WAAW;MACX,cAAc;MACd,kBAAkB;MAClB,UAAU;MACV,aAAa;MACb,cAAc;MACd,8BAA8B;MAC9B,mBAAmB;MACnB,wDAAwD;MACxD,oBAAoB;IACtB;IACA,SAAS;IACT;MACE,yBAAyB;MACzB,+EAA+E;MAC/E,gBAAgB;MAChB;QACE,UAAU;QACV,eAAe;QACf,2BAA2B;QAC3B,wDAAwD;MAC1D;MACA,mBAAmB;MACnB;QACE,kBAAkB;QAClB,QAAQ;QACR,MAAM;QACN,kCAAkC;QAClC,sCAAsC;QACtC,sBAAsB;QACtB,sBAAsB;QACtB,0CAA0C;QAC1C,2CAA2C;QAC3C,6CAA6C;QAC7C;;;;;;QAMA;QACA;;;;;;QAMA;QACA;;;;;;QAMA;QACA,iBAAiB;QACjB;UACE,cAAc;UACd,WAAW;UACX,2BAA2B;UAC3B,wDAAwD;QAC1D;MACF;IACF;EACF;EACA,WAAW;EACX;IACE,UAAU;IACV,yBAAyB;IACzB,cAAc;IACd,WAAW;IACX,SAAS;IACT,yBAAyB;IACzB,SAAS;IACT,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,6BAA6B;IAC7B,+BAA+B;IAC/B,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB;;MAEE,wBAAwB;MACxB,SAAS;IACX;IACA,eAAe;IACf;MACE,yBAAyB;MACzB,yCAAyC;IAC3C;IACA;MACE;QACE;UACE,oBAAoB;QACtB;MACF;IACF;IACA,UAAU;IACV;MACE;QACE;UACE;YACE;cACE,oBAAoB;YACtB;UACF;QACF;MACF;IACF;EACF;AACF","sourcesContent":[".mcpicker {\n\n  --mcp-color: #f04;\n  --mcp-w: 14rem;\n  --mcp-h: 8rem;\n  --mcp-gutter: 1rem;\n  --mcp-font-size: 0.8rem;\n\n  position: absolute;\n  width: var(--mcp-w);\n  height: var(--mcp-h);\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  background-color: var(--mcp-color);\n  box-shadow:\n      0 0 0 1px white,\n      0 2px 4px rgba(0, 0, 0, 0.4),\n      0 4px 8px rgba(0, 0, 0, 0.3);\n  /* color */\n  div {\n    position: relative;\n    width: 100%;\n    height: calc(100% - 2*var(--mcp-gutter));\n    user-select: none;\n    background:\n      linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, red, white)\n    ;\n    .mcpicker--alpha & {\n      width: calc(100% - var(--mcp-gutter));\n    }\n    /* color marker */\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      z-index: 1;\n      width: 0.5rem;\n      height: 0.5rem;\n      transform: translate(-50%,50%);\n      border-radius: 1rem;\n      box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n      pointer-events: none;\n    }\n    /* huey */\n    & + div {\n      height: var(--mcp-gutter);\n      background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n      /* huey marker */\n      &:after {\n        width: 3px;\n        height: inherit;\n        transform: translateX(-2px);\n        box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n      }\n      /* optional alpha */\n      & + div {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: var(--mcp-gutter)!important;\n        height: calc(100% - var(--mcp-gutter));\n        --mcp-checker-c1: #444;\n        --mcp-checker-c2: #bbb;\n        --mcp-checker: calc(var(--mcp-gutter)/1.5);\n        --mcp-checker-2: calc(var(--mcp-checker)/2);\n        --mcp-checker-2m: calc(var(--mcp-checker)/-2);\n        background: \n          linear-gradient(var(--mcp-color), transparent),\n          linear-gradient(45deg, var(--mcp-checker-c1) 25%, transparent 25%),\n          linear-gradient(45deg, transparent 75%, var(--mcp-checker-c1) 75%),\n          linear-gradient(45deg, transparent 75%, var(--mcp-checker-c1) 75%),\n          linear-gradient(45deg, var(--mcp-checker-c1) 25%, var(--mcp-checker-c2) 25%)\n        ;\n        background-size:\n          100% 100%,\n          var(--mcp-checker) var(--mcp-checker),\n          var(--mcp-checker) var(--mcp-checker),\n          var(--mcp-checker) var(--mcp-checker),\n          var(--mcp-checker) var(--mcp-checker)\n        ;       \n        background-position: \n          0 0, \n          0 0, \n          0 0, \n          var(--mcp-checker-2m) var(--mcp-checker-2m), \n          var(--mcp-checker-2) var(--mcp-checker-2)\n        ;\n        /* alpha marker */\n        &:after {\n          width: inherit;\n          height: 3px;\n          transform: translateY(-2px);\n          box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n        }\n      }\n    }\n  }\n  /* inputs */\n  input {\n    width: 40%;\n    height: var(--mcp-gutter);\n    display: block;\n    float: left;\n    margin: 0;\n    padding: 0.125rem 0.25rem;\n    border: 0;\n    border-radius: 0;\n    box-sizing: border-box;\n    outline: none;\n    box-shadow: none;\n    background-color: transparent;\n    font-size: var(--mcp-font-size);\n    line-height: 1rem;\n    font-family: monospace;\n    font-weight: 600;\n    text-align: center;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    /* rgb inputs */ \n    &[type=number] {\n      -moz-appearance:textfield;\n      box-shadow: 1px 0 0 rgba(white,0.5) inset;\n    }\n    +input {\n      &,+input {\n        &,+input {\n          width: calc(60% / 3);\n        }\n      }\n    }\n    /* alpha */ \n    +input {\n      &,+input {\n        &,+input {\n          &,+input {\n            .mcpicker--alpha & {\n              width: calc(60% / 4);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/color.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var name = 'mcpicker';
var _document = document,
  body = _document.body,
  html = _document.documentElement;
var style = document.createElement('style');
style.appendChild(document.createComment(name + ' ' + "1.1.31"));
body.appendChild(style);
var sheet = document.styleSheets[document.styleSheets.length - 1];
var pickers = globalThis.pickers = new Map();
var px = 'px';
var auto = 'auto';
var click = 'click';
var mousedown = 'mousedown';
var mouseup = 'mouseup';
var mousemove = 'mousemove';
var resize = 'resize';
var touchstart = 'touchstart';
var touchend = 'touchend';
var touchmove = 'touchmove';
var change = 'change';
var div = 'div';
var input = 'input';

// Add the click event to document to check all the things
document.addEventListener(click, handleDocumentClick);
window.addEventListener(resize, handleDocumentResize);
var lastEvent;

/**
 * Handle document click to check if target is an `input[type=color]`
 * @param {MouseEvent} e
 */
function handleDocumentClick(e) {
  var target = e.target;
  if (target.matches('input[type=color]')) {
    e.preventDefault();
    var popup = colorPicker(target);
    removeExcept(popup);
    var clientX = e.clientX,
      clientY = e.clientY;
    alignPopupToSource(popup, target, clientX, clientY);
  } else if (lastEvent === 'click') {
    var clickedPicker = target.closest(".".concat(name));
    !(clickedPicker !== null && clickedPicker !== void 0 && clickedPicker.contains(target)) && removeExcept();
  }
  lastEvent = e.type;
}
function alignPopupToSource(popup, source) {
  var clientX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var clientY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (!source) {
    var obj = Array.from(pickers.values()).find(function (o) {
      return o.popup === popup;
    });
    source = obj.source;
  }
  var rect = source.getBoundingClientRect();
  var right = rect.right,
    bottom = rect.bottom,
    top = rect.top;
  var _document2 = document,
    _document2$documentEl = _document2.documentElement,
    scrollTop = _document2$documentEl.scrollTop,
    clientWidth = _document2$documentEl.clientWidth,
    clientHeight = _document2$documentEl.clientHeight;
  var partW = clientX / clientWidth;
  var partH = clientY / clientHeight;
  if (partW < 0.5) {
    popup.style.left = rect.left + px;
    popup.style.right = auto;
  } else {
    popup.style.left = auto;
    popup.style.right = clientWidth - right + px;
  }
  if (partH < 0.5) {
    popup.style.top = bottom + scrollTop + px;
    popup.style.bottom = auto;
  } else {
    popup.style.top = auto;
    popup.style.bottom = clientHeight - top - scrollTop + px;
  }
}

/**
 * Check position on resize (mobile keyboard may cause)
 */
function handleDocumentResize() {
  colorPicker();
}

/**
 * Remove elements from DOM except...
 * @param {HTMLElement[]} except
 */
function removeExcept(except) {
  _toConsumableArray(pickers.values()).forEach(function (_ref) {
    var popup = _ref.popup;
    return popup !== except && popup.remove();
  });
}

/**
 */
function getOpenPicker() {
  return _toConsumableArray(pickers.values()).find(function (_ref2) {
    var popup = _ref2.popup;
    return (popup === null || popup === void 0 ? void 0 : popup.parentNode) !== null;
  });
}

/**
 * Initialise the color picker for an `input[type=color]`
 * @param {HTMLInputElement} source
 * @return {HTMLElement} the color picker element
 */
function colorPicker(source) {
  var _this = this,
    _pickers$get;
  var openPicker = source ? pickers.get(source) : getOpenPicker();
  var _ref3 = openPicker || {},
    openElm = _ref3.popup,
    showPopup = _ref3.showPopup;
  var initialised = openPicker !== undefined;
  var inDOM = (openElm === null || openElm === void 0 ? void 0 : openElm.parentNode) !== null;
  if (initialised && inDOM) {
    source ? openElm.remove() : alignPopupToSource(openElm);
  } else if (initialised && !inDOM) {
    showPopup();
  } else if (source) {
    /**
     * Add popup to DOM and set focus
     */
    var _showPopup = function _showPopup() {
      body.appendChild(popup);
      inputElm.focus();
    };
    /**
     * Append a new element to an existing element
     * @param {HTMLElement} to
     * @param {string} type
     * @return {HTMLElement}
     */
    var append = function append(to, type) {
      var elm = document.createElement(type);
      to.appendChild(elm);
      return elm;
    };
    /**
     * Create a new stylesheet rule
     * @param {string} rule
     * @return {CSSRule}
     */
    var getRule = function getRule(rule) {
      sheet.insertRule(rule, 0);
      return sheet.rules[0];
    };
    /**
     * Get a unique className
     * @param {HTMLElement} source
     * @return {string}
     */
    var getClassName = function getClassName(source) {
      var unique = source.name || source.id || Math.round(Date.now() + Math.random() * 1E3).toString(16);
      return "".concat(name, "_").concat(unique);
    };
    /**
     * Click handler for the three ranges: color, huey and alpha.
     * @param {HTMLElement} elm
     * @param {MouseEvent} e
     */
    var onClickRange = function onClickRange(elm, e) {
      var _e$touches;
      var rect = elm.getBoundingClientRect();
      var eo = ((_e$touches = e.touches) === null || _e$touches === void 0 ? void 0 : _e$touches[0]) || e;
      var x = eo.clientX - rect.left;
      var y = eo.clientY - rect.top;
      var xpart = partRange(x / rect.width);
      var ypart = partRange(1 - y / rect.height);
      if (elm === colorElm) {
        colorInst.setSV(xpart, ypart);
        setColorPos();
        setBackground();
      } else if (elm === hueElm) {
        colorInst.setH(xpart);
        hueInst.setH(xpart);
        setHuePos();
        setColorHue();
        setBackground();
      } else if (elm === alphaElm) {
        colorInst.a = ypart * 255 << 0;
        setAlphaPos();
      }
      setInputHex();
      setInputRGB();
      setSource();
      lastEvent = e.type;
    };
    /**
     * Click handler for the color gradient
     * @param {MouseEvent} e
     */
    var onClickColor = function onClickColor(e) {
      var _e$touches2;
      var rect = colorElm.getBoundingClientRect();
      var eo = ((_e$touches2 = e.touches) === null || _e$touches2 === void 0 ? void 0 : _e$touches2[0]) || e;
      var x = eo.clientX - rect.left;
      var y = eo.clientY - rect.top;
      var xpart = partRange(x / rect.width);
      var ypart = partRange(1 - y / rect.height);
      colorInst.setSV(xpart, ypart);
      setColorPos();
      setBackground();
      setInputHex();
      setInputRGB();
      setSource();
      lastEvent = e.type;
    };
    /**
     * Click handler for the hue gradient
     * @param {MouseEvent} e
     */
    var onClickHue = function onClickHue(e) {
      var _e$touches3;
      var rect = hueElm.getBoundingClientRect();
      var eo = ((_e$touches3 = e.touches) === null || _e$touches3 === void 0 ? void 0 : _e$touches3[0]) || e;
      var x = eo.clientX - rect.left;
      var xpart = partRange(x / rect.width);
      colorInst.setH(xpart);
      hueInst.setH(xpart);
      setHuePos();
      setColorHue();
      setBackground();
      setInputHex();
      setInputRGB();
      setSource();
      lastEvent = e.type;
    };
    /**
     * Click handler for the alpha range
     * @param {MouseEvent} e
     */
    var onClickAlpha = function onClickAlpha(e) {
      var _e$touches4;
      var rect = alphaElm.getBoundingClientRect();
      var eo = ((_e$touches4 = e.touches) === null || _e$touches4 === void 0 ? void 0 : _e$touches4[0]) || e;
      var y = eo.clientY - rect.top;
      var ypart = partRange(1 - y / rect.height);
      colorInst.a = ypart * 255 << 0;
      setAlphaPos();
      setInputHex();
      setInputRGB();
      setSource();
      lastEvent = e.type;
    };
    /**
     * Input handler for the hex text input
     */
    var onHexInput = function onHexInput() {
      colorInst.setHex(inputElm.value);
      var r = colorInst.r,
        g = colorInst.g,
        b = colorInst.b,
        a = colorInst.a;
      hueInst.setRGB(r, g, b, a).setSL(1, 0.5);
      setColors();
      setInputRGB();
      setAlphaPos();
      setSource();
    };
    /**
     * Input handler for one of the rgb text inputs
     * @param {event} e
     */
    var onRGBInput = function onRGBInput(e) {
      var target = e.target,
        value = e.target.value;
      if (value < 0) target.value = 0;else if (value > 255) target.value = 255;
      var _colorInst$setRGB = colorInst.setRGB.apply(colorInst, _toConsumableArray(inputRGBA.map(function (m) {
          return parseInt(m.value, 10);
        }))),
        r = _colorInst$setRGB.r,
        g = _colorInst$setRGB.g,
        b = _colorInst$setRGB.b,
        a = _colorInst$setRGB.a;
      hueInst.setRGB(r, g, b, a).setSL(1, 0.5);
      //hueInst = colorInst.clone().setSL(1, 0.5)
      setColors();
      setInputHex();
      setSource();
    };
    /**
     * Clamp value between 0 and 1
     * @param {number} f
     * @return {number}
     */
    var partRange = function partRange(f) {
      return Math.min(Math.max(f, 0), 1);
    };
    /**
     * Set the color of the color gradient
     */
    var setColorHue = function setColorHue() {
      ruleColorcolor.style.background = "linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, ".concat(hueInst.hex, ", white)");
    };
    /**
     * Set the position of the color gradient
     */
    var setColorPos = function setColorPos() {
      var xpart = colorInst.s;
      var ypart = colorInst.v;
      ruleColor.style.left = "".concat((xpart * 100).toFixed(2), "%");
      ruleColor.style.bottom = "".concat((ypart * 100).toFixed(2), "%");
    };
    /**
     * Set the position of the hue gradient
     */
    var setHuePos = function setHuePos() {
      var xpart = colorInst.h;
      ruleHue.style.left = "".concat((xpart * 100).toFixed(2), "%");
    };
    /**
     * Set the position of the alpha range
     */
    var setAlphaPos = function setAlphaPos() {
      var ypart = 1 - colorInst.a / 255;
      ruleAlpha.style.left = 'initial';
      ruleAlpha.style.top = "".concat((ypart * 100).toFixed(2), "%");
    };
    /**
     * Set the back- and foreground color of the input elements
     */
    var setBackground = function setBackground() {
      var isBright = colorInst.luminance > 0.5;
      rulePicker.style.setProperty('--mcp-color', colorInst.hexflat); //'#f04'//color(255-b, 255-r, 255-g).hexflat
      ruleInput.style.color = isBright ? '#000' : '#FFF';
      ruleNumber.style.boxShadow = "1px 0 0 rgba(".concat(isBright ? '0,0,0,0.3' : '255,255,255,0.5', ") inset");
      var r = colorInst.r,
        g = colorInst.g,
        b = colorInst.b;
      ruleInputSelection.style.backgroundColor = (0,_color__WEBPACK_IMPORTED_MODULE_1__.color)(255 - b, 255 - r, 255 - g).hexflat;
    };
    /**
     * Set the value of the hex input
     */
    var setInputHex = function setInputHex() {
      inputElm.value = colorInst.hex;
    };
    /**
     * Set the value of the rgb inputs
     */
    var setInputRGB = function setInputRGB() {
      inputRGBA.forEach(function (input, i) {
        return input.value = Math.round(colorInst[['r', 'g', 'b', 'a'][i]]);
      });
    };
    /**
     * Set the value of the source `input[type=color]`
     */
    var setSource = function setSource() {
      source.value = colorInst.hexflat;
      hasAlpha && (source.dataset.alpha = colorInst.a);
      dispatch();
    };
    /**
     * Dispatch the input event on the source `input[type=color]`
     * @param {string} type
     */
    var dispatch = function dispatch() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : input;
      var event = document.createEvent('HTMLEvents');
      event.initEvent(type, true, false);
      source.dispatchEvent(event);
    };
    /**
     * Set all the colors
     */
    var setColors = function setColors() {
      setHuePos();
      setColorHue();
      setColorPos();
      setBackground();
    };
    var hasAlpha = !!(source !== null && source !== void 0 && source.dataset.hasOwnProperty('alpha'));
    var popup = document.createElement(div);
    popup.classList.add(name);
    hasAlpha && popup.classList.add(name + '--alpha');
    popup.remove = function () {
      dispatch(change);
      Element.prototype.remove.apply(popup);
    };
    var colorElm = append(popup, div);
    var hueElm = append(popup, div);
    var alphaElm = hasAlpha && append(popup, div) || document.createElement(div);
    var inputElm = append(popup, input);
    inputElm.value = source.value;
    inputElm.maxLength = hasAlpha ? 9 : 7;
    var inputRGBA = [append(popup, input), append(popup, input), append(popup, input)].concat(_toConsumableArray(hasAlpha ? [append(popup, input)] : []));
    inputRGBA.forEach(function (elm) {
      return elm.type = 'number';
    });
    _showPopup();
    var className = getClassName(source);
    popup.classList.add(className);
    var colorInst = (0,_color__WEBPACK_IMPORTED_MODULE_1__.color)(inputElm.value);
    hasAlpha && (colorInst.a = parseInt(source.dataset.alpha, 10));
    var hueInst = colorInst.clone().setSL(1, 0.5);
    pickers.set(source, {
      popup: popup,
      showPopup: _showPopup,
      source: source,
      color: colorInst
    });
    source.color = colorInst;
    var baseRule = ".".concat(name, ".").concat(className);
    var rulePicker = getRule("".concat(baseRule, " {}"));
    var ruleColorcolor = getRule("".concat(baseRule, " div:first-child {}"));
    var ruleColor = getRule("".concat(baseRule, " div:first-child:after {}"));
    var ruleHue = getRule("".concat(baseRule, " div+div:after {}"));
    var ruleAlpha = getRule("".concat(baseRule, " div+div+div:after {}"));
    var ruleInput = getRule("".concat(baseRule, " input {}"));
    var ruleNumber = getRule("".concat(baseRule, " input[type=number] {}"));
    var ruleInputSelection = getRule("".concat(baseRule, ">input::selection {}"));
    colorElm.addEventListener(click, onClickColor);
    hueElm.addEventListener(click, onClickHue);
    var events = [[mousedown, mouseup, mousemove], [touchstart, touchend, touchmove]];
    [[colorElm, onClickColor], [hueElm, onClickHue], [alphaElm, onClickAlpha]].forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        elm = _ref5[0],
        onClick = _ref5[1];
      events.forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 3),
          start = _ref7[0],
          end = _ref7[1],
          move = _ref7[2];
        var onClickBound = onClickRange.bind(_this, elm);
        elm.addEventListener(start, function (e) {
          onClickBound(e);
          html.addEventListener(move, onClickBound);
          //onClick(e)
          //html.addEventListener(move, onClick)
          e.preventDefault();
        });
        html.addEventListener(end, function () {
          return html.removeEventListener(move, onClickBound);
        });
        //html.addEventListener(end, ()=>html.removeEventListener(move, onClick))
      });
    });

    inputElm.addEventListener(input, onHexInput);
    inputRGBA.forEach(function (elm) {
      return elm.addEventListener(input, onRGBInput);
    });
    setColors();
    setInputHex();
    setInputRGB();
    setAlphaPos();
  }
  return (_pickers$get = pickers.get(source)) === null || _pickers$get === void 0 ? void 0 : _pickers$get.popup;
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map