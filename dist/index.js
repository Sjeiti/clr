<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/styles.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mcpicker {\n  position: absolute;\n  width: 14rem;\n  height: 8rem;\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  box-shadow: 0 0 0 1px white, 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.mcpicker > div:first-child {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 2rem);\n  user-select: none;\n  background: linear-gradient(to top, black, rgba(0, 0, 0, 0)), linear-gradient(to left, red, white);\n}\n.mcpicker > div:first-child:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  transform: translate(-50%, 50%);\n  pointer-events: none;\n}\n.mcpicker > div:first-child + div {\n  position: relative;\n  height: 1rem;\n  user-select: none;\n  background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n}\n.mcpicker > div:first-child + div:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 3px;\n  transform: translateX(-2px);\n  height: inherit;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  pointer-events: none;\n}\n.mcpicker input {\n  width: 40%;\n  height: 1rem;\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0.125rem 0.25rem;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  outline: none;\n  box-shadow: none;\n  background-color: transparent;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-family: monospace;\n  font-weight: 600;\n  text-align: center;\n}\n.mcpicker input::-webkit-outer-spin-button,\n.mcpicker input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mcpicker input[type=number] {\n  -moz-appearance: textfield;\n  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.5) inset;\n}\n.mcpicker input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input + input {\n  width: 20%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/color-js-abridged.js":
/*!**********************************!*\
  !*** ./src/color-js-abridged.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2008-2013, Andrew Brehaut, Tim Baumann, Matt Wilson,
//                          Simon Heimler, Michel Vielmetter
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice,
//   this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// color.js - version 1.0.1
//
// HSV <-> RGB code based on code from http://www.cs.rit.edu/~ncs/color/t_convert.html
// object function created by Douglas Crockford.
// Color scheme degrees taken from the colorjack.com colorpicker
//
// HSL support kindly provided by Tim Baumann - http://github.com/timjb
// create namespaces

/*global net */
if ("undefined" == typeof net) {
  var net = {};
}

if (!net.brehaut) {
  net.brehaut = {};
} // this module function is called with net.brehaut as 'this'


(function () {
  "use strict"; // Constants
  // css_colors maps color names onto their hex values
  // these names are defined by W3C
  // var css_colors = {aliceblue:'#F0F8FF',antiquewhite:'#FAEBD7',aqua:'#00FFFF',aquamarine:'#7FFFD4',azure:'#F0FFFF',beige:'#F5F5DC',bisque:'#FFE4C4',black:'#000000',blanchedalmond:'#FFEBCD',blue:'#0000FF',blueviolet:'#8A2BE2',brown:'#A52A2A',burlywood:'#DEB887',cadetblue:'#5F9EA0',chartreuse:'#7FFF00',chocolate:'#D2691E',coral:'#FF7F50',cornflowerblue:'#6495ED',cornsilk:'#FFF8DC',crimson:'#DC143C',cyan:'#00FFFF',darkblue:'#00008B',darkcyan:'#008B8B',darkgoldenrod:'#B8860B',darkgray:'#A9A9A9',darkgrey:'#A9A9A9',darkgreen:'#006400',darkkhaki:'#BDB76B',darkmagenta:'#8B008B',darkolivegreen:'#556B2F',darkorange:'#FF8C00',darkorchid:'#9932CC',darkred:'#8B0000',darksalmon:'#E9967A',darkseagreen:'#8FBC8F',darkslateblue:'#483D8B',darkslategray:'#2F4F4F',darkslategrey:'#2F4F4F',darkturquoise:'#00CED1',darkviolet:'#9400D3',deeppink:'#FF1493',deepskyblue:'#00BFFF',dimgray:'#696969',dimgrey:'#696969',dodgerblue:'#1E90FF',firebrick:'#B22222',floralwhite:'#FFFAF0',forestgreen:'#228B22',fuchsia:'#FF00FF',gainsboro:'#DCDCDC',ghostwhite:'#F8F8FF',gold:'#FFD700',goldenrod:'#DAA520',gray:'#808080',grey:'#808080',green:'#008000',greenyellow:'#ADFF2F',honeydew:'#F0FFF0',hotpink:'#FF69B4',indianred:'#CD5C5C',indigo:'#4B0082',ivory:'#FFFFF0',khaki:'#F0E68C',lavender:'#E6E6FA',lavenderblush:'#FFF0F5',lawngreen:'#7CFC00',lemonchiffon:'#FFFACD',lightblue:'#ADD8E6',lightcoral:'#F08080',lightcyan:'#E0FFFF',lightgoldenrodyellow:'#FAFAD2',lightgray:'#D3D3D3',lightgrey:'#D3D3D3',lightgreen:'#90EE90',lightpink:'#FFB6C1',lightsalmon:'#FFA07A',lightseagreen:'#20B2AA',lightskyblue:'#87CEFA',lightslategray:'#778899',lightslategrey:'#778899',lightsteelblue:'#B0C4DE',lightyellow:'#FFFFE0',lime:'#00FF00',limegreen:'#32CD32',linen:'#FAF0E6',magenta:'#FF00FF',maroon:'#800000',mediumaquamarine:'#66CDAA',mediumblue:'#0000CD',mediumorchid:'#BA55D3',mediumpurple:'#9370D8',mediumseagreen:'#3CB371',mediumslateblue:'#7B68EE',mediumspringgreen:'#00FA9A',mediumturquoise:'#48D1CC',mediumvioletred:'#C71585',midnightblue:'#191970',mintcream:'#F5FFFA',mistyrose:'#FFE4E1',moccasin:'#FFE4B5',navajowhite:'#FFDEAD',navy:'#000080',oldlace:'#FDF5E6',olive:'#808000',olivedrab:'#6B8E23',orange:'#FFA500',orangered:'#FF4500',orchid:'#DA70D6',palegoldenrod:'#EEE8AA',palegreen:'#98FB98',paleturquoise:'#AFEEEE',palevioletred:'#D87093',papayawhip:'#FFEFD5',peachpuff:'#FFDAB9',peru:'#CD853F',pink:'#FFC0CB',plum:'#DDA0DD',powderblue:'#B0E0E6',purple:'#800080',rebeccapurple:'#663399',red:'#FF0000',rosybrown:'#BC8F8F',royalblue:'#4169E1',saddlebrown:'#8B4513',salmon:'#FA8072',sandybrown:'#F4A460',seagreen:'#2E8B57',seashell:'#FFF5EE',sienna:'#A0522D',silver:'#C0C0C0',skyblue:'#87CEEB',slateblue:'#6A5ACD',slategray:'#708090',slategrey:'#708090',snow:'#FFFAFA',springgreen:'#00FF7F',steelblue:'#4682B4',tan:'#D2B48C',teal:'#008080',thistle:'#D8BFD8',tomato:'#FF6347',turquoise:'#40E0D0',violet:'#EE82EE',wheat:'#F5DEB3',white:'#FFFFFF',whitesmoke:'#F5F5F5',yellow:'#FFFF00',yellowgreen:'#9ACD32'};
  // CSS value regexes, according to http://www.w3.org/TR/css3-values/

  var css_integer = '(?:\\+|-)?\\d+';
  var css_float = '(?:\\+|-)?\\d*\\.\\d+';
  var css_number = '(?:' + css_integer + ')|(?:' + css_float + ')';
  css_integer = '(' + css_integer + ')';
  css_float = '(' + css_float + ')';
  css_number = '(' + css_number + ')';
  var css_percentage = css_number + '%';
  var css_whitespace = '\\s*?'; // http://www.w3.org/TR/2003/CR-css3-color-20030514/

  var hsl_hsla_regex = new RegExp(['^hsl(a?)\\(', css_number, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'].join(css_whitespace));
  var rgb_rgba_integer_regex = new RegExp(['^rgb(a?)\\(', css_integer, ',', css_integer, ',', css_integer, '(,(', css_number, '))?\\)$'].join(css_whitespace));
  var rgb_rgba_percentage_regex = new RegExp(['^rgb(a?)\\(', css_percentage, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'].join(css_whitespace)); // Package wide variables
  // becomes the top level prototype object

  var color;
  /* registered_models contains the template objects for all the
   * models that have been registered for the color class.
   */

  var registered_models = [];
  /* factories contains methods to create new instance of
   * different color models that have been registered.
   */

  var factories = {}; // Utility functions

  /* object is Douglas Crockfords object function for prototypal
   * inheritance.
   */

  if (!this.object) {
    this.object = function (o) {
      function F() {}

      F.prototype = o;
      return new F();
    };
  }

  var object = this.object;
  /* takes a value, converts to string if need be, then pads it
   * to a minimum length.
   */

  function pad(val, len) {
    val = val.toString();
    var padded = [];

    for (var i = 0, j = Math.max(len - val.length, 0); i < j; i++) {
      padded.push('0');
    }

    padded.push(val);
    return padded.join('');
  }
  /* takes a string and returns a new string with the first letter
   * capitalised
   */


  function capitalise(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
  }
  /* removes leading and trailing whitespace
   */


  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  /* used to apply a method to object non-destructively by
   * cloning the object and then apply the method to that
   * new object
   */


  function cloneOnApply(meth) {
    return function () {
      var cloned = this.clone();
      meth.apply(cloned, arguments);
      return cloned;
    };
  }
  /* registerModel is used to add additional representations
   * to the color code, and extend the color API with the new
   * operation that model provides. see before for examples
   */


  function registerModel(name, model) {
    var proto = object(color);
    var fields = []; // used for cloning and generating accessors

    var to_meth = 'to' + capitalise(name);

    function convertAndApply(meth) {
      return function () {
        return meth.apply(this[to_meth](), arguments);
      };
    }

    for (var key in model) {
      if (model.hasOwnProperty(key)) {
        proto[key] = model[key];
        var prop = proto[key];

        if (key.slice(0, 1) == '_') {
          continue;
        }

        if (!(key in color) && "function" == typeof prop) {
          // the method found on this object is a) public and b) not
          // currently supported by the color object. Create an impl that
          // calls the toModel function and passes that new object
          // onto the correct method with the args.
          color[key] = convertAndApply(prop);
        } else if ("function" != typeof prop) {
          // we have found a public property. create accessor methods
          // and bind them up correctly
          fields.push(key);
          var getter = 'get' + capitalise(key);
          var setter = 'set' + capitalise(key);
          color[getter] = convertAndApply(proto[getter] = function (key) {
            return function () {
              return this[key];
            };
          }(key));
          color[setter] = convertAndApply(proto[setter] = function (key) {
            return function (val) {
              var cloned = this.clone();
              cloned[key] = val;
              return cloned;
            };
          }(key));
        }
      }
    } // end of for over model
    // a method to create a new object - largely so prototype chains dont
    // get insane. This uses an unrolled 'object' so that F is cached
    // for later use. this is approx a 25% speed improvement


    function F() {}

    F.prototype = proto;

    function factory() {
      return new F();
    }

    factories[name] = factory;

    proto.clone = function () {
      var cloned = factory();

      for (var i = 0, j = fields.length; i < j; i++) {
        var key = fields[i];
        cloned[key] = this[key];
      }

      return cloned;
    };

    color[to_meth] = function () {
      return factory();
    };

    registered_models.push(proto);
    return proto;
  } // end of registerModel
  // Template Objects

  /* color is the root object in the color hierarchy. It starts
   * life as a very simple object, but as color models are
   * registered it has methods programmatically added to manage
   * conversions as needed.
   */


  color = {
    /* fromObject takes an argument and delegates to the internal
     * color models to try to create a new instance.
     */
    fromObject: function fromObject(o) {
      if (!o) {
        return object(color);
      }

      for (var i = 0, j = registered_models.length; i < j; i++) {
        var nu = registered_models[i].fromObject(o);

        if (nu) {
          return nu;
        }
      }

      return object(color);
    },
    toString: function toString() {
      return this.toCSS();
    }
  };
  var transparent = null; // defined with an RGB later.

  /* RGB is the red green blue model. This definition is converted
   * to a template object by registerModel.
   */

  registerModel('RGB', {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0,

    /* getLuminance returns a value between 0 and 1, this is the
     * luminance calcuated according to
     * http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
     */
    getLuminance: function getLuminance() {
      return this.red * 0.2126 + this.green * 0.7152 + this.blue * 0.0722;
    },

    /* does an alpha based blend of color onto this. alpha is the
     * amount of 'color' to use. (0 to 1)
     */
    blend: function blend(color, alpha) {
      color = color.toRGB();
      alpha = Math.min(Math.max(alpha, 0), 1);
      var rgb = this.clone();
      rgb.red = rgb.red * (1 - alpha) + color.red * alpha;
      rgb.green = rgb.green * (1 - alpha) + color.green * alpha;
      rgb.blue = rgb.blue * (1 - alpha) + color.blue * alpha;
      rgb.alpha = rgb.alpha * (1 - alpha) + color.alpha * alpha;
      return rgb;
    },

    /* fromObject attempts to convert an object o to and RGB
     * instance. This accepts an object with red, green and blue
     * members or a string. If the string is a known CSS color name
     * or a hexdecimal string it will accept it.
     */
    fromObject: function fromObject(o) {
      if (o instanceof Array) {
        return this._fromRGBArray(o);
      }

      if ("string" == typeof o) {
        return this._fromCSS(trim(o));
      }

      if (o.hasOwnProperty('red') && o.hasOwnProperty('green') && o.hasOwnProperty('blue')) {
        return this._fromRGB(o);
      } // nothing matchs, not an RGB object

    },
    _stringParsers: [// CSS RGB(A) literal:
    function (css) {
      css = trim(css);
      var withInteger = match(rgb_rgba_integer_regex, 255);

      if (withInteger) {
        return withInteger;
      }

      return match(rgb_rgba_percentage_regex, 100);

      function match(regex, max_value) {
        var colorGroups = css.match(regex); // If there is an "a" after "rgb", there must be a fourth parameter and the other way round

        if (!colorGroups || !!colorGroups[1] + !!colorGroups[5] === 1) {
          return null;
        }

        var rgb = factories.RGB();
        rgb.red = Math.min(1, Math.max(0, colorGroups[2] / max_value));
        rgb.green = Math.min(1, Math.max(0, colorGroups[3] / max_value));
        rgb.blue = Math.min(1, Math.max(0, colorGroups[4] / max_value));
        rgb.alpha = !!colorGroups[5] ? Math.min(Math.max(parseFloat(colorGroups[6]), 0), 1) : 1;
        return rgb;
      }
    }, function (css) {
      var lower = css.toLowerCase(); // if (lower in css_colors) {
      //     css = css_colors[lower];
      // }

      if (!css.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)) {
        return;
      }

      css = css.replace(/^#/, '');
      var bytes = css.length / 3;
      var max = Math.pow(16, bytes) - 1;
      var rgb = factories.RGB();
      rgb.red = parseInt(css.slice(0, bytes), 16) / max;
      rgb.green = parseInt(css.slice(bytes * 1, bytes * 2), 16) / max;
      rgb.blue = parseInt(css.slice(bytes * 2), 16) / max;
      rgb.alpha = 1;
      return rgb;
    }, function (css) {
      if (css.toLowerCase() !== 'transparent') return;
      return transparent;
    }],
    _fromCSS: function _fromCSS(css) {
      var color = null;

      for (var i = 0, j = this._stringParsers.length; i < j; i++) {
        color = this._stringParsers[i](css);
        if (color) return color;
      }
    },
    _fromRGB: function _fromRGB(RGB) {
      var newRGB = factories.RGB();
      newRGB.red = RGB.red;
      newRGB.green = RGB.green;
      newRGB.blue = RGB.blue;
      newRGB.alpha = RGB.hasOwnProperty('alpha') ? RGB.alpha : 1;
      return newRGB;
    },
    _fromRGBArray: function _fromRGBArray(RGB) {
      var newRGB = factories.RGB();
      newRGB.red = Math.max(0, Math.min(1, RGB[0] / 255));
      newRGB.green = Math.max(0, Math.min(1, RGB[1] / 255));
      newRGB.blue = Math.max(0, Math.min(1, RGB[2] / 255));
      newRGB.alpha = RGB[3] !== undefined ? Math.max(0, Math.min(1, RGB[3])) : 1;
      return newRGB;
    },
    // convert to a CSS string. defaults to two bytes a value
    toCSSHex: function toCSSHex(bytes) {
      bytes = bytes || 2;
      var max = Math.pow(16, bytes) - 1;
      var css = ["#", pad(Math.round(this.red * max).toString(16).toUpperCase(), bytes), pad(Math.round(this.green * max).toString(16).toUpperCase(), bytes), pad(Math.round(this.blue * max).toString(16).toUpperCase(), bytes)];
      return css.join('');
    },
    toCSS: function toCSS(bytes) {
      if (this.alpha === 1) return this.toCSSHex(bytes);
      var max = 255;
      var components = ['rgba(', Math.max(0, Math.min(max, Math.round(this.red * max))), ',', Math.max(0, Math.min(max, Math.round(this.green * max))), ',', Math.max(0, Math.min(max, Math.round(this.blue * max))), ',', Math.max(0, Math.min(1, this.alpha)), ')'];
      return components.join('');
    },
    toHSV: function toHSV() {
      var hsv = factories.HSV();
      var min, max, delta;
      min = Math.min(this.red, this.green, this.blue);
      max = Math.max(this.red, this.green, this.blue);
      hsv.value = max; // v

      delta = max - min;

      if (delta == 0) {
        // white, grey, black
        hsv.hue = hsv.saturation = 0;
      } else {
        // chroma
        hsv.saturation = delta / max;

        if (this.red == max) {
          hsv.hue = (this.green - this.blue) / delta; // between yellow & magenta
        } else if (this.green == max) {
          hsv.hue = 2 + (this.blue - this.red) / delta; // between cyan & yellow
        } else {
          hsv.hue = 4 + (this.red - this.green) / delta; // between magenta & cyan
        }

        hsv.hue = (hsv.hue * 60 + 360) % 360; // degrees
      }

      hsv.alpha = this.alpha;
      return hsv;
    },
    toHSL: function toHSL() {
      return this.toHSV().toHSL();
    },
    toRGB: function toRGB() {
      return this.clone();
    }
  });
  transparent = color.fromObject({
    red: 0,
    blue: 0,
    green: 0,
    alpha: 0
  });
  /* Like RGB above, this object describes what will become the HSV
   * template object. This model handles hue, saturation and value.
   * hue is the number of degrees around the color wheel, saturation
   * describes how much color their is and value is the brightness.
   */

  registerModel('HSV', {
    hue: 0,
    saturation: 0,
    value: 1,
    alpha: 1,
    shiftHue: cloneOnApply(function (degrees) {
      var hue = (this.hue + degrees) % 360;

      if (hue < 0) {
        hue = (360 + hue) % 360;
      }

      this.hue = hue;
    }),
    devalueByAmount: cloneOnApply(function (val) {
      this.value = Math.min(1, Math.max(this.value - val, 0));
    }),
    devalueByRatio: cloneOnApply(function (val) {
      this.value = Math.min(1, Math.max(this.value * (1 - val), 0));
    }),
    valueByAmount: cloneOnApply(function (val) {
      this.value = Math.min(1, Math.max(this.value + val, 0));
    }),
    valueByRatio: cloneOnApply(function (val) {
      this.value = Math.min(1, Math.max(this.value * (1 + val), 0));
    }),
    desaturateByAmount: cloneOnApply(function (val) {
      this.saturation = Math.min(1, Math.max(this.saturation - val, 0));
    }),
    desaturateByRatio: cloneOnApply(function (val) {
      this.saturation = Math.min(1, Math.max(this.saturation * (1 - val), 0));
    }),
    saturateByAmount: cloneOnApply(function (val) {
      this.saturation = Math.min(1, Math.max(this.saturation + val, 0));
    }),
    saturateByRatio: cloneOnApply(function (val) {
      this.saturation = Math.min(1, Math.max(this.saturation * (1 + val), 0));
    }),
    schemeFromDegrees: function schemeFromDegrees(degrees) {
      var newColors = [];

      for (var i = 0, j = degrees.length; i < j; i++) {
        var col = this.clone();
        col.hue = (this.hue + degrees[i]) % 360;
        newColors.push(col);
      }

      return newColors;
    },
    complementaryScheme: function complementaryScheme() {
      return this.schemeFromDegrees([0, 180]);
    },
    splitComplementaryScheme: function splitComplementaryScheme() {
      return this.schemeFromDegrees([0, 150, 320]);
    },
    splitComplementaryCWScheme: function splitComplementaryCWScheme() {
      return this.schemeFromDegrees([0, 150, 300]);
    },
    splitComplementaryCCWScheme: function splitComplementaryCCWScheme() {
      return this.schemeFromDegrees([0, 60, 210]);
    },
    triadicScheme: function triadicScheme() {
      return this.schemeFromDegrees([0, 120, 240]);
    },
    clashScheme: function clashScheme() {
      return this.schemeFromDegrees([0, 90, 270]);
    },
    tetradicScheme: function tetradicScheme() {
      return this.schemeFromDegrees([0, 90, 180, 270]);
    },
    fourToneCWScheme: function fourToneCWScheme() {
      return this.schemeFromDegrees([0, 60, 180, 240]);
    },
    fourToneCCWScheme: function fourToneCCWScheme() {
      return this.schemeFromDegrees([0, 120, 180, 300]);
    },
    fiveToneAScheme: function fiveToneAScheme() {
      return this.schemeFromDegrees([0, 115, 155, 205, 245]);
    },
    fiveToneBScheme: function fiveToneBScheme() {
      return this.schemeFromDegrees([0, 40, 90, 130, 245]);
    },
    fiveToneCScheme: function fiveToneCScheme() {
      return this.schemeFromDegrees([0, 50, 90, 205, 320]);
    },
    fiveToneDScheme: function fiveToneDScheme() {
      return this.schemeFromDegrees([0, 40, 155, 270, 310]);
    },
    fiveToneEScheme: function fiveToneEScheme() {
      return this.schemeFromDegrees([0, 115, 230, 270, 320]);
    },
    sixToneCWScheme: function sixToneCWScheme() {
      return this.schemeFromDegrees([0, 30, 120, 150, 240, 270]);
    },
    sixToneCCWScheme: function sixToneCCWScheme() {
      return this.schemeFromDegrees([0, 90, 120, 210, 240, 330]);
    },
    neutralScheme: function neutralScheme() {
      return this.schemeFromDegrees([0, 15, 30, 45, 60, 75]);
    },
    analogousScheme: function analogousScheme() {
      return this.schemeFromDegrees([0, 30, 60, 90, 120, 150]);
    },
    fromObject: function fromObject(o) {
      if (o.hasOwnProperty('hue') && o.hasOwnProperty('saturation') && o.hasOwnProperty('value')) {
        var hsv = factories.HSV();
        hsv.hue = o.hue;
        hsv.saturation = o.saturation;
        hsv.value = o.value;
        hsv.alpha = o.hasOwnProperty('alpha') ? o.alpha : 1;
        return hsv;
      } // nothing matches, not an HSV object


      return null;
    },
    _normalise: function _normalise() {
      this.hue %= 360;
      this.saturation = Math.min(Math.max(0, this.saturation), 1);
      this.value = Math.min(Math.max(0, this.value));
      this.alpha = Math.min(1, Math.max(0, this.alpha));
    },
    toRGB: function toRGB() {
      this._normalise();

      var rgb = factories.RGB();
      var i;
      var f, p, q, t;

      if (this.saturation === 0) {
        // achromatic (grey)
        rgb.red = this.value;
        rgb.green = this.value;
        rgb.blue = this.value;
        rgb.alpha = this.alpha;
        return rgb;
      }

      var h = this.hue / 60; // sector 0 to 5

      i = Math.floor(h);
      f = h - i; // factorial part of h

      p = this.value * (1 - this.saturation);
      q = this.value * (1 - this.saturation * f);
      t = this.value * (1 - this.saturation * (1 - f));

      switch (i) {
        case 0:
          rgb.red = this.value;
          rgb.green = t;
          rgb.blue = p;
          break;

        case 1:
          rgb.red = q;
          rgb.green = this.value;
          rgb.blue = p;
          break;

        case 2:
          rgb.red = p;
          rgb.green = this.value;
          rgb.blue = t;
          break;

        case 3:
          rgb.red = p;
          rgb.green = q;
          rgb.blue = this.value;
          break;

        case 4:
          rgb.red = t;
          rgb.green = p;
          rgb.blue = this.value;
          break;

        default:
          // case 5:
          rgb.red = this.value;
          rgb.green = p;
          rgb.blue = q;
          break;
      }

      rgb.alpha = this.alpha;
      return rgb;
    },
    toHSL: function toHSL() {
      this._normalise();

      var hsl = factories.HSL();
      hsl.hue = this.hue;
      var l = (2 - this.saturation) * this.value,
          s = this.saturation * this.value;

      if (l && 2 - l) {
        s /= l <= 1 ? l : 2 - l;
      }

      l /= 2;
      hsl.saturation = s;
      hsl.lightness = l;
      hsl.alpha = this.alpha;
      return hsl;
    },
    toHSV: function toHSV() {
      return this.clone();
    }
  });
  registerModel('HSL', {
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 1,
    darkenByAmount: cloneOnApply(function (val) {
      this.lightness = Math.min(1, Math.max(this.lightness - val, 0));
    }),
    darkenByRatio: cloneOnApply(function (val) {
      this.lightness = Math.min(1, Math.max(this.lightness * (1 - val), 0));
    }),
    lightenByAmount: cloneOnApply(function (val) {
      this.lightness = Math.min(1, Math.max(this.lightness + val, 0));
    }),
    lightenByRatio: cloneOnApply(function (val) {
      this.lightness = Math.min(1, Math.max(this.lightness * (1 + val), 0));
    }),
    fromObject: function fromObject(o) {
      if ("string" == typeof o) {
        return this._fromCSS(o);
      }

      if (o.hasOwnProperty('hue') && o.hasOwnProperty('saturation') && o.hasOwnProperty('lightness')) {
        return this._fromHSL(o);
      } // nothing matchs, not an RGB object

    },
    _fromCSS: function _fromCSS(css) {
      var colorGroups = trim(css).match(hsl_hsla_regex); // if there is an "a" after "hsl", there must be a fourth parameter and the other way round

      if (!colorGroups || !!colorGroups[1] + !!colorGroups[5] === 1) {
        return null;
      }

      var hsl = factories.HSL();
      hsl.hue = (colorGroups[2] % 360 + 360) % 360;
      hsl.saturation = Math.max(0, Math.min(parseInt(colorGroups[3], 10) / 100, 1));
      hsl.lightness = Math.max(0, Math.min(parseInt(colorGroups[4], 10) / 100, 1));
      hsl.alpha = !!colorGroups[5] ? Math.max(0, Math.min(1, parseFloat(colorGroups[6]))) : 1;
      return hsl;
    },
    _fromHSL: function _fromHSL(HSL) {
      var newHSL = factories.HSL();
      newHSL.hue = HSL.hue;
      newHSL.saturation = HSL.saturation;
      newHSL.lightness = HSL.lightness;
      newHSL.alpha = HSL.hasOwnProperty('alpha') ? HSL.alpha : 1;
      return newHSL;
    },
    _normalise: function _normalise() {
      this.hue = (this.hue % 360 + 360) % 360;
      this.saturation = Math.min(Math.max(0, this.saturation), 1);
      this.lightness = Math.min(Math.max(0, this.lightness));
      this.alpha = Math.min(1, Math.max(0, this.alpha));
    },
    toHSL: function toHSL() {
      return this.clone();
    },
    toHSV: function toHSV() {
      this._normalise();

      var hsv = factories.HSV(); // http://ariya.blogspot.com/2008/07/converting-between-hsl-and-hsv.html

      hsv.hue = this.hue; // H

      var l = 2 * this.lightness,
          s = this.saturation * (l <= 1 ? l : 2 - l);
      hsv.value = (l + s) / 2; // V

      hsv.saturation = 2 * s / (l + s) || 0; // S

      hsv.alpha = this.alpha;
      return hsv;
    },
    toRGB: function toRGB() {
      return this.toHSV().toRGB();
    }
  }); // Package specific exports

  /* the Color function is a factory for new color objects.
   */

  function Color(o) {
    return color.fromObject(o);
  }

  Color.isValid = function (str) {
    var key,
        c = Color(str);
    var length = 0;

    for (key in c) {
      if (c.hasOwnProperty(key)) {
        length++;
      }
    }

    return length > 0;
  };

  net.brehaut.Color = Color;
}).call(net.brehaut);
/* Export to CommonJS
 */

if (true) {
  module.exports = net.brehaut.Color;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js_abridged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-js-abridged */ "./src/color-js-abridged.js");
/* harmony import */ var _color_js_abridged__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_color_js_abridged__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.less */ "./src/styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

 // 'color-js'


var name = 'mcpicker';
var _document = document,
    body = _document.body,
    html = _document.documentElement;
body.appendChild(document.createElement('style'));
var sheet = document.styleSheets[document.styleSheets.length - 1];
var popups = new Map();
var px = 'px';
var auto = 'auto'; // Add the click event to document to check all the things

document.addEventListener('click', handleDocumentClick);
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
    var rect = target.getBoundingClientRect();
    var right = rect.right,
        bottom = rect.bottom,
        top = rect.top;
    var clientX = e.clientX,
        clientY = e.clientY;
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
  } else {
    var clickedPicker = target.closest(".".concat(name));
    !(clickedPicker === null || clickedPicker === void 0 ? void 0 : clickedPicker.contains(target)) && removeExcept();
  }
}
/**
 * Remove elements from DOM except...
 * @param {HTMLElement[]} except
 */


function removeExcept(except) {
  _toConsumableArray(popups.values()).forEach(function (elm) {
    return elm !== except && elm.remove();
  });
}
/**
 * Initialise the color picker for an `input[type=color]`
 * @param {HTMLInputElement} source
 * @return {HTMLElement} the color picker element
 */


function colorPicker(source) {
  var openElm = popups.get(source);
  var initialised = !!openElm;
  var inDOM = !!(openElm === null || openElm === void 0 ? void 0 : openElm.parentNode);

  if (initialised && inDOM) {
    openElm.remove();
  } else if (initialised && !inDOM) {
    body.appendChild(openElm);
  } else {
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
     * Click handler for the color gradient
     * @param {MouseEvent} e
     */


    var onClickColor = function onClickColor(e) {
      var _e$touches;

      var rect = colorElm.getBoundingClientRect();
      var eo = ((_e$touches = e.touches) === null || _e$touches === void 0 ? void 0 : _e$touches[0]) || e;
      var x = eo.clientX - rect.left;
      var y = eo.clientY - rect.top;
      var xpart = partRange(x / rect.width);
      var ypart = partRange(1 - y / rect.height);
      color = color.setSaturation(xpart).setValue(ypart);
      setColorPos();
      setBackground();
      setInputHex();
      setInputRGB();
      setSource();
    };
    /**
     * Click handler for the hue gradient
     * @param {MouseEvent} e
     */


    var onClickHue = function onClickHue(e) {
      var _e$touches2;

      var rect = hueElm.getBoundingClientRect();
      var eo = ((_e$touches2 = e.touches) === null || _e$touches2 === void 0 ? void 0 : _e$touches2[0]) || e;
      var x = eo.clientX - rect.left;
      var xpart = partRange(x / rect.width);
      var hue = xpart * 360;
      color = color.setHue(hue);
      hueColor = hueColor.setHue(hue);
      setHuePos();
      setColorHue();
      setBackground();
      setInputHex();
      setInputRGB();
      setSource();
    };
    /**
     * Input handler for the hex text input
     */


    var onHexInput = function onHexInput() {
      color = _color_js_abridged__WEBPACK_IMPORTED_MODULE_0___default()(inputElm.value);
      hueColor = color.setSaturation(1).setLightness(0.5);
      setColors();
      setInputRGB();
      setSource();
    };
    /**
     * Input handler for one of the rgb text inputs
     */


    var onRGBInput = function onRGBInput() {
      color = _color_js_abridged__WEBPACK_IMPORTED_MODULE_0___default()().fromObject(inputRGB.map(function (m) {
        return m.value;
      }));
      hueColor = color.setSaturation(1).setLightness(0.5);
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
      ruleColorcolor.style.background = "linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, ".concat(hueColor.toString(), ", white)");
    };
    /**
     * Set the position of the color gradient
     */


    var setColorPos = function setColorPos() {
      var xpart = color.getSaturation();
      var ypart = color.getValue();
      ruleColor.style.left = "".concat((xpart * 100).toFixed(2), "%");
      ruleColor.style.bottom = "".concat((ypart * 100).toFixed(2), "%");
    };
    /**
     * Set the position of the hue gradient
     */


    var setHuePos = function setHuePos() {
      var xpart = color.getHue() / 360;
      ruleHue.style.left = "".concat((xpart * 100).toFixed(2), "%");
    };
    /**
     * Set the back- and foreground color of the input elements
     */


    var setBackground = function setBackground() {
      var isBright = color.getLuminance() > 0.5;
      rulePicker.style.backgroundColor = color.toString();
      ruleInput.style.color = isBright ? '#000' : '#FFF';
      ruleNumber.style.boxShadow = "1px 0 0 rgba(".concat(isBright ? '0,0,0,0.3' : '255,255,255,0.5', ") inset");
      ruleInputSelection.style.backgroundColor = isBright ? color.lightenByAmount(0.6).toString() : color.darkenByAmount(0.4).toString();
    };
    /**
     * Set the value of the hex input
     */


    var setInputHex = function setInputHex() {
      inputElm.value = color.toCSS();
    };
    /**
     * Set the value of the rgb inputs
     */


    var setInputRGB = function setInputRGB() {
      inputRElm.value = Math.round(color.getRed() * 255);
      inputGElm.value = Math.round(color.getGreen() * 255);
      inputBElm.value = Math.round(color.getBlue() * 255);
    };
    /**
     * Set the value of the source `input[type=color]`
     */


    var setSource = function setSource() {
      source.value = color.toCSS();
      dispatch();
    };
    /**
     * Dispatch the input event on the source `input[type=color]`
     * @param type
     */


    var dispatch = function dispatch() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input';
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

    var popup = document.createElement('div');
    popup.classList.add(name);
    popups.set(source, popup);

    popup.remove = function () {
      dispatch('change');
      Element.prototype.remove.apply(popup);
    };

    var colorElm = append(popup, 'div');
    var hueElm = append(popup, 'div');
    var inputElm = append(popup, 'input');
    inputElm.value = source.value;
    var inputRElm = append(popup, 'input');
    var inputGElm = append(popup, 'input');
    var inputBElm = append(popup, 'input');
    var inputRGB = [inputRElm, inputGElm, inputBElm];
    inputRGB.forEach(function (elm) {
      elm.type = 'number';
      elm.min = 0;
      elm.max = 255;
    });
    body.appendChild(popup);
    var className = getClassName(source);
    popup.classList.add(className);
    var color = _color_js_abridged__WEBPACK_IMPORTED_MODULE_0___default()(inputElm.value);
    var hueColor = color.setSaturation(1).setLightness(0.5);
    var baseRule = ".".concat(name, ".").concat(className);
    var rulePicker = getRule("".concat(baseRule, " {}"));
    var ruleColorcolor = getRule("".concat(baseRule, ">div:first-child {}"));
    var ruleColor = getRule("".concat(baseRule, ">div:first-child:after {}"));
    var ruleHue = getRule("".concat(baseRule, ">div:first-child+div:after {}"));
    var ruleInput = getRule("".concat(baseRule, ">input {}"));
    var ruleNumber = getRule("".concat(baseRule, ">input[type=number] {}"));
    var ruleInputSelection = getRule("".concat(baseRule, ">input::selection {}"));
    colorElm.addEventListener('click', onClickColor);
    hueElm.addEventListener('click', onClickHue);
    colorElm.addEventListener('mousedown', function () {
      return html.addEventListener('mousemove', onClickColor);
    });
    html.addEventListener('mouseup', function () {
      return html.removeEventListener('mousemove', onClickColor);
    });
    colorElm.addEventListener('touchstart', function () {
      return html.addEventListener('touchmove', onClickColor);
    });
    html.addEventListener('touchend', function () {
      return html.removeEventListener('touchmove', onClickColor);
    });
    hueElm.addEventListener('mousedown', function () {
      return html.addEventListener('mousemove', onClickHue);
    });
    html.addEventListener('mouseup', function () {
      return html.removeEventListener('mousemove', onClickHue);
    });
    hueElm.addEventListener('touchstart', function () {
      return html.addEventListener('touchmove', onClickHue);
    });
    html.addEventListener('touchend', function () {
      return html.removeEventListener('touchmove', onClickHue);
    });
    inputElm.addEventListener('input', onHexInput);
    inputRGB.forEach(function (elm) {
      return elm.addEventListener('input', onRGBInput);
    });
    setColors();
    setInputHex();
    setInputRGB();
  }

  return popups.get(source);
}

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/less-loader/dist/cjs.js??ref--4-2!./styles.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
=======
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){if(void 0===r)var r={};r.brehaut||(r.brehaut={}),function(){"use strict";var t="(?:\\+|-)?\\d+",e="(?:\\+|-)?\\d*\\.\\d+",n="(?:"+t+")|(?:"+e+")";t="("+t+")",e="("+e+")";var i,o=(n="("+n+")")+"%",a=new RegExp(["^hsl(a?)\\(",n,",",o,",",o,"(,(",n,"))?\\)$"].join("\\s*?")),s=new RegExp(["^rgb(a?)\\(",t,",",t,",",t,"(,(",n,"))?\\)$"].join("\\s*?")),u=new RegExp(["^rgb(a?)\\(",o,",",o,",",o,"(,(",n,"))?\\)$"].join("\\s*?")),h=[],c={};this.object||(this.object=function(t){function e(){}return e.prototype=t,new e});var l=this.object;function f(t,e){t=t.toString();for(var n=[],r=0,i=Math.max(e-t.length,0);r<i;r++)n.push("0");return n.push(t),n.join("")}function p(t){return t.slice(0,1).toUpperCase()+t.slice(1)}function m(t){return t.replace(/^\s+|\s+$/g,"")}function d(t){return function(){var e=this.clone();return t.apply(e,arguments),e}}function v(t,e){var n=l(i),r=[],o="to"+p(t);function a(t){return function(){return t.apply(this[o](),arguments)}}for(var s in e)if(e.hasOwnProperty(s)){n[s]=e[s];var u=n[s];if("_"==s.slice(0,1))continue;if(s in i||"function"!=typeof u){if("function"!=typeof u){r.push(s);var f="get"+p(s),m="set"+p(s);i[f]=a(n[f]=function(t){return function(){return this[t]}}(s)),i[m]=a(n[m]=function(t){return function(e){var n=this.clone();return n[t]=e,n}}(s))}}else i[s]=a(u)}function d(){}function v(){return new d}return d.prototype=n,c[t]=v,n.clone=function(){for(var t=v(),e=0,n=r.length;e<n;e++){var i=r[e];t[i]=this[i]}return t},i[o]=function(){return v()},h.push(n),n}i={fromObject:function(t){if(!t)return l(i);for(var e=0,n=h.length;e<n;e++){var r=h[e].fromObject(t);if(r)return r}return l(i)},toString:function(){return this.toCSS()}};var g=null;function b(t){return i.fromObject(t)}v("RGB",{red:0,green:0,blue:0,alpha:0,getLuminance:function(){return.2126*this.red+.7152*this.green+.0722*this.blue},blend:function(t,e){t=t.toRGB(),e=Math.min(Math.max(e,0),1);var n=this.clone();return n.red=n.red*(1-e)+t.red*e,n.green=n.green*(1-e)+t.green*e,n.blue=n.blue*(1-e)+t.blue*e,n.alpha=n.alpha*(1-e)+t.alpha*e,n},fromObject:function(t){return t instanceof Array?this._fromRGBArray(t):"string"==typeof t?this._fromCSS(m(t)):t.hasOwnProperty("red")&&t.hasOwnProperty("green")&&t.hasOwnProperty("blue")?this._fromRGB(t):void 0},_stringParsers:[function(t){t=m(t);var e=n(s,255);return e||n(u,100);function n(e,n){var r=t.match(e);if(!r||!!r[1]+!!r[5]===1)return null;var i=c.RGB();return i.red=Math.min(1,Math.max(0,r[2]/n)),i.green=Math.min(1,Math.max(0,r[3]/n)),i.blue=Math.min(1,Math.max(0,r[4]/n)),i.alpha=r[5]?Math.min(Math.max(parseFloat(r[6]),0),1):1,i}},function(t){t.toLowerCase();if(t.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){var e=(t=t.replace(/^#/,"")).length/3,n=Math.pow(16,e)-1,r=c.RGB();return r.red=parseInt(t.slice(0,e),16)/n,r.green=parseInt(t.slice(1*e,2*e),16)/n,r.blue=parseInt(t.slice(2*e),16)/n,r.alpha=1,r}},function(t){if("transparent"===t.toLowerCase())return g}],_fromCSS:function(t){for(var e=null,n=0,r=this._stringParsers.length;n<r;n++)if(e=this._stringParsers[n](t))return e},_fromRGB:function(t){var e=c.RGB();return e.red=t.red,e.green=t.green,e.blue=t.blue,e.alpha=t.hasOwnProperty("alpha")?t.alpha:1,e},_fromRGBArray:function(t){var e=c.RGB();return e.red=Math.max(0,Math.min(1,t[0]/255)),e.green=Math.max(0,Math.min(1,t[1]/255)),e.blue=Math.max(0,Math.min(1,t[2]/255)),e.alpha=void 0!==t[3]?Math.max(0,Math.min(1,t[3])):1,e},toCSSHex:function(t){t=t||2;var e=Math.pow(16,t)-1;return["#",f(Math.round(this.red*e).toString(16).toUpperCase(),t),f(Math.round(this.green*e).toString(16).toUpperCase(),t),f(Math.round(this.blue*e).toString(16).toUpperCase(),t)].join("")},toCSS:function(t){if(1===this.alpha)return this.toCSSHex(t);return["rgba(",Math.max(0,Math.min(255,Math.round(255*this.red))),",",Math.max(0,Math.min(255,Math.round(255*this.green))),",",Math.max(0,Math.min(255,Math.round(255*this.blue))),",",Math.max(0,Math.min(1,this.alpha)),")"].join("")},toHSV:function(){var t,e,n,r=c.HSV();return t=Math.min(this.red,this.green,this.blue),e=Math.max(this.red,this.green,this.blue),r.value=e,0==(n=e-t)?r.hue=r.saturation=0:(r.saturation=n/e,this.red==e?r.hue=(this.green-this.blue)/n:this.green==e?r.hue=2+(this.blue-this.red)/n:r.hue=4+(this.red-this.green)/n,r.hue=(60*r.hue+360)%360),r.alpha=this.alpha,r},toHSL:function(){return this.toHSV().toHSL()},toRGB:function(){return this.clone()}}),g=i.fromObject({red:0,blue:0,green:0,alpha:0}),v("HSV",{hue:0,saturation:0,value:1,alpha:1,shiftHue:d((function(t){var e=(this.hue+t)%360;e<0&&(e=(360+e)%360),this.hue=e})),devalueByAmount:d((function(t){this.value=Math.min(1,Math.max(this.value-t,0))})),devalueByRatio:d((function(t){this.value=Math.min(1,Math.max(this.value*(1-t),0))})),valueByAmount:d((function(t){this.value=Math.min(1,Math.max(this.value+t,0))})),valueByRatio:d((function(t){this.value=Math.min(1,Math.max(this.value*(1+t),0))})),desaturateByAmount:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation-t,0))})),desaturateByRatio:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation*(1-t),0))})),saturateByAmount:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation+t,0))})),saturateByRatio:d((function(t){this.saturation=Math.min(1,Math.max(this.saturation*(1+t),0))})),schemeFromDegrees:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=this.clone();i.hue=(this.hue+t[n])%360,e.push(i)}return e},complementaryScheme:function(){return this.schemeFromDegrees([0,180])},splitComplementaryScheme:function(){return this.schemeFromDegrees([0,150,320])},splitComplementaryCWScheme:function(){return this.schemeFromDegrees([0,150,300])},splitComplementaryCCWScheme:function(){return this.schemeFromDegrees([0,60,210])},triadicScheme:function(){return this.schemeFromDegrees([0,120,240])},clashScheme:function(){return this.schemeFromDegrees([0,90,270])},tetradicScheme:function(){return this.schemeFromDegrees([0,90,180,270])},fourToneCWScheme:function(){return this.schemeFromDegrees([0,60,180,240])},fourToneCCWScheme:function(){return this.schemeFromDegrees([0,120,180,300])},fiveToneAScheme:function(){return this.schemeFromDegrees([0,115,155,205,245])},fiveToneBScheme:function(){return this.schemeFromDegrees([0,40,90,130,245])},fiveToneCScheme:function(){return this.schemeFromDegrees([0,50,90,205,320])},fiveToneDScheme:function(){return this.schemeFromDegrees([0,40,155,270,310])},fiveToneEScheme:function(){return this.schemeFromDegrees([0,115,230,270,320])},sixToneCWScheme:function(){return this.schemeFromDegrees([0,30,120,150,240,270])},sixToneCCWScheme:function(){return this.schemeFromDegrees([0,90,120,210,240,330])},neutralScheme:function(){return this.schemeFromDegrees([0,15,30,45,60,75])},analogousScheme:function(){return this.schemeFromDegrees([0,30,60,90,120,150])},fromObject:function(t){if(t.hasOwnProperty("hue")&&t.hasOwnProperty("saturation")&&t.hasOwnProperty("value")){var e=c.HSV();return e.hue=t.hue,e.saturation=t.saturation,e.value=t.value,e.alpha=t.hasOwnProperty("alpha")?t.alpha:1,e}return null},_normalise:function(){this.hue%=360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.value=Math.min(Math.max(0,this.value)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toRGB:function(){this._normalise();var t,e,n,r,i,o=c.RGB();if(0===this.saturation)return o.red=this.value,o.green=this.value,o.blue=this.value,o.alpha=this.alpha,o;var a=this.hue/60;switch(e=a-(t=Math.floor(a)),n=this.value*(1-this.saturation),r=this.value*(1-this.saturation*e),i=this.value*(1-this.saturation*(1-e)),t){case 0:o.red=this.value,o.green=i,o.blue=n;break;case 1:o.red=r,o.green=this.value,o.blue=n;break;case 2:o.red=n,o.green=this.value,o.blue=i;break;case 3:o.red=n,o.green=r,o.blue=this.value;break;case 4:o.red=i,o.green=n,o.blue=this.value;break;default:o.red=this.value,o.green=n,o.blue=r}return o.alpha=this.alpha,o},toHSL:function(){this._normalise();var t=c.HSL();t.hue=this.hue;var e=(2-this.saturation)*this.value,n=this.saturation*this.value;return e&&2-e&&(n/=e<=1?e:2-e),e/=2,t.saturation=n,t.lightness=e,t.alpha=this.alpha,t},toHSV:function(){return this.clone()}}),v("HSL",{hue:0,saturation:0,lightness:0,alpha:1,darkenByAmount:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness-t,0))})),darkenByRatio:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness*(1-t),0))})),lightenByAmount:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness+t,0))})),lightenByRatio:d((function(t){this.lightness=Math.min(1,Math.max(this.lightness*(1+t),0))})),fromObject:function(t){return"string"==typeof t?this._fromCSS(t):t.hasOwnProperty("hue")&&t.hasOwnProperty("saturation")&&t.hasOwnProperty("lightness")?this._fromHSL(t):void 0},_fromCSS:function(t){var e=m(t).match(a);if(!e||!!e[1]+!!e[5]===1)return null;var n=c.HSL();return n.hue=(e[2]%360+360)%360,n.saturation=Math.max(0,Math.min(parseInt(e[3],10)/100,1)),n.lightness=Math.max(0,Math.min(parseInt(e[4],10)/100,1)),n.alpha=e[5]?Math.max(0,Math.min(1,parseFloat(e[6]))):1,n},_fromHSL:function(t){var e=c.HSL();return e.hue=t.hue,e.saturation=t.saturation,e.lightness=t.lightness,e.alpha=t.hasOwnProperty("alpha")?t.alpha:1,e},_normalise:function(){this.hue=(this.hue%360+360)%360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.lightness=Math.min(Math.max(0,this.lightness)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toHSL:function(){return this.clone()},toHSV:function(){this._normalise();var t=c.HSV();t.hue=this.hue;var e=2*this.lightness,n=this.saturation*(e<=1?e:2-e);return t.value=(e+n)/2,t.saturation=2*n/(e+n)||0,t.alpha=this.alpha,t},toRGB:function(){return this.toHSV().toRGB()}}),b.isValid=function(t){var e,n=b(t),r=0;for(e in n)n.hasOwnProperty(e)&&r++;return r>0},r.brehaut.Color=b}.call(r.brehaut),t.exports=r.brehaut.Color},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);n(2);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a="mcpicker",s=document,u=s.body,h=s.documentElement;u.appendChild(document.createElement("style"));var c=document.styleSheets[document.styleSheets.length-1],l=new Map,f="px",p="auto";function m(t){o(l.values()).forEach((function(e){return e!==t&&e.remove()}))}document.addEventListener("click",(function(t){var e=t.target;if(e.matches("input[type=color]")){t.preventDefault();var n=function(t){var e=l.get(t),n=!!e,r=!!(null==e?void 0:e.parentNode);if(n&&r)e.remove();else if(n&&!r)u.appendChild(e);else{var o=function(t,e){var n=document.createElement(e);return t.appendChild(n),n},s=function(t){return c.insertRule(t,0),c.rules[0]},f=function(t){var e,n=E.getBoundingClientRect(),r=(null===(e=t.touches)||void 0===e?void 0:e[0])||t,i=r.clientX-n.left,o=r.clientY-n.top,a=d(i/n.width),s=d(1-o/n.height);H=H.setSaturation(a).setValue(s),g(),y(),M(),S(),x()},p=function(t){var e,n=k.getBoundingClientRect(),r=((null===(e=t.touches)||void 0===e?void 0:e[0])||t).clientX-n.left,i=360*d(r/n.width);H=H.setHue(i),_=_.setHue(i),b(),v(),y(),M(),S(),x()},m=function(){H=i()().fromObject(F.map((function(t){return t.value}))),_=H.setSaturation(1).setLightness(.5),L(),M(),x()},d=function(t){return Math.min(Math.max(t,0),1)},v=function(){T.style.background="linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, ".concat(_.toString(),", white)")},g=function(){var t=H.getSaturation(),e=H.getValue();P.style.left="".concat((100*t).toFixed(2),"%"),P.style.bottom="".concat((100*e).toFixed(2),"%")},b=function(){var t=H.getHue()/360;G.style.left="".concat((100*t).toFixed(2),"%")},y=function(){var t=H.getLuminance()>.5;U.style.backgroundColor=H.toString(),I.style.color=t?"#000":"#FFF",V.style.backgroundColor=t?H.lightenByAmount(.6).toString():H.darkenByAmount(.4).toString()},M=function(){R.value=H.toCSS()},S=function(){O.value=Math.round(255*H.getRed()),j.value=Math.round(255*H.getGreen()),B.value=Math.round(255*H.getBlue())},x=function(){t.value=H.toCSS(),w()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"input",n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)},L=function(){b(),v(),g(),y()},C=document.createElement("div");C.classList.add(a),l.set(t,C),C.remove=function(){w("change"),Element.prototype.remove.apply(C)};var E=o(C,"div"),k=o(C,"div"),R=o(C,"input");R.value=t.value;var O=o(C,"input"),j=o(C,"input"),B=o(C,"input"),F=[O,j,B];F.forEach((function(t){t.type="number",t.min=0,t.max=255})),u.appendChild(C);var A=function(t){var e=t.name||t.id||Math.round(Date.now()+1e3*Math.random()).toString(16);return"".concat(a,"_").concat(e)}(t);C.classList.add(A);var H=i()(R.value),_=H.setSaturation(1).setLightness(.5),D=".".concat(a,".").concat(A),U=s("".concat(D," {}")),T=s("".concat(D,">div:first-child {}")),P=s("".concat(D,">div:first-child:after {}")),G=s("".concat(D,">div:first-child+div:after {}")),I=s("".concat(D,">input {}")),V=s("".concat(D,">input::selection {}"));E.addEventListener("click",f),k.addEventListener("click",p),E.addEventListener("mousedown",(function(){return h.addEventListener("mousemove",f)})),h.addEventListener("mouseup",(function(){return h.removeEventListener("mousemove",f)})),E.addEventListener("touchstart",(function(){return h.addEventListener("touchmove",f)})),h.addEventListener("touchend",(function(){return h.removeEventListener("touchmove",f)})),k.addEventListener("mousedown",(function(){return h.addEventListener("mousemove",p)})),h.addEventListener("mouseup",(function(){return h.removeEventListener("mousemove",p)})),k.addEventListener("touchstart",(function(){return h.addEventListener("touchmove",p)})),h.addEventListener("touchend",(function(){return h.removeEventListener("touchmove",p)})),R.addEventListener("input",(function(){H=i()(R.value),_=H.setSaturation(1).setLightness(.5),L(),S(),x()})),F.forEach((function(t){return t.addEventListener("input",m)})),L(),M(),S()}return l.get(t)}(e);m(n);var r=e.getBoundingClientRect(),o=r.right,s=r.bottom,d=r.top,v=t.clientX,g=t.clientY,b=document.documentElement,y=b.scrollTop,M=b.clientWidth,S=b.clientHeight,x=g/S;v/M<.5?(n.style.left=r.left+f,n.style.right=p):(n.style.left=p,n.style.right=M-o+f),x<.5?(n.style.top=s+y+f,n.style.bottom=p):(n.style.top=p,n.style.bottom=S-d-y+f)}else{var w=e.closest(".".concat(a));!(null==w?void 0:w.contains(e))&&m()}}))},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".mcpicker {\n  position: absolute;\n  width: 14rem;\n  height: 8rem;\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  box-shadow: 0 0 0 1px white, 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.mcpicker > div:first-child {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 2rem);\n  user-select: none;\n  background: linear-gradient(to top, black, rgba(0, 0, 0, 0)), linear-gradient(to left, red, white);\n}\n.mcpicker > div:first-child:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  transform: translate(-50%, 50%);\n  pointer-events: none;\n}\n.mcpicker > div:first-child + div {\n  position: relative;\n  height: 1rem;\n  user-select: none;\n  background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n}\n.mcpicker > div:first-child + div:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 3px;\n  transform: translateX(-2px);\n  height: inherit;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  pointer-events: none;\n}\n.mcpicker input {\n  width: 40%;\n  height: 1rem;\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0.125rem 0.25rem;\n  border: 0;\n  box-sizing: border-box;\n  outline: none;\n  box-shadow: none;\n  background-color: transparent;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-family: monospace;\n  font-weight: 600;\n  text-align: center;\n}\n.mcpicker input::-webkit-outer-spin-button,\n.mcpicker input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mcpicker input[type=number] {\n  -moz-appearance: textfield;\n}\n.mcpicker input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input + input {\n  width: 20%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},u=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=s.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),h=null,c=0,l=[],f=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function m(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=u(t.insertAt.before,n);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=c++;n=h||(h=g(e)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),r=L.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=w.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&p(m(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}};var M,S=(M=[],function(t,e){return M[t]=e,M.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=S(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function w(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function L(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=f(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}]);
>>>>>>> 3bebbcaaf16f8f39480a85aa682f5730f6dd7940
//# sourceMappingURL=index.js.map