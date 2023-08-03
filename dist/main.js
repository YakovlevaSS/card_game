/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./component/renderPlayingField.js":
/*!*****************************************!*\
  !*** ./component/renderPlayingField.js ***!
  \*****************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Assigning to rvalue (35:12)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|         coverCard.addEventListener('click', () => {\\n|             let sortCardArray = cardArray.sort(() =>random() - 0.5 );\\n>             document.getElementById('suits') = `${sortCardArray.slice(0, level)}`;\\n|             // let arr = [1, 2, 3];\\n|             // console.log(arr);\");\n\n//# sourceURL=webpack://card_game/./component/renderPlayingField.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_renderPlayingField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/renderPlayingField.js */ \"./component/renderPlayingField.js\");\n\nfunction renderChoicePage() {\n    let appEl = document.querySelector('.app')\n    const appHtml = `\n    <div class=\"wrap center\">\n    <form class=\"choice\" id=\"form\" method = \"POST\" action = \"#\">\n        <h2 class=\"choice__title\">\n            Выбери<br>сложность\n        </h2>\n        <div class=\"choice__items-wrap\">\n\n            <input class=\"choice__item\" type=\"radio\" id=\"radio1\" name=\"radios\" value=\"6\" checked>\n            <label for=\"radio1\">1</label>\n\n            <input class=\"choice__item\" type=\"radio\" id=\"radio2\" name=\"radios\" value=\"12\">\n            <label for=\"radio2\">2</label>\n\n            <input class=\"choice__item\" type=\"radio\" id=\"radio3\" name=\"radios\" value=\"18\">\n            <label for=\"radio3\">3</label>\n        </div>\n        <button class=\"button choice__button\" type=\"submit\">\n            Старт\n        </button>\n    </form>\n    </div>`\n    appEl.innerHTML = appHtml\n    const form = document.getElementById('form')\n    form.addEventListener('submit', (element) => {\n        element.preventDefault()\n\n        let levelPoints = document.querySelectorAll('.choice__item')\n\n        for (const levelPoint of levelPoints) {\n            if (levelPoint.checked) {\n                console.log(levelPoint.value)\n                ;(0,_component_renderPlayingField_js__WEBPACK_IMPORTED_MODULE_0__.renderPlayingField)(levelPoint, appEl)\n            }\n        }\n    })\n}\nrenderChoicePage()\n\n\n//# sourceURL=webpack://card_game/./index.js?");

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