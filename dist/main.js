/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/photos/todoListIcon.png":
/*!*************************************!*\
  !*** ./src/photos/todoListIcon.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "557b82c21be107d57bdf19ba3148844d.png");

/***/ }),

/***/ "./src/createFolderBtn.js":
/*!********************************!*\
  !*** ./src/createFolderBtn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFolderBtn: () => (/* binding */ createFolderBtn),
/* harmony export */   removeMainDisplayElements: () => (/* binding */ removeMainDisplayElements)
/* harmony export */ });
/* harmony import */ var _mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDisplayElements.js */ "./src/mainDisplayElements.js");
// Im about to chaane createFolderBtn so that it gets its textcontent from the most recent object in the array 'folders' rather than the form submission's value




let addFolderInput = document.getElementById("addFolder").value;
let folderBtns = document.getElementById("folderBtns")

function allBtnsDeselectedColor () {
    let folderBtnsParent = document.getElementById('folderBtns')
    let folderBtns = document.querySelectorAll('#folderBtn')
    folderBtns.forEach(function(folderBtn) {
        folderBtn.classList = [];
        folderBtn.classList.add('deselectedColor');
    })
}

function btnSelectedColor (button) {
    button.classList.add('selectedColor')
}

function removeMainDisplayElements () {
    const mainDisplay = document.getElementById('mainDisplay');
    while(mainDisplay.firstChild) {
        mainDisplay.removeChild(mainDisplay.firstChild);
    }
};

function createFolderBtn (e) {
    let button = document.createElement('button');
    let addFolderInput = document.getElementById("addFolder").value;
    button.textContent = addFolderInput;
    button.id = 'folderBtn';
    button.classList.add('selectedColor');
    allBtnsDeselectedColor();
    button.onclick = function (e) {
        allBtnsDeselectedColor();
        btnSelectedColor(e.target);
        removeMainDisplayElements();
        (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_0__.linkBtnToObj) (e)
        ;(0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_0__.mainDisplayElements)()
        // function to add new elements based on folder details
    }
    folderBtns.appendChild(button)
}




/***/ }),

/***/ "./src/createFolderObject.js":
/*!***********************************!*\
  !*** ./src/createFolderObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _foldersArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersArray */ "./src/foldersArray.js");


class newFolder {
    constructor (title) {
        this.title = title;
        this.tasks = [];
    }
}

function createFolderObject () {
    let addFolderInput = document.getElementById("addFolder").value;
    let folder = new newFolder (addFolderInput)
    _foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"].push(folder)
    const serializedFolders = JSON.stringify(_foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"])
    localStorage.setItem('folders', serializedFolders)
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFolderObject);

/***/ }),

/***/ "./src/foldersArray.js":
/*!*****************************!*\
  !*** ./src/foldersArray.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let folders = [

]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (folders);

/***/ }),

/***/ "./src/mainDisplayElements.js":
/*!************************************!*\
  !*** ./src/mainDisplayElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkBtnToObj: () => (/* binding */ linkBtnToObj),
/* harmony export */   linkFormToObj: () => (/* binding */ linkFormToObj),
/* harmony export */   mainDisplayElements: () => (/* binding */ mainDisplayElements)
/* harmony export */ });
/* harmony import */ var _foldersArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersArray */ "./src/foldersArray.js");


let newFolderSubmission = document.getElementById('addFolder');
let mainDisplay = document.getElementById('mainDisplay');

// Function to find correct folder object in folders Array when folder selected/initially created
let correctObj

function linkBtnToObj (e) {
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"].find((element) => element.title === e.target.textContent)
    correctObj = correctObj
}

function linkFormToObj () {
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"].find((element) => element.title === newFolderSubmission.value);
    correctObj = correctObj;
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle';
    title.textContent = correctObj.title;
    mainDisplay.appendChild(title);
}

// Logic for counting incomplete tasks
let incompleteTaskCounter = ''

function tasksRemainingLogic () {
    let tasks = correctObj.tasks;
    console.log(tasks);

    if (tasks.length === 0) {
        incompleteTaskCounter = 0;
    } else {
        incompleteTaskCounter = tasks.reduce(function (acc, currentValue) {
        if (currentValue.completeStatus === 'incomplete') {
            return acc + 1;
        }
        return acc;
        }, 0);
        incompleteTaskCounter = String(incompleteTaskCounter);
        return incompleteTaskCounter;
    }
}

function tasksRemainingText () {
    let tasksRemaining = document.createElement('div');
    tasksRemaining.id = 'mainDisplayTasksRemaining';
    tasksRemaining.textContent = `Tasks Remaining: ${incompleteTaskCounter}`;
    mainDisplay.appendChild(tasksRemaining)
}

function mainDisplayElements () {
    title()
    tasksRemainingLogic()
    tasksRemainingText()
}






/***/ }),

/***/ "./src/placeholderIcon.js":
/*!********************************!*\
  !*** ./src/placeholderIcon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _photos_todoListIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/todoListIcon.png */ "./src/photos/todoListIcon.png");

let mainDisplay = document.getElementById('mainDisplay')

function loadPlaceholderIcon () {
    // Once the folders array is set up use an if statement to initiate this function's functionality only if the array is empty
    let placeholderIcon = document.createElement('img');
    placeholderIcon.src = _photos_todoListIcon_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    placeholderIcon.id = 'placeholderIcon'
    mainDisplay.appendChild(placeholderIcon)
    mainDisplay.classList = [];
    mainDisplay.classList.add('mainDisplayEmpty')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPlaceholderIcon);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersArray.js */ "./src/foldersArray.js");
/* harmony import */ var _placeholderIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholderIcon.js */ "./src/placeholderIcon.js");
/* harmony import */ var _createFolderObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFolderObject.js */ "./src/createFolderObject.js");
/* harmony import */ var _createFolderBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createFolderBtn.js */ "./src/createFolderBtn.js");
/* harmony import */ var _mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainDisplayElements.js */ "./src/mainDisplayElements.js");
// Logic to load local storage

const storedFolders = JSON.parse(localStorage.getItem('folders'));
if (storedFolders) {
  _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] = storedFolders
}

// Logic to load placeholder icon when the user has no folders

(0,_placeholderIcon_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

// Logic to make new folder upon form submission
;



const addFolderForm = document.getElementById("addFolderForm");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_3__.removeMainDisplayElements)();
    (0,_createFolderObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_3__.createFolderBtn)(e);
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_4__.linkFormToObj)();
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_4__.mainDisplayElements)();
  }
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0U7O0FBRTBFOzs7QUFHMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBWTtBQUNwQixRQUFRLDZFQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFLQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEbUM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFPO0FBQ1gsNkNBQTZDLHFEQUFPO0FBQ3BEO0FBQ0E7Ozs7O0FBS0EsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7OztBQ3BCakM7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnFCOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscURBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixxREFBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFELHNCQUFzQjtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxtQkFBbUI7Ozs7OztVQ2JsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUN3QztBQUN4QztBQUNBO0FBQ0EsRUFBRSx3REFBTztBQUNUOztBQUVBO0FBQ3VEO0FBQ3ZELCtEQUFtQjs7QUFFbkI7QUFDQSxDQUF5RDtBQUN1QjtBQUNuQjtBQUNOO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLElBQUksOEVBQXlCO0FBQzdCLElBQUksa0VBQWtCO0FBQ3RCLElBQUksb0VBQWU7QUFDbkIsSUFBSSxzRUFBYTtBQUNqQixJQUFJLDRFQUFtQjtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGhvdG9zL3RvZG9MaXN0SWNvbi5wbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRm9sZGVyQnRuLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlck9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb2xkZXJzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbkRpc3BsYXlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wbGFjZWhvbGRlckljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NTdiODJjMjFiZTEwN2Q1N2JkZjE5YmEzMTQ4ODQ0ZC5wbmdcIjsiLCIvLyBJbSBhYm91dCB0byBjaGFhbmUgY3JlYXRlRm9sZGVyQnRuIHNvIHRoYXQgaXQgZ2V0cyBpdHMgdGV4dGNvbnRlbnQgZnJvbSB0aGUgbW9zdCByZWNlbnQgb2JqZWN0IGluIHRoZSBhcnJheSAnZm9sZGVycycgcmF0aGVyIHRoYW4gdGhlIGZvcm0gc3VibWlzc2lvbidzIHZhbHVlXG5cbmltcG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50cywgbGlua0J0blRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnXG5cblxubGV0IGFkZEZvbGRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb2xkZXJcIikudmFsdWU7XG5sZXQgZm9sZGVyQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVyQnRuc1wiKVxuXG5mdW5jdGlvbiBhbGxCdG5zRGVzZWxlY3RlZENvbG9yICgpIHtcbiAgICBsZXQgZm9sZGVyQnRuc1BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXJCdG5zJylcbiAgICBsZXQgZm9sZGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb2xkZXJCdG4nKVxuICAgIGZvbGRlckJ0bnMuZm9yRWFjaChmdW5jdGlvbihmb2xkZXJCdG4pIHtcbiAgICAgICAgZm9sZGVyQnRuLmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICBmb2xkZXJCdG4uY2xhc3NMaXN0LmFkZCgnZGVzZWxlY3RlZENvbG9yJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYnRuU2VsZWN0ZWRDb2xvciAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkQ29sb3InKVxufVxuXG5mdW5jdGlvbiByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpO1xuICAgIHdoaWxlKG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkRpc3BsYXkucmVtb3ZlQ2hpbGQobWFpbkRpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlRm9sZGVyQnRuIChlKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBhZGRGb2xkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyXCIpLnZhbHVlO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFkZEZvbGRlcklucHV0O1xuICAgIGJ1dHRvbi5pZCA9ICdmb2xkZXJCdG4nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZENvbG9yJyk7XG4gICAgYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvcigpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvcigpO1xuICAgICAgICBidG5TZWxlY3RlZENvbG9yKGUudGFyZ2V0KTtcbiAgICAgICAgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICAgICAgICBsaW5rQnRuVG9PYmogKGUpXG4gICAgICAgIG1haW5EaXNwbGF5RWxlbWVudHMoKVxuICAgICAgICAvLyBmdW5jdGlvbiB0byBhZGQgbmV3IGVsZW1lbnRzIGJhc2VkIG9uIGZvbGRlciBkZXRhaWxzXG4gICAgfVxuICAgIGZvbGRlckJ0bnMuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuXG5leHBvcnQge1xuXHRjcmVhdGVGb2xkZXJCdG4sXG5cdHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHNcbn1cbiIsImltcG9ydCBmb2xkZXJzIGZyb20gJy4vZm9sZGVyc0FycmF5J1xuXG5jbGFzcyBuZXdGb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlck9iamVjdCAoKSB7XG4gICAgbGV0IGFkZEZvbGRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb2xkZXJcIikudmFsdWU7XG4gICAgbGV0IGZvbGRlciA9IG5ldyBuZXdGb2xkZXIgKGFkZEZvbGRlcklucHV0KVxuICAgIGZvbGRlcnMucHVzaChmb2xkZXIpXG4gICAgY29uc3Qgc2VyaWFsaXplZEZvbGRlcnMgPSBKU09OLnN0cmluZ2lmeShmb2xkZXJzKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgc2VyaWFsaXplZEZvbGRlcnMpXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvbGRlck9iamVjdDsiLCJsZXQgZm9sZGVycyA9IFtcblxuXVxuXG5leHBvcnQgZGVmYXVsdCBmb2xkZXJzIiwiaW1wb3J0IGZvbGRlcnMgZnJvbSAnLi9mb2xkZXJzQXJyYXknXG5cbmxldCBuZXdGb2xkZXJTdWJtaXNzaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEZvbGRlcicpO1xubGV0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5EaXNwbGF5Jyk7XG5cbi8vIEZ1bmN0aW9uIHRvIGZpbmQgY29ycmVjdCBmb2xkZXIgb2JqZWN0IGluIGZvbGRlcnMgQXJyYXkgd2hlbiBmb2xkZXIgc2VsZWN0ZWQvaW5pdGlhbGx5IGNyZWF0ZWRcbmxldCBjb3JyZWN0T2JqXG5cbmZ1bmN0aW9uIGxpbmtCdG5Ub09iaiAoZSkge1xuICAgIGNvcnJlY3RPYmogPSBmb2xkZXJzLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudGl0bGUgPT09IGUudGFyZ2V0LnRleHRDb250ZW50KVxuICAgIGNvcnJlY3RPYmogPSBjb3JyZWN0T2JqXG59XG5cbmZ1bmN0aW9uIGxpbmtGb3JtVG9PYmogKCkge1xuICAgIGNvcnJlY3RPYmogPSBmb2xkZXJzLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudGl0bGUgPT09IG5ld0ZvbGRlclN1Ym1pc3Npb24udmFsdWUpO1xuICAgIGNvcnJlY3RPYmogPSBjb3JyZWN0T2JqO1xufVxuXG5mdW5jdGlvbiB0aXRsZSAoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZS5pZCA9ICdtYWluRGlzcGxheVRpdGxlJztcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvcnJlY3RPYmoudGl0bGU7XG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG4vLyBMb2dpYyBmb3IgY291bnRpbmcgaW5jb21wbGV0ZSB0YXNrc1xubGV0IGluY29tcGxldGVUYXNrQ291bnRlciA9ICcnXG5cbmZ1bmN0aW9uIHRhc2tzUmVtYWluaW5nTG9naWMgKCkge1xuICAgIGxldCB0YXNrcyA9IGNvcnJlY3RPYmoudGFza3M7XG4gICAgY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGluY29tcGxldGVUYXNrQ291bnRlciA9IHRhc2tzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5jb21wbGV0ZVN0YXR1cyA9PT0gJ2luY29tcGxldGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjICsgMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gU3RyaW5nKGluY29tcGxldGVUYXNrQ291bnRlcik7XG4gICAgICAgIHJldHVybiBpbmNvbXBsZXRlVGFza0NvdW50ZXI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YXNrc1JlbWFpbmluZ1RleHQgKCkge1xuICAgIGxldCB0YXNrc1JlbWFpbmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tzUmVtYWluaW5nLmlkID0gJ21haW5EaXNwbGF5VGFza3NSZW1haW5pbmcnO1xuICAgIHRhc2tzUmVtYWluaW5nLnRleHRDb250ZW50ID0gYFRhc2tzIFJlbWFpbmluZzogJHtpbmNvbXBsZXRlVGFza0NvdW50ZXJ9YDtcbiAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrc1JlbWFpbmluZylcbn1cblxuZnVuY3Rpb24gbWFpbkRpc3BsYXlFbGVtZW50cyAoKSB7XG4gICAgdGl0bGUoKVxuICAgIHRhc2tzUmVtYWluaW5nTG9naWMoKVxuICAgIHRhc2tzUmVtYWluaW5nVGV4dCgpXG59XG5cblxuXG5cbmV4cG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50cywgbGlua0J0blRvT2JqICxsaW5rRm9ybVRvT2JqfTsiLCJpbXBvcnQgdG9kb0xpc3RJY29uIGZyb20gJy4vcGhvdG9zL3RvZG9MaXN0SWNvbi5wbmcnO1xubGV0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5EaXNwbGF5JylcblxuZnVuY3Rpb24gbG9hZFBsYWNlaG9sZGVySWNvbiAoKSB7XG4gICAgLy8gT25jZSB0aGUgZm9sZGVycyBhcnJheSBpcyBzZXQgdXAgdXNlIGFuIGlmIHN0YXRlbWVudCB0byBpbml0aWF0ZSB0aGlzIGZ1bmN0aW9uJ3MgZnVuY3Rpb25hbGl0eSBvbmx5IGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICAgIGxldCBwbGFjZWhvbGRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwbGFjZWhvbGRlckljb24uc3JjID0gdG9kb0xpc3RJY29uO1xuICAgIHBsYWNlaG9sZGVySWNvbi5pZCA9ICdwbGFjZWhvbGRlckljb24nXG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJJY29uKVxuICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdCA9IFtdO1xuICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21haW5EaXNwbGF5RW1wdHknKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGxhY2Vob2xkZXJJY29uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBMb2dpYyB0byBsb2FkIGxvY2FsIHN0b3JhZ2VcbmltcG9ydCBmb2xkZXJzIGZyb20gJy4vZm9sZGVyc0FycmF5LmpzJztcbmNvbnN0IHN0b3JlZEZvbGRlcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO1xuaWYgKHN0b3JlZEZvbGRlcnMpIHtcbiAgZm9sZGVycyA9IHN0b3JlZEZvbGRlcnNcbn1cblxuLy8gTG9naWMgdG8gbG9hZCBwbGFjZWhvbGRlciBpY29uIHdoZW4gdGhlIHVzZXIgaGFzIG5vIGZvbGRlcnNcbmltcG9ydCBsb2FkUGxhY2Vob2xkZXJJY29uIGZyb20gJy4vcGxhY2Vob2xkZXJJY29uLmpzJztcbmxvYWRQbGFjZWhvbGRlckljb24oKVxuXG4vLyBMb2dpYyB0byBtYWtlIG5ldyBmb2xkZXIgdXBvbiBmb3JtIHN1Ym1pc3Npb25cbmltcG9ydCBjcmVhdGVGb2xkZXJPYmplY3QgZnJvbSAnLi9jcmVhdGVGb2xkZXJPYmplY3QuanMnO1xuaW1wb3J0IHtjcmVhdGVGb2xkZXJCdG4sIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHN9IGZyb20gJy4vY3JlYXRlRm9sZGVyQnRuLmpzJztcbmltcG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50c30gZnJvbSAnLi9tYWluRGlzcGxheUVsZW1lbnRzLmpzJztcbmltcG9ydCB7bGlua0Zvcm1Ub09ian0gZnJvbSAnLi9tYWluRGlzcGxheUVsZW1lbnRzLmpzJztcbmNvbnN0IGFkZEZvbGRlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlckZvcm1cIik7XG5hZGRGb2xkZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICAgIGNyZWF0ZUZvbGRlck9iamVjdCgpO1xuICAgIGNyZWF0ZUZvbGRlckJ0bihlKTtcbiAgICBsaW5rRm9ybVRvT2JqKCk7XG4gICAgbWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICB9XG4pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=