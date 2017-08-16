(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var template = (html, css) => {
  return `\
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Svelte Static Site Example</title>
<link rel="stylesheet" type="text/css" href="/main.css"/>
<style>
${css}
</style>
</head>
<body>
${html}
<script src='/main.js'></script>
</body>
</html>
`;
};

// This is required so that ExtractTextPlugin can find main.css.
var css = __webpack_require__(1);

var hello = __webpack_require__(2);

module.exports = function render(path, props, callback) {
  var html = hello.default.render();
  var style = hello.default.renderCss();
  console.log(style.components);
  callback(template(html, style.css));
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var template = function () {
	return {};
}();

var Hello = {};

Hello.filename = "/Users/lasersox/Desktop/svelte-static-site-example/src/components/Hello.html";

Hello.data = function () {
	return {};
};

Hello.render = function (state, options) {
	state = state || {};

	return `<p svelte-2038040882>Below this you should see "hello" in red:</p>
<p id="hello" svelte-2038040882></p>



`.trim();
};

Hello.renderCss = function () {
	var components = [];

	components.push({
		filename: Hello.filename,
		css: "[svelte-2038040882]#hello,[svelte-2038040882] #hello{color:#F00}",
		map: "{\"version\":3,\"file\":\"Hello.html\",\"sources\":[\"Hello.html\"],\"sourcesContent\":[\"<p>Below this you should see \\\"hello\\\" in red:</p>\\n<p id=\\\"hello\\\"></p>\\n\\n<style type=\\\"text/css\\\">\\n#hello { color: #F00; }\\n</style>\\n\\n<script>\\nexport default {\\n  oncreate () {\\n    document.getElementById(\\\"hello\\\").innerText = \\\"Hello\\\"\\n  },\\n}\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAIA,oDAAO,CAAC,AAAC,KAAK,CAAE,IAAI,AAAE,CAAC\"}"
	});

	return {
		css: components.map(x => x.css).join('\n'),
		map: null,
		components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3OWJiZmFkYWFkODAzZmU0MDU2MiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVsbG8uaHRtbCJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImh0bWwiLCJjc3MiLCJyZXF1aXJlIiwiaGVsbG8iLCJtb2R1bGUiLCJleHBvcnRzIiwicmVuZGVyIiwicGF0aCIsInByb3BzIiwiY2FsbGJhY2siLCJkZWZhdWx0Iiwic3R5bGUiLCJyZW5kZXJDc3MiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxJQUFJQSxXQUFXLENBQUNDLElBQUQsRUFBT0MsR0FBUCxLQUFlO0FBQzVCLFNBQVE7Ozs7Ozs7Ozs7RUFVUkEsR0FBSTs7OztFQUlKRCxJQUFLOzs7O0NBZEw7QUFtQkQsQ0FwQkQ7O0FBc0JBO0FBQ0EsSUFBSUMsTUFBTSxtQkFBQUMsQ0FBUSxDQUFSLENBQVY7O0FBRUEsSUFBSUMsUUFBUSxtQkFBQUQsQ0FBUSxDQUFSLENBQVo7O0FBRUFFLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCQyxRQUE3QixFQUF1QztBQUN0RCxNQUFJVCxPQUFPRyxNQUFNTyxPQUFOLENBQWNKLE1BQWQsRUFBWDtBQUNBLE1BQUlLLFFBQVFSLE1BQU1PLE9BQU4sQ0FBY0UsU0FBZCxFQUFaO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWUgsTUFBTUksVUFBbEI7QUFDQU4sV0FBU1YsU0FBU0MsSUFBVCxFQUFlVyxNQUFNVixHQUFyQixDQUFUO0FBQ0QsQ0FMRCxDOzs7Ozs7QUMzQkEseUM7Ozs7Ozs7OzJCQ09RO0FBQ1IsUUFLQSIsImZpbGUiOiJzdGF0aWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc5YmJmYWRhYWQ4MDNmZTQwNTYyIiwidmFyIHRlbXBsYXRlID0gKGh0bWwsIGNzcykgPT4ge1xuICByZXR1cm4gYFxcXG48IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9J2VuJz5cbjxoZWFkPlxuPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG48bWV0YSBodHRwLWVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIj5cbjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxuPHRpdGxlPlN2ZWx0ZSBTdGF0aWMgU2l0ZSBFeGFtcGxlPC90aXRsZT5cbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL21haW4uY3NzXCIvPlxuPHN0eWxlPlxuJHtjc3N9XG48L3N0eWxlPlxuPC9oZWFkPlxuPGJvZHk+XG4ke2h0bWx9XG48c2NyaXB0IHNyYz0nL21haW4uanMnPjwvc2NyaXB0PlxuPC9ib2R5PlxuPC9odG1sPlxuYFxufVxuXG4vLyBUaGlzIGlzIHJlcXVpcmVkIHNvIHRoYXQgRXh0cmFjdFRleHRQbHVnaW4gY2FuIGZpbmQgbWFpbi5jc3MuXG52YXIgY3NzID0gcmVxdWlyZShcIi4uL2Nzcy9tYWluLmNzc1wiKTtcblxudmFyIGhlbGxvID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvSGVsbG8uaHRtbFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbmRlcihwYXRoLCBwcm9wcywgY2FsbGJhY2spIHtcbiAgdmFyIGh0bWwgPSBoZWxsby5kZWZhdWx0LnJlbmRlcigpXG4gIHZhciBzdHlsZSA9IGhlbGxvLmRlZmF1bHQucmVuZGVyQ3NzKClcbiAgY29uc29sZS5sb2coc3R5bGUuY29tcG9uZW50cylcbiAgY2FsbGJhY2sodGVtcGxhdGUoaHRtbCwgc3R5bGUuY3NzKSlcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjxwPkJlbG93IHRoaXMgeW91IHNob3VsZCBzZWUgXCJoZWxsb1wiIGluIHJlZDo8L3A+XG48cCBpZD1cImhlbGxvXCI+PC9wPlxuXG48c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4jaGVsbG8geyBjb2xvcjogI0YwMDsgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25jcmVhdGUgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVsbG9cIikuaW5uZXJUZXh0ID0gXCJIZWxsb1wiXG4gIH0sXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbGxvLmh0bWwiXSwic291cmNlUm9vdCI6IiJ9