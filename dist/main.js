/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./component/cardArray.js":
/*!********************************!*\
  !*** ./component/cardArray.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coverCardArr: () => (/* binding */ coverCardArr),
/* harmony export */   suitCardArray: () => (/* binding */ suitCardArray)
/* harmony export */ });
const suitCardArray = [
    `<img class="card-suit" src="./static/img/10 бубны.png">`,
    `<img class="card-suit" src="./static/img/10 крести.png">`,
    `<img class="card-suit" src="./static/img/10 пики.png">`,
    `<img class="card-suit" src="./static/img/10 черви.png">`,
    `<img class="card-suit" src="./static/img/6 бубны.png">`,
    `<img class="card-suit" src="./static/img/6 крести.png">`,
    `<img class="card-suit" src="./static/img/6 пики.png">`,
    `<img class="card-suit" src="./static/img/6 черви.png">`,
    `<img class="card-suit" src="./static/img/7 бубны.png">`,
    `<img class="card-suit" src="./static/img/7 крести.png">`,
    `<img class="card-suit" src="./static/img/7 пики.png">`,
    `<img class="card-suit" src="./static/img/7 черви.png">`,
    `<img class="card-suit" src="./static/img/8 бубны.png">`,
    `<img class="card-suit" src="./static/img/8 крести.png">`,
    `<img class="card-suit" src="./static/img/8 пики.png">`,
    `<img class="card-suit" src="./static/img/8 черви.png">`,
    `<img class="card-suit" src="./static/img/9 бубны.png">`,
    `<img class="card-suit" src="./static/img/9 крести.png">`,
    `<img class="card-suit" src="./static/img/9 пики.png">`,
    `<img class="card-suit" src="./static/img/9 черви.png">`,
    `<img class="card-suit" src="./static/img/валет бубны.png">`,
    `<img class="card-suit" src="./static/img/валет крести.png">`,
    `<img class="card-suit" src="./static/img/валет пики.png">`,
    `<img class="card-suit" src="./static/img/валет черви.png">`,
    `<img class="card-suit" src="./static/img/дама бубны.png">`,
    `<img class="card-suit" src="./static/img/дама крести.png">`,
    `<img class="card-suit" src="./static/img/дама пики.png">`,
    `<img class="card-suit" src="./static/img/дама черви.png">`,
    `<img class="card-suit" src="./static/img/король бубны.png">`,
    `<img class="card-suit" src="./static/img/король крести.png">`,
    `<img class="card-suit" src="./static/img/король пики.png">`,
    `<img class="card-suit" src="./static/img/король черви.png">`,
    `<img class="card-suit" src="./static/img/туз бубны.png">`,
    `<img class="card-suit" src="./static/img/туз крести.png">`,
    `<img class="card-suit" src="./static/img/туз пики.png">`,
    `<img class="card-suit" src="./static/img/туз черви.png">`  
]

const coverCardArr = []

for (let index = 0; index < 36; index++) {
    coverCardArr.push(
        `<img src="./static/img/рубашка.png" class="cover-card">`,
    )
};


/***/ }),

/***/ "./component/renderChoicePage.js":
/*!***************************************!*\
  !*** ./component/renderChoicePage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderChoicePage: () => (/* binding */ renderChoicePage)
/* harmony export */ });
function renderChoicePage(appEl, renderPlayingField) {    
    const appHtml = `
    <div class="wrap center">
    <form class="choice" id="form" method = "POST" action = "#">
        <h2 class="choice__title">
            Выбери<br>сложность
        </h2>
        <div class="choice__items-wrap">

            <input class="choice__item" type="radio" id="radio1" name="radios" value="6" checked>
            <label for="radio1">1</label>

            <input class="choice__item" type="radio" id="radio2" name="radios" value="12">
            <label for="radio2">2</label>

            <input class="choice__item" type="radio" id="radio3" name="radios" value="18">
            <label for="radio3">3</label>
        </div>
        <button class="button choice__button" type="submit">
            Старт
        </button>
    </form>
    </div>`
    appEl.innerHTML = appHtml
    const form = document.getElementById('form')
    form.addEventListener('submit', (element) => {
        element.preventDefault()

        let levelPoints = document.querySelectorAll('.choice__item')

        for (const levelPoint of levelPoints) {
            if (levelPoint.checked) {
                console.log(levelPoint.value)
                renderPlayingField(levelPoint, appEl)
            }
        }
    })
}

/***/ }),

/***/ "./component/renderPlayingField.js":
/*!*****************************************!*\
  !*** ./component/renderPlayingField.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayApp: () => (/* binding */ PlayApp)
/* harmony export */ });
/* harmony import */ var _cardArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardArray.js */ "./component/cardArray.js");



function PlayApp(levelPoint, appEl) {
    let level = levelPoint.value

    //Создаём два сортированных массива
    let sortSuitCardArray = _cardArray_js__WEBPACK_IMPORTED_MODULE_0__.suitCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, level / 2)
    sortSuitCardArray = sortSuitCardArray
        .concat(sortSuitCardArray)
        .sort(() => Math.random() - 0.5)
        .join('')

    let sortCoverCardArr = _cardArray_js__WEBPACK_IMPORTED_MODULE_0__.coverCardArr.slice(0, level).join('')

    //Создаём массив, который будет показываться
    let baseCardArr = []

    baseCardArr = sortSuitCardArray
    function renderPlayingField() {
        const appHtml = `
    <div class="wrap">
    <header class="center-big">
      <div class="timer ">
        <div class="timer__units">
            <p class="timer__min">min</p>
            <p class="timer__sek">sek</p>
        </div>
        <div class="timer__time">00.00</div>
      </div>  
      <button type="submit" class="button" id="button-new-start" >Начать заново</button>
    </header>
    <div class="game-field center-big" id="suits">${baseCardArr}</div>
</div>
`
        appEl.innerHTML = appHtml
    }
    renderPlayingField()

    function showCoverCard() {
        baseCardArr = sortCoverCardArr
        renderPlayingField()
        const suits = document.getElementById('suits')
        let itemCards = suits.children
        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                console.log('click')
            })
        }
    }
    setTimeout(showCoverCard, 5000)
}


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _component_renderPlayingField_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/renderPlayingField.js */ "./component/renderPlayingField.js");
/* harmony import */ var _component_renderChoicePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/renderChoicePage.js */ "./component/renderChoicePage.js");




let appEl = document.querySelector('.app');
(0,_component_renderChoicePage_js__WEBPACK_IMPORTED_MODULE_2__.renderChoicePage)(appEl, _component_renderPlayingField_js__WEBPACK_IMPORTED_MODULE_1__.PlayApp);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map