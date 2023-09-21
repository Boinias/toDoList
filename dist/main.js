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
        (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_0__.mainDisplayElements)(e)
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
/* harmony export */   mainDisplayElements: () => (/* binding */ mainDisplayElements)
/* harmony export */ });
/* harmony import */ var _foldersArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersArray */ "./src/foldersArray.js");
let mainDisplay = document.getElementById('mainDisplay')

// Function to find correct folder object in folders Array
;
let correctObj

function linkBtnToObj (e) {
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"].find((element) => element.title === e.target.textContent)
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle'
    title.textContent = correctObj.title
    mainDisplay.appendChild(title)
}

// Logic for counting incomplete tasks - we still need to 
let tasks = correctObj.tasks
const uncompleteTaskCounter = tasks.reduce(function (acc, currentValue){
    if (currentValue.completeStatus === 'incomplete') {
        return acc + 1;
    }
    return acc;
    }, 0);
    uncompleteTaskCounter = String(uncompleteTaskCounter);

function tasksRemainingText () {
    let tasksRemaining = document.createElement('div')
    tasksRemaining.id = 'mainDisplayTasksRemaining'
    tasksRemaining.textContent = `Tasks Remaining:${uncompleteTaskCounter}`
}

function mainDisplayElements(e) {
    linkBtnToObj (e)
    title()
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
/* harmony import */ var _placeholderIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeholderIcon.js */ "./src/placeholderIcon.js");
/* harmony import */ var _createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFolderObject.js */ "./src/createFolderObject.js");
/* harmony import */ var _createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFolderBtn.js */ "./src/createFolderBtn.js");
// Logic to load placeholder icon when the user has no folders

(0,_placeholderIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

// Logic to make new folder upon form submission
;

const addFolderForm = document.getElementById("addFolderForm");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__.removeMainDisplayElements)();
    (0,_createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__.createFolderBtn)(e);
  }
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbkI7OztBQUc1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRFQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFLQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDbUM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFPO0FBQ1g7Ozs7O0FBS0EsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7OztBQ2xCakM7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOztBQUVBO0FBQ0EsQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQSxpQkFBaUIscURBQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQkFBc0I7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxtQkFBbUI7Ozs7OztVQ2JsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDdUQ7QUFDdkQsK0RBQW1COztBQUVuQjtBQUNBLENBQXlEO0FBQ3VCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLElBQUksOEVBQXlCO0FBQzdCLElBQUksa0VBQWtCO0FBQ3RCLElBQUksb0VBQWU7QUFDbkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Bob3Rvcy90b2RvTGlzdEljb24ucG5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlckJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb2xkZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9sZGVyc0FycmF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW5EaXNwbGF5RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGxhY2Vob2xkZXJJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTU3YjgyYzIxYmUxMDdkNTdiZGYxOWJhMzE0ODg0NGQucG5nXCI7IiwiaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnXG5cblxubGV0IGFkZEZvbGRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb2xkZXJcIikudmFsdWU7XG5sZXQgZm9sZGVyQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVyQnRuc1wiKVxuXG5mdW5jdGlvbiBhbGxCdG5zRGVzZWxlY3RlZENvbG9yICgpIHtcbiAgICBsZXQgZm9sZGVyQnRuc1BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXJCdG5zJylcbiAgICBsZXQgZm9sZGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb2xkZXJCdG4nKVxuICAgIGZvbGRlckJ0bnMuZm9yRWFjaChmdW5jdGlvbihmb2xkZXJCdG4pIHtcbiAgICAgICAgZm9sZGVyQnRuLmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICBmb2xkZXJCdG4uY2xhc3NMaXN0LmFkZCgnZGVzZWxlY3RlZENvbG9yJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYnRuU2VsZWN0ZWRDb2xvciAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkQ29sb3InKVxufVxuXG5mdW5jdGlvbiByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpO1xuICAgIHdoaWxlKG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkRpc3BsYXkucmVtb3ZlQ2hpbGQobWFpbkRpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlRm9sZGVyQnRuIChlKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBhZGRGb2xkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyXCIpLnZhbHVlO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFkZEZvbGRlcklucHV0O1xuICAgIGJ1dHRvbi5pZCA9ICdmb2xkZXJCdG4nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZENvbG9yJyk7XG4gICAgYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvcigpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvcigpO1xuICAgICAgICBidG5TZWxlY3RlZENvbG9yKGUudGFyZ2V0KTtcbiAgICAgICAgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICAgICAgICBtYWluRGlzcGxheUVsZW1lbnRzKGUpXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIGFkZCBuZXcgZWxlbWVudHMgYmFzZWQgb24gZm9sZGVyIGRldGFpbHNcbiAgICB9XG4gICAgZm9sZGVyQnRucy5hcHBlbmRDaGlsZChidXR0b24pXG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUZvbGRlckJ0bixcblx0cmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c1xufVxuIiwiaW1wb3J0IGZvbGRlcnMgZnJvbSAnLi9mb2xkZXJzQXJyYXknXG5cbmNsYXNzIG5ld0ZvbGRlciB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9sZGVyT2JqZWN0ICgpIHtcbiAgICBsZXQgYWRkRm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlclwiKS52YWx1ZTtcbiAgICBsZXQgZm9sZGVyID0gbmV3IG5ld0ZvbGRlciAoYWRkRm9sZGVySW5wdXQpXG4gICAgZm9sZGVycy5wdXNoKGZvbGRlcilcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9sZGVyT2JqZWN0OyIsImxldCBmb2xkZXJzID0gW1xuXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZvbGRlcnMiLCJsZXQgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKVxuXG4vLyBGdW5jdGlvbiB0byBmaW5kIGNvcnJlY3QgZm9sZGVyIG9iamVjdCBpbiBmb2xkZXJzIEFycmF5XG5pbXBvcnQgZm9sZGVycyBmcm9tICcuL2ZvbGRlcnNBcnJheSdcbmxldCBjb3JyZWN0T2JqXG5cbmZ1bmN0aW9uIGxpbmtCdG5Ub09iaiAoZSkge1xuICAgIGNvcnJlY3RPYmogPSBmb2xkZXJzLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQudGl0bGUgPT09IGUudGFyZ2V0LnRleHRDb250ZW50KVxufVxuXG5mdW5jdGlvbiB0aXRsZSAoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZS5pZCA9ICdtYWluRGlzcGxheVRpdGxlJ1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29ycmVjdE9iai50aXRsZVxuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHRpdGxlKVxufVxuXG4vLyBMb2dpYyBmb3IgY291bnRpbmcgaW5jb21wbGV0ZSB0YXNrcyAtIHdlIHN0aWxsIG5lZWQgdG8gXG5sZXQgdGFza3MgPSBjb3JyZWN0T2JqLnRhc2tzXG5jb25zdCB1bmNvbXBsZXRlVGFza0NvdW50ZXIgPSB0YXNrcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VycmVudFZhbHVlKXtcbiAgICBpZiAoY3VycmVudFZhbHVlLmNvbXBsZXRlU3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHtcbiAgICAgICAgcmV0dXJuIGFjYyArIDE7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgdW5jb21wbGV0ZVRhc2tDb3VudGVyID0gU3RyaW5nKHVuY29tcGxldGVUYXNrQ291bnRlcik7XG5cbmZ1bmN0aW9uIHRhc2tzUmVtYWluaW5nVGV4dCAoKSB7XG4gICAgbGV0IHRhc2tzUmVtYWluaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrc1JlbWFpbmluZy5pZCA9ICdtYWluRGlzcGxheVRhc2tzUmVtYWluaW5nJ1xuICAgIHRhc2tzUmVtYWluaW5nLnRleHRDb250ZW50ID0gYFRhc2tzIFJlbWFpbmluZzoke3VuY29tcGxldGVUYXNrQ291bnRlcn1gXG59XG5cbmZ1bmN0aW9uIG1haW5EaXNwbGF5RWxlbWVudHMoZSkge1xuICAgIGxpbmtCdG5Ub09iaiAoZSlcbiAgICB0aXRsZSgpXG59XG5cbmV4cG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50c307IiwiaW1wb3J0IHRvZG9MaXN0SWNvbiBmcm9tICcuL3Bob3Rvcy90b2RvTGlzdEljb24ucG5nJztcbmxldCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpXG5cbmZ1bmN0aW9uIGxvYWRQbGFjZWhvbGRlckljb24gKCkge1xuICAgIC8vIE9uY2UgdGhlIGZvbGRlcnMgYXJyYXkgaXMgc2V0IHVwIHVzZSBhbiBpZiBzdGF0ZW1lbnQgdG8gaW5pdGlhdGUgdGhpcyBmdW5jdGlvbidzIGZ1bmN0aW9uYWxpdHkgb25seSBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAgICBsZXQgcGxhY2Vob2xkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGxhY2Vob2xkZXJJY29uLnNyYyA9IHRvZG9MaXN0SWNvbjtcbiAgICBwbGFjZWhvbGRlckljb24uaWQgPSAncGxhY2Vob2xkZXJJY29uJ1xuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVySWNvbilcbiAgICBtYWluRGlzcGxheS5jbGFzc0xpc3QgPSBbXTtcbiAgICBtYWluRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtYWluRGlzcGxheUVtcHR5Jylcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBsYWNlaG9sZGVySWNvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gTG9naWMgdG8gbG9hZCBwbGFjZWhvbGRlciBpY29uIHdoZW4gdGhlIHVzZXIgaGFzIG5vIGZvbGRlcnNcbmltcG9ydCBsb2FkUGxhY2Vob2xkZXJJY29uIGZyb20gJy4vcGxhY2Vob2xkZXJJY29uLmpzJztcbmxvYWRQbGFjZWhvbGRlckljb24oKVxuXG4vLyBMb2dpYyB0byBtYWtlIG5ldyBmb2xkZXIgdXBvbiBmb3JtIHN1Ym1pc3Npb25cbmltcG9ydCBjcmVhdGVGb2xkZXJPYmplY3QgZnJvbSAnLi9jcmVhdGVGb2xkZXJPYmplY3QuanMnO1xuaW1wb3J0IHtjcmVhdGVGb2xkZXJCdG4sIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHN9IGZyb20gJy4vY3JlYXRlRm9sZGVyQnRuLmpzJztcbmNvbnN0IGFkZEZvbGRlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlckZvcm1cIik7XG5hZGRGb2xkZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICAgIGNyZWF0ZUZvbGRlck9iamVjdCgpO1xuICAgIGNyZWF0ZUZvbGRlckJ0bihlKTtcbiAgfVxuKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9