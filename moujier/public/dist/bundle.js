!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t,e){n.exports=e.p+"images/2b76b82a3e1bafd9f24e7aad4ab1db08.jpg"},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){n.exports=e(8)},function(n,t,e){var r=e(4);(n.exports=e(5)(!1)).push([n.i,"/*清除浏览器默认样式*/\nbody {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n  color: #000;\n}\nimg {\n  border: 0;\n}\n/*网页布局样式*/\nbody {\n  min-width: 600px;\n  background-color: #f5f5f5;\n  /*公共样式*/\n  /*网页头部*/\n}\nbody .container {\n  width: 80%;\n  margin: 0 auto;\n}\nbody header {\n  padding: 40px 20px;\n  color: #FFF;\n  display: flex;\n  background: url("+r(e(0))+") 0 0 no-repeat;\n  background-size: 100% 100%;\n  margin-bottom: 20px;\n}\nbody header h1 a {\n  color: #FFF;\n}\nbody header p {\n  margin: 40px 0 0 20px;\n}\nbody nav {\n  background: #f5f5f5;\n}\nbody nav a {\n  display: inline-block;\n  border: 3px solid darkcyan;\n  padding: 10px;\n  border-bottom: 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: darkcyan;\n  margin-right: 1px;\n}\nbody nav a.active {\n  background: darkcyan;\n  color: #FFF;\n}\nbody main {\n  border-top: 5px solid darkcyan;\n}\nbody main .content {\n  display: flex;\n  justify-content: space-between;\n}\nbody main .content section {\n  width: 75%;\n}\nbody main .content section .item {\n  height: 150px;\n  border-bottom: 1px solid #ddd;\n  padding: 20px;\n}\nbody main .content section .item h3 {\n  color: darkcyan;\n  margin: 10px 0 5px 0;\n}\nbody main .content section .item time {\n  color: #CCC;\n}\nbody main .content section .item > div {\n  margin-top: 10px;\n  color: #666;\n}\nbody main .content aside {\n  width: 20%;\n}\nbody main .content aside .aside-ad {\n  width: 80%;\n  height: 200px;\n  border: 1px solid #CCC;\n  margin-bottom: 20px;\n  color: #666;\n  padding: 10px;\n}\nbody footer {\n  background: #eee;\n  margin-top: 20px;\n  height: 100px;\n  padding: 20px 0;\n  text-align: center;\n}\nbody footer .foot-list a {\n  color: #999;\n  margin-right: 20px;\n}\nbody footer .website-info {\n  color: #aaa;\n  font-size: 14px;\n}\n@media screen and (max-width: 850px) {\n  body .container {\n    width: 90%;\n  }\n  body header {\n    flex-direction: column;\n  }\n  body header h1 {\n    margin-bottom: 10px;\n  }\n  body header p {\n    margin: 0;\n  }\n  body nav a {\n    margin-right: 0;\n    margin-left: 1px;\n  }\n  body aside {\n    display: none;\n  }\n  body main .content section {\n    width: 100%;\n  }\n}\n",""])},function(n,t){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,d=0,f=[],u=e(7);function l(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function b(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),f.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=f.indexOf(n);t>=0&&f.splice(t,1)}function y(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return m(t,n.attrs),b(n,t),t}function m(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function g(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=d++;e=c||(c=y(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(t,n.attrs),b(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=y(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){h(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return l(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&l(p(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,x=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){"use strict";e.r(t);var r=e(1),o=e.n(r);e(0);console.log("测试webpack连接, 改变了！"),console.log("aaa"),console.log(o.a)}]);