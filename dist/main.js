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

/***/ "./component/cardArray.js":
/*!********************************!*\
  !*** ./component/cardArray.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardArray: () => (/* binding */ cardArray)\n/* harmony export */ });\nconst cardArray = [\r\n    `<img class=\"card-suit\" src=\"./img/10 бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/10 крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/10 пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/10 черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/6 бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/6 крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/6 пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/6 черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/7 бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/7 крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/7 пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/7 черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/8 бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/8 крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/8 пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/8 черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/9 бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/9 крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/9 пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/9 черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/валет бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/валет крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/валет пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/валет черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/дама бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/дама крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/дама пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/дама черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/король бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/король крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/король пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/король черви.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/туз бубны.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/туз крести.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/туз пики.png\">`,\r\n    `<img class=\"card-suit\" src=\"./img/туз черви.png\">`  \r\n]\n\n//# sourceURL=webpack://card_game/./component/cardArray.js?");

/***/ }),

/***/ "./component/renderPlayingField.js":
/*!*****************************************!*\
  !*** ./component/renderPlayingField.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPlayingField: () => (/* binding */ renderPlayingField)\n/* harmony export */ });\n/* harmony import */ var _cardArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardArray.js */ \"./component/cardArray.js\");\n\n\nfunction renderPlayingField(levelPoint, appEl) {\n    let level = levelPoint.value\n\n    const coverCardArr = []\n\n        for (let index = 0; index < level; index++) {\n            coverCardArr.push(`<img src=\"./img/рубашка.png\" class=\"cover-card\">`)\n        }\n        console.log(coverCardArr);\n\n  \n    const appHtml = `\n    <div class=\"wrap\">\n    <header class=\"center-big\">\n      <div class=\"timer \">\n        <div class=\"timer__units\">\n            <p class=\"timer__min\">min</p>\n            <p class=\"timer__sek\">sek</p>\n        </div>\n        <div class=\"timer__time\">00.00</div>\n      </div>  \n      <button type=\"submit\" class=\"button\" id=\"button-new-start\" >Начать заново</button>\n    </header>\n    <div class=\"game-field center-big\" id=\"suits\">${coverCardArr.join(\"\")}</div>\n</div>\n`\n    appEl.innerHTML = appHtml\n    \n\n    const coverCards = document.querySelectorAll(\".cover-card\");\n    for (const coverCard of coverCards) {\n        coverCard.addEventListener('click', () => {\n            let sortCardArray = _cardArray_js__WEBPACK_IMPORTED_MODULE_0__.cardArray.sort(() =>Math.random() - 0.5 );\n            const suits = document.getElementById('suits'); \n            suits.innerHTML = `${sortCardArray.slice(0, level)}`;\n        \n            setTimeout(() => {\n                renderPlayingField(levelPoint, appEl);\n               }, 5000);\n        })\n    }\n\n\n\n\n}\n\n\n//# sourceURL=webpack://card_game/./component/renderPlayingField.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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