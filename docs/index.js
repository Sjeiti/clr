!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".mcpicker {\n  position: absolute;\n  width: 14rem;\n  height: 8rem;\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  box-shadow: 0 0 0 1px white, 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.mcpicker > div:first-child {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 2rem);\n  user-select: none;\n  background: linear-gradient(to top, black, rgba(0, 0, 0, 0)), linear-gradient(to left, red, white);\n}\n.mcpicker > div:first-child:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  transform: translate(-50%, 50%);\n  pointer-events: none;\n}\n.mcpicker > div:first-child + div {\n  position: relative;\n  height: 1rem;\n  user-select: none;\n  background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n}\n.mcpicker > div:first-child + div:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 3px;\n  transform: translateX(-2px);\n  height: inherit;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  pointer-events: none;\n}\n.mcpicker input {\n  width: 40%;\n  height: 1rem;\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0.125rem 0.25rem;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  outline: none;\n  box-shadow: none;\n  background-color: transparent;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-family: monospace;\n  font-weight: 600;\n  text-align: center;\n}\n.mcpicker input::-webkit-outer-spin-button,\n.mcpicker input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mcpicker input[type=number] {\n  -moz-appearance: textfield;\n  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.5) inset;\n}\n.mcpicker input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input + input {\n  width: 20%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t,e){return e?e.querySelector(t):document.querySelector(t)},u=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=c.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,l=0,f=[],p=n(4);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function v(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=s||(s=b(e)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),r=S.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=E.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}t&&d(h(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function k(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function E(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function S(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";n.r(e);n(0);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(){var t,e,n,a,u,s,l,f,p=arguments.length,d=Array.prototype.slice.call(arguments),h=d[0],v=d[1],m=d[2],b=Object.create({setRGB:function(r,i,c){var f=o(function(t,e,n){var r,o,i=t/255,a=e/255,c=n/255,u=Math.max(i,a,c),s=Math.min(i,a,c),l=(u+s)/2;if(u===s)r=o=0;else{var f=u-s;switch(o=l>.5?f/(2-u-s):f/(u+s),u){case i:r=(a-c)/f+(a<c?6:0);break;case a:r=(c-i)/f+2;break;case c:r=(i-a)/f+4}r/=6}return[r,o,l]}(r,i,c),3),p=f[0],d=f[1],h=f[2],v=function(t,e,n){var r,o,i=t/255,a=e/255,c=n/255,u=Math.max(i,a,c),s=Math.min(i,a,c),l=u,f=u-s;if(o=0===u?0:f/u,u===s)r=0;else{switch(u){case i:r=(a-c)/f+(a<c?6:0);break;case a:r=(c-i)/f+2;break;case c:r=(i-a)/f+4}r/=6}return[r,o,l]}(r,i,c)[2];return t=p,e=d,n=h,a=v,u=r,s=i,l=c,this},setSL:function(r,i){var a=o(c(t,r,i),3),f=a[0],p=a[1],d=a[2];return e=r,n=i,u=f,s=p,l=d,this},setH:function(r){var i=o(c(r,e,n),3),a=i[0],f=i[1],p=i[2];return t=r,u=a,s=f,l=p,this},setSV:function(n,r){var i=o(function(t,e,n){var r,o,i,a=Math.floor(6*t),c=6*t-a,u=n*(1-e),s=n*(1-c*e),l=n*(1-(1-c)*e);switch(a%6){case 0:r=n,o=l,i=u;break;case 1:r=s,o=n,i=u;break;case 2:r=u,o=n,i=l;break;case 3:r=u,o=s,i=n;break;case 4:r=l,o=u,i=n;break;case 5:r=n,o=u,i=s}return[r,o,i].map((function(t){return Math.floor(255*t)}))}(t,n,r),3),c=i[0],f=i[1],p=i[2];return e=n,a=r,u=c,s=f,l=p,this},clone:function(){return i(u,s,l)}},{h:{get:function(){return t}},s:{get:function(){return e}},l:{get:function(){return n}},v:{get:function(){return a}},r:{get:function(){return u}},g:{get:function(){return s}},b:{get:function(){return l}},hex:{get:function(){return function(t,e,n){return"#"+((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1).toUpperCase()}(u,s,l)}},luminance:{get:function(){return(.375*u+.5*s+.125*l)/255}}});return 1===p&&"string"==typeof h?b.setRGB.apply(b,r((f=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h))&&f.splice(1).map((function(t){return parseInt(t,16)})))):3===p&&"number"==typeof h&&b.setRGB(h,v,m),b}function a(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function c(t,e,n){var r,o,i;if(0===e)r=o=i=n;else{var c=n<.5?n*(1+e):n+e-n*e,u=2*n-c;r=a(u,c,t+1/3),o=a(u,c,t),i=a(u,c,t-1/3)}return[r,o,i].map((function(t){return Math.floor(255*t)}))}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l="mcpicker",f=document,p=f.body,d=f.documentElement;p.appendChild(document.createElement("style"));var h=document.styleSheets[document.styleSheets.length-1],v=new Map,m="px",b="auto",y="click",g="mousedown",w="mouseup",x="mousemove",k="touchstart",E="touchend",S="touchmove",j="change",L="div",A="input";function M(t){s(v.values()).forEach((function(e){return e!==t&&e.remove()}))}document.addEventListener(y,(function(t){var e=t.target;if(e.matches("input[type=color]")){t.preventDefault();var n=function(t){var e=v.get(t),n=!!e,r=!!(null==e?void 0:e.parentNode);if(n&&r)e.remove();else if(n&&!r)p.appendChild(e);else{var o=function(t,e){var n=document.createElement(e);return t.appendChild(n),n},a=function(t){return h.insertRule(t,0),h.rules[0]},c=function(t){var e,n=H.getBoundingClientRect(),r=(null===(e=t.touches)||void 0===e?void 0:e[0])||t,o=r.clientX-n.left,i=r.clientY-n.top,a=b(o/n.width),c=b(1-i/n.height);q.setSV(a,c),O(),C(),U(),F(),T()},f=function(t){var e,n=_.getBoundingClientRect(),r=((null===(e=t.touches)||void 0===e?void 0:e[0])||t).clientX-n.left,o=b(r/n.width);q.setH(o),J.setH(o),R(),M(),C(),U(),F(),T()},m=function(){var t;(t=q).setRGB.apply(t,s(z.map((function(t){return parseInt(t.value,10)})))),J=q.clone().setSL(1,.5),I(),U(),T()},b=function(t){return Math.min(Math.max(t,0),1)},M=function(){W.style.background="linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, ".concat(J.hex,", white)")},O=function(){var t=q.s,e=q.v;K.style.left="".concat((100*t).toFixed(2),"%"),K.style.bottom="".concat((100*e).toFixed(2),"%")},R=function(){var t=q.h;Q.style.left="".concat((100*t).toFixed(2),"%")},C=function(){var t=q.luminance>.5;Y.style.backgroundColor=q.hex,Z.style.color=t?"#000":"#FFF",tt.style.boxShadow="1px 0 0 rgba(".concat(t?"0,0,0,0.3":"255,255,255,0.5",") inset");var e=q,n=e.r,r=e.g,o=e.b;et.style.backgroundColor=i(255-o,255-n,255-r).hex},U=function(){D.value=q.hex},F=function(){G.value=Math.round(q.r),P.value=Math.round(q.g),$.value=Math.round(q.b)},T=function(){t.value=q.hex,B()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)},I=function(){R(),M(),O(),C()},N=document.createElement(L);N.classList.add(l),v.set(t,N),N.remove=function(){B(j),Element.prototype.remove.apply(N)};var H=o(N,L),_=o(N,L),D=o(N,A);D.value=t.value;var G=o(N,A),P=o(N,A),$=o(N,A),z=[G,P,$];z.forEach((function(t){t.type="number",t.min=0,t.max=255})),p.appendChild(N);var X=function(t){var e=t.name||t.id||Math.round(Date.now()+1e3*Math.random()).toString(16);return"".concat(l,"_").concat(e)}(t);N.classList.add(X);var q=i(D.value),J=q.clone().setSL(1,.5),V=".".concat(l,".").concat(X),Y=a("".concat(V," {}")),W=a("".concat(V,">div:first-child {}")),K=a("".concat(V,">div:first-child:after {}")),Q=a("".concat(V,">div:first-child+div:after {}")),Z=a("".concat(V,">input {}")),tt=a("".concat(V,">input[type=number] {}")),et=a("".concat(V,">input::selection {}"));H.addEventListener(y,c),_.addEventListener(y,f);var nt=[[g,w,x],[k,E,S]];[[H,c],[_,f]].forEach((function(t){var e=u(t,2),n=e[0],r=e[1];nt.forEach((function(t){var e=u(t,3),o=e[0],i=e[1],a=e[2];n.addEventListener(o,(function(t){d.addEventListener(a,r),t.preventDefault()})),d.addEventListener(i,(function(){return d.removeEventListener(a,r)}))}))})),D.addEventListener(A,(function(){q=i(D.value),J=q.clone().setSL(1,.5),I(),F(),T()})),z.forEach((function(t){return t.addEventListener(A,m)})),I(),U(),F()}return v.get(t)}(e);M(n);var r=e.getBoundingClientRect(),o=r.right,a=r.bottom,c=r.top,f=t.clientX,O=t.clientY,R=document.documentElement,C=R.scrollTop,U=R.clientWidth,F=R.clientHeight,T=O/F;f/U<.5?(n.style.left=r.left+m,n.style.right=b):(n.style.left=b,n.style.right=U-o+m),T<.5?(n.style.top=a+C+m,n.style.bottom=b):(n.style.top=b,n.style.bottom=F-c-C+m)}else{var B=e.closest(".".concat(l));!(null==B?void 0:B.contains(e))&&M()}}))}]);
//# sourceMappingURL=index.js.map