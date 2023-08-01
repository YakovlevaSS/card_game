/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./component/renderPlayingField.js":
/*!*****************************************!*\
  !*** ./component/renderPlayingField.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPlayingField: () => (/* binding */ renderPlayingField)\n/* harmony export */ });\nfunction renderPlayingField(levelPoint, appEl) {\r\n    const appHtml = `\r\n    <div class=\"wrap\">\r\n    <div class=\"game-field\">\r\n    <h2 class=\"game-field__title\">${levelPoint.value} карточек\r\n    </h2>\r\n    </div>\r\n    </div>`;\r\n    appEl.innerHTML = appHtml;\r\n}\n\n//# sourceURL=webpack://card_game/./component/renderPlayingField.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_renderPlayingField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/renderPlayingField.js */ \"./component/renderPlayingField.js\");\n\r\nfunction renderChoicePage() {\r\n    let appEl = document.querySelector(\".app\");\r\n    const appHtml = `\r\n    <div class=\"wrap center\">\r\n    <form class=\"choice\" id=\"form\" method = \"POST\" action = \"#\">\r\n        <h2 class=\"choice__title\">\r\n            Выбери<br>сложность\r\n        </h2>\r\n        <div class=\"choice__items-wrap\">\r\n\r\n            <input class=\"choice__item\" type=\"radio\" id=\"radio1\" name=\"radios\" value=\"6\" checked>\r\n            <label for=\"radio1\">1</label>\r\n\r\n            <input class=\"choice__item\" type=\"radio\" id=\"radio2\" name=\"radios\" value=\"12\">\r\n            <label for=\"radio2\">2</label>\r\n\r\n            <input class=\"choice__item\" type=\"radio\" id=\"radio3\" name=\"radios\" value=\"18\">\r\n            <label for=\"radio3\">3</label>\r\n        </div>\r\n        <button class=\"button choice__button\" type=\"submit\">\r\n            Старт\r\n        </button>\r\n    </form>\r\n    </div>`;\r\n    appEl.innerHTML = appHtml;\r\n    const form = document.getElementById(\"form\");\r\n    form.addEventListener(\"submit\", (element) => {\r\n        element.preventDefault();\r\n\r\n        let levelPoints = document.querySelectorAll(\".choice__item\")\r\n\r\n        for (const levelPoint of levelPoints) {\r\n            if (levelPoint.checked) {\r\n                console.log(levelPoint.value);\r\n                (0,_component_renderPlayingField_js__WEBPACK_IMPORTED_MODULE_0__.renderPlayingField)(levelPoint, appEl)\r\n            };\r\n        }\r\n    })\r\n}\r\nrenderChoicePage();\n\n//# sourceURL=webpack://card_game/./index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;