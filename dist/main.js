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
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"].find((element) => element.title === newFolderSubmission.value)
    correctObj = correctObj
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle'
    title.textContent = correctObj.title;
    mainDisplay.appendChild(title)
}

// Logic for counting incomplete tasks
let incompleteTaskCounter = ''
function tasksRemainingLogic () {
let tasks = correctObj.tasks
console.log(tasks)

if (tasks.length === 0) {
    incompleteTaskCounter = 0;
    console.log('ddaad')
} else {
    incompleteTaskCounter = tasks.reduce(function (acc, currentValue){
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

function mainDisplayElements() {
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
/* harmony import */ var _placeholderIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeholderIcon.js */ "./src/placeholderIcon.js");
/* harmony import */ var _createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFolderObject.js */ "./src/createFolderObject.js");
/* harmony import */ var _createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFolderBtn.js */ "./src/createFolderBtn.js");
/* harmony import */ var _mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainDisplayElements.js */ "./src/mainDisplayElements.js");
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
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_3__.linkFormToObj)();
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_3__.mainDisplayElements)();

  }
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTDs7O0FBRzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQVk7QUFDcEIsUUFBUSw2RUFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ21DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBTztBQUNYOzs7OztBQUtBLGlFQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUNsQmpDOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pxQjs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscURBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0JBQXNCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQjs7Ozs7O1VDYmxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDdUQ7QUFDdkQsK0RBQW1COztBQUVuQjtBQUNBLENBQXlEO0FBQ3VCO0FBQ25CO0FBQ047QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4RUFBeUI7QUFDN0IsSUFBSSxrRUFBa0I7QUFDdEIsSUFBSSxvRUFBZTtBQUNuQixJQUFJLHNFQUFhO0FBQ2pCLElBQUksNEVBQW1COztBQUV2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGhvdG9zL3RvZG9MaXN0SWNvbi5wbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRm9sZGVyQnRuLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlck9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb2xkZXJzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbkRpc3BsYXlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wbGFjZWhvbGRlckljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NTdiODJjMjFiZTEwN2Q1N2JkZjE5YmEzMTQ4ODQ0ZC5wbmdcIjsiLCJpbXBvcnQge21haW5EaXNwbGF5RWxlbWVudHMsIGxpbmtCdG5Ub09ian0gZnJvbSAnLi9tYWluRGlzcGxheUVsZW1lbnRzLmpzJ1xuXG5cbmxldCBhZGRGb2xkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyXCIpLnZhbHVlO1xubGV0IGZvbGRlckJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbGRlckJ0bnNcIilcblxuZnVuY3Rpb24gYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvciAoKSB7XG4gICAgbGV0IGZvbGRlckJ0bnNQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyQnRucycpXG4gICAgbGV0IGZvbGRlckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZm9sZGVyQnRuJylcbiAgICBmb2xkZXJCdG5zLmZvckVhY2goZnVuY3Rpb24oZm9sZGVyQnRuKSB7XG4gICAgICAgIGZvbGRlckJ0bi5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgZm9sZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2Rlc2VsZWN0ZWRDb2xvcicpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJ0blNlbGVjdGVkQ29sb3IgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZENvbG9yJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cyAoKSB7XG4gICAgY29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKTtcbiAgICB3aGlsZShtYWluRGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5EaXNwbGF5LnJlbW92ZUNoaWxkKG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlckJ0biAoZSkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgYWRkRm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlclwiKS52YWx1ZTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhZGRGb2xkZXJJbnB1dDtcbiAgICBidXR0b24uaWQgPSAnZm9sZGVyQnRuJztcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpO1xuICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICAgICAgYnRuU2VsZWN0ZWRDb2xvcihlLnRhcmdldCk7XG4gICAgICAgIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgICAgICAgbGlua0J0blRvT2JqIChlKVxuICAgICAgICBtYWluRGlzcGxheUVsZW1lbnRzKClcbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gYWRkIG5ldyBlbGVtZW50cyBiYXNlZCBvbiBmb2xkZXIgZGV0YWlsc1xuICAgIH1cbiAgICBmb2xkZXJCdG5zLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlRm9sZGVyQnRuLFxuXHRyZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzXG59XG4iLCJpbXBvcnQgZm9sZGVycyBmcm9tICcuL2ZvbGRlcnNBcnJheSdcblxuY2xhc3MgbmV3Rm9sZGVyIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXJPYmplY3QgKCkge1xuICAgIGxldCBhZGRGb2xkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyXCIpLnZhbHVlO1xuICAgIGxldCBmb2xkZXIgPSBuZXcgbmV3Rm9sZGVyIChhZGRGb2xkZXJJbnB1dClcbiAgICBmb2xkZXJzLnB1c2goZm9sZGVyKVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb2xkZXJPYmplY3Q7IiwibGV0IGZvbGRlcnMgPSBbXG5cbl1cblxuZXhwb3J0IGRlZmF1bHQgZm9sZGVycyIsImltcG9ydCBmb2xkZXJzIGZyb20gJy4vZm9sZGVyc0FycmF5J1xuXG5sZXQgbmV3Rm9sZGVyU3VibWlzc2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRGb2xkZXInKTtcbmxldCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpO1xuXG4vLyBGdW5jdGlvbiB0byBmaW5kIGNvcnJlY3QgZm9sZGVyIG9iamVjdCBpbiBmb2xkZXJzIEFycmF5IHdoZW4gZm9sZGVyIHNlbGVjdGVkL2luaXRpYWxseSBjcmVhdGVkXG5sZXQgY29ycmVjdE9ialxuXG5mdW5jdGlvbiBsaW5rQnRuVG9PYmogKGUpIHtcbiAgICBjb3JyZWN0T2JqID0gZm9sZGVycy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRpdGxlID09PSBlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICBjb3JyZWN0T2JqID0gY29ycmVjdE9ialxufVxuXG5mdW5jdGlvbiBsaW5rRm9ybVRvT2JqICgpIHtcbiAgICBjb3JyZWN0T2JqID0gZm9sZGVycy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRpdGxlID09PSBuZXdGb2xkZXJTdWJtaXNzaW9uLnZhbHVlKVxuICAgIGNvcnJlY3RPYmogPSBjb3JyZWN0T2JqXG59XG5cbmZ1bmN0aW9uIHRpdGxlICgpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmlkID0gJ21haW5EaXNwbGF5VGl0bGUnXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb3JyZWN0T2JqLnRpdGxlO1xuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHRpdGxlKVxufVxuXG4vLyBMb2dpYyBmb3IgY291bnRpbmcgaW5jb21wbGV0ZSB0YXNrc1xubGV0IGluY29tcGxldGVUYXNrQ291bnRlciA9ICcnXG5mdW5jdGlvbiB0YXNrc1JlbWFpbmluZ0xvZ2ljICgpIHtcbmxldCB0YXNrcyA9IGNvcnJlY3RPYmoudGFza3NcbmNvbnNvbGUubG9nKHRhc2tzKVxuXG5pZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gMDtcbiAgICBjb25zb2xlLmxvZygnZGRhYWQnKVxufSBlbHNlIHtcbiAgICBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSB0YXNrcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VycmVudFZhbHVlKXtcbiAgICBpZiAoY3VycmVudFZhbHVlLmNvbXBsZXRlU3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHtcbiAgICAgICAgcmV0dXJuIGFjYyArIDE7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gU3RyaW5nKGluY29tcGxldGVUYXNrQ291bnRlcik7XG4gICAgcmV0dXJuIGluY29tcGxldGVUYXNrQ291bnRlcjtcbn1cbn1cblxuZnVuY3Rpb24gdGFza3NSZW1haW5pbmdUZXh0ICgpIHtcbiAgICBsZXQgdGFza3NSZW1haW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrc1JlbWFpbmluZy5pZCA9ICdtYWluRGlzcGxheVRhc2tzUmVtYWluaW5nJztcbiAgICB0YXNrc1JlbWFpbmluZy50ZXh0Q29udGVudCA9IGBUYXNrcyBSZW1haW5pbmc6ICR7aW5jb21wbGV0ZVRhc2tDb3VudGVyfWA7XG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQodGFza3NSZW1haW5pbmcpXG59XG5cbmZ1bmN0aW9uIG1haW5EaXNwbGF5RWxlbWVudHMoKSB7XG4gICAgdGl0bGUoKVxuICAgIHRhc2tzUmVtYWluaW5nTG9naWMoKVxuICAgIHRhc2tzUmVtYWluaW5nVGV4dCgpXG59XG5cblxuXG5cbmV4cG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50cywgbGlua0J0blRvT2JqICxsaW5rRm9ybVRvT2JqfTsiLCJpbXBvcnQgdG9kb0xpc3RJY29uIGZyb20gJy4vcGhvdG9zL3RvZG9MaXN0SWNvbi5wbmcnO1xubGV0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5EaXNwbGF5JylcblxuZnVuY3Rpb24gbG9hZFBsYWNlaG9sZGVySWNvbiAoKSB7XG4gICAgLy8gT25jZSB0aGUgZm9sZGVycyBhcnJheSBpcyBzZXQgdXAgdXNlIGFuIGlmIHN0YXRlbWVudCB0byBpbml0aWF0ZSB0aGlzIGZ1bmN0aW9uJ3MgZnVuY3Rpb25hbGl0eSBvbmx5IGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICAgIGxldCBwbGFjZWhvbGRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwbGFjZWhvbGRlckljb24uc3JjID0gdG9kb0xpc3RJY29uO1xuICAgIHBsYWNlaG9sZGVySWNvbi5pZCA9ICdwbGFjZWhvbGRlckljb24nXG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJJY29uKVxuICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdCA9IFtdO1xuICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21haW5EaXNwbGF5RW1wdHknKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGxhY2Vob2xkZXJJY29uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBMb2dpYyB0byBsb2FkIHBsYWNlaG9sZGVyIGljb24gd2hlbiB0aGUgdXNlciBoYXMgbm8gZm9sZGVyc1xuaW1wb3J0IGxvYWRQbGFjZWhvbGRlckljb24gZnJvbSAnLi9wbGFjZWhvbGRlckljb24uanMnO1xubG9hZFBsYWNlaG9sZGVySWNvbigpXG5cbi8vIExvZ2ljIHRvIG1ha2UgbmV3IGZvbGRlciB1cG9uIGZvcm0gc3VibWlzc2lvblxuaW1wb3J0IGNyZWF0ZUZvbGRlck9iamVjdCBmcm9tICcuL2NyZWF0ZUZvbGRlck9iamVjdC5qcyc7XG5pbXBvcnQge2NyZWF0ZUZvbGRlckJ0biwgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c30gZnJvbSAnLi9jcmVhdGVGb2xkZXJCdG4uanMnO1xuaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuaW1wb3J0IHtsaW5rRm9ybVRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuY29uc3QgYWRkRm9sZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyRm9ybVwiKTtcbmFkZEZvbGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzKCk7XG4gICAgY3JlYXRlRm9sZGVyT2JqZWN0KCk7XG4gICAgY3JlYXRlRm9sZGVyQnRuKGUpO1xuICAgIGxpbmtGb3JtVG9PYmooKTtcbiAgICBtYWluRGlzcGxheUVsZW1lbnRzKCk7XG5cbiAgfVxuKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9