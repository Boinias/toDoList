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
    correctObj = correctObj.title
}

function linkFormToObj () {
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__["default"].find((element) => element.title === newFolderSubmission.value)
    correctObj = correctObj.title
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle'
    title.textContent = correctObj;
    mainDisplay.appendChild(title)
}

// Logic for counting incomplete tasks
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

function mainDisplayElements() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTDs7O0FBRzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQVk7QUFDcEIsUUFBUSw2RUFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ21DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBTztBQUNYOzs7OztBQUtBLGlFQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUNsQmpDOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pxQjs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscURBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHNCQUFzQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxtQkFBbUI7Ozs7OztVQ2JsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ3VEO0FBQ3ZELCtEQUFtQjs7QUFFbkI7QUFDQSxDQUF5RDtBQUN1QjtBQUNuQjtBQUNOO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLElBQUksOEVBQXlCO0FBQzdCLElBQUksa0VBQWtCO0FBQ3RCLElBQUksb0VBQWU7QUFDbkIsSUFBSSxzRUFBYTtBQUNqQixJQUFJLDRFQUFtQjs7QUFFdkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Bob3Rvcy90b2RvTGlzdEljb24ucG5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlckJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb2xkZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9sZGVyc0FycmF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW5EaXNwbGF5RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGxhY2Vob2xkZXJJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTU3YjgyYzIxYmUxMDdkNTdiZGYxOWJhMzE0ODg0NGQucG5nXCI7IiwiaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzLCBsaW5rQnRuVG9PYmp9IGZyb20gJy4vbWFpbkRpc3BsYXlFbGVtZW50cy5qcydcblxuXG5sZXQgYWRkRm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlclwiKS52YWx1ZTtcbmxldCBmb2xkZXJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJCdG5zXCIpXG5cbmZ1bmN0aW9uIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IgKCkge1xuICAgIGxldCBmb2xkZXJCdG5zUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlckJ0bnMnKVxuICAgIGxldCBmb2xkZXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZvbGRlckJ0bicpXG4gICAgZm9sZGVyQnRucy5mb3JFYWNoKGZ1bmN0aW9uKGZvbGRlckJ0bikge1xuICAgICAgICBmb2xkZXJCdG4uY2xhc3NMaXN0ID0gW107XG4gICAgICAgIGZvbGRlckJ0bi5jbGFzc0xpc3QuYWRkKCdkZXNlbGVjdGVkQ29sb3InKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBidG5TZWxlY3RlZENvbG9yIChidXR0b24pIHtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMgKCkge1xuICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5EaXNwbGF5Jyk7XG4gICAgd2hpbGUobWFpbkRpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluRGlzcGxheS5yZW1vdmVDaGlsZChtYWluRGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXJCdG4gKGUpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGFkZEZvbGRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb2xkZXJcIikudmFsdWU7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYWRkRm9sZGVySW5wdXQ7XG4gICAgYnV0dG9uLmlkID0gJ2ZvbGRlckJ0bic7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkQ29sb3InKTtcbiAgICBhbGxCdG5zRGVzZWxlY3RlZENvbG9yKCk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBhbGxCdG5zRGVzZWxlY3RlZENvbG9yKCk7XG4gICAgICAgIGJ0blNlbGVjdGVkQ29sb3IoZS50YXJnZXQpO1xuICAgICAgICByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzKCk7XG4gICAgICAgIGxpbmtCdG5Ub09iaiAoZSlcbiAgICAgICAgbWFpbkRpc3BsYXlFbGVtZW50cygpXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIGFkZCBuZXcgZWxlbWVudHMgYmFzZWQgb24gZm9sZGVyIGRldGFpbHNcbiAgICB9XG4gICAgZm9sZGVyQnRucy5hcHBlbmRDaGlsZChidXR0b24pXG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUZvbGRlckJ0bixcblx0cmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c1xufVxuIiwiaW1wb3J0IGZvbGRlcnMgZnJvbSAnLi9mb2xkZXJzQXJyYXknXG5cbmNsYXNzIG5ld0ZvbGRlciB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9sZGVyT2JqZWN0ICgpIHtcbiAgICBsZXQgYWRkRm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlclwiKS52YWx1ZTtcbiAgICBsZXQgZm9sZGVyID0gbmV3IG5ld0ZvbGRlciAoYWRkRm9sZGVySW5wdXQpXG4gICAgZm9sZGVycy5wdXNoKGZvbGRlcilcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9sZGVyT2JqZWN0OyIsImxldCBmb2xkZXJzID0gW1xuXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZvbGRlcnMiLCJpbXBvcnQgZm9sZGVycyBmcm9tICcuL2ZvbGRlcnNBcnJheSdcblxubGV0IG5ld0ZvbGRlclN1Ym1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRm9sZGVyJyk7XG5sZXQgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKTtcblxuLy8gRnVuY3Rpb24gdG8gZmluZCBjb3JyZWN0IGZvbGRlciBvYmplY3QgaW4gZm9sZGVycyBBcnJheSB3aGVuIGZvbGRlciBzZWxlY3RlZC9pbml0aWFsbHkgY3JlYXRlZFxubGV0IGNvcnJlY3RPYmpcblxuZnVuY3Rpb24gbGlua0J0blRvT2JqIChlKSB7XG4gICAgY29ycmVjdE9iaiA9IGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50aXRsZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpXG4gICAgY29ycmVjdE9iaiA9IGNvcnJlY3RPYmoudGl0bGVcbn1cblxuZnVuY3Rpb24gbGlua0Zvcm1Ub09iaiAoKSB7XG4gICAgY29ycmVjdE9iaiA9IGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50aXRsZSA9PT0gbmV3Rm9sZGVyU3VibWlzc2lvbi52YWx1ZSlcbiAgICBjb3JyZWN0T2JqID0gY29ycmVjdE9iai50aXRsZVxufVxuXG5mdW5jdGlvbiB0aXRsZSAoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZS5pZCA9ICdtYWluRGlzcGxheVRpdGxlJ1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29ycmVjdE9iajtcbiAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZSlcbn1cblxuLy8gTG9naWMgZm9yIGNvdW50aW5nIGluY29tcGxldGUgdGFza3NcbmxldCB0YXNrcyA9IGNvcnJlY3RPYmoudGFza3NcbmNvbnN0IHVuY29tcGxldGVUYXNrQ291bnRlciA9IHRhc2tzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyZW50VmFsdWUpe1xuICAgIGlmIChjdXJyZW50VmFsdWUuY29tcGxldGVTdGF0dXMgPT09ICdpbmNvbXBsZXRlJykge1xuICAgICAgICByZXR1cm4gYWNjICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICB1bmNvbXBsZXRlVGFza0NvdW50ZXIgPSBTdHJpbmcodW5jb21wbGV0ZVRhc2tDb3VudGVyKTtcblxuZnVuY3Rpb24gdGFza3NSZW1haW5pbmdUZXh0ICgpIHtcbiAgICBsZXQgdGFza3NSZW1haW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tzUmVtYWluaW5nLmlkID0gJ21haW5EaXNwbGF5VGFza3NSZW1haW5pbmcnXG4gICAgdGFza3NSZW1haW5pbmcudGV4dENvbnRlbnQgPSBgVGFza3MgUmVtYWluaW5nOiR7dW5jb21wbGV0ZVRhc2tDb3VudGVyfWBcbn1cblxuZnVuY3Rpb24gbWFpbkRpc3BsYXlFbGVtZW50cygpIHtcbiAgICB0aXRsZSgpXG59XG5cblxuXG5cbmV4cG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50cywgbGlua0J0blRvT2JqICxsaW5rRm9ybVRvT2JqfTsiLCJpbXBvcnQgdG9kb0xpc3RJY29uIGZyb20gJy4vcGhvdG9zL3RvZG9MaXN0SWNvbi5wbmcnO1xubGV0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5EaXNwbGF5JylcblxuZnVuY3Rpb24gbG9hZFBsYWNlaG9sZGVySWNvbiAoKSB7XG4gICAgLy8gT25jZSB0aGUgZm9sZGVycyBhcnJheSBpcyBzZXQgdXAgdXNlIGFuIGlmIHN0YXRlbWVudCB0byBpbml0aWF0ZSB0aGlzIGZ1bmN0aW9uJ3MgZnVuY3Rpb25hbGl0eSBvbmx5IGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICAgIGxldCBwbGFjZWhvbGRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwbGFjZWhvbGRlckljb24uc3JjID0gdG9kb0xpc3RJY29uO1xuICAgIHBsYWNlaG9sZGVySWNvbi5pZCA9ICdwbGFjZWhvbGRlckljb24nXG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJJY29uKVxuICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdCA9IFtdO1xuICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21haW5EaXNwbGF5RW1wdHknKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGxhY2Vob2xkZXJJY29uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBMb2dpYyB0byBsb2FkIHBsYWNlaG9sZGVyIGljb24gd2hlbiB0aGUgdXNlciBoYXMgbm8gZm9sZGVyc1xuaW1wb3J0IGxvYWRQbGFjZWhvbGRlckljb24gZnJvbSAnLi9wbGFjZWhvbGRlckljb24uanMnO1xubG9hZFBsYWNlaG9sZGVySWNvbigpXG5cbi8vIExvZ2ljIHRvIG1ha2UgbmV3IGZvbGRlciB1cG9uIGZvcm0gc3VibWlzc2lvblxuaW1wb3J0IGNyZWF0ZUZvbGRlck9iamVjdCBmcm9tICcuL2NyZWF0ZUZvbGRlck9iamVjdC5qcyc7XG5pbXBvcnQge2NyZWF0ZUZvbGRlckJ0biwgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c30gZnJvbSAnLi9jcmVhdGVGb2xkZXJCdG4uanMnO1xuaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuaW1wb3J0IHtsaW5rRm9ybVRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuY29uc3QgYWRkRm9sZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyRm9ybVwiKTtcbmFkZEZvbGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzKCk7XG4gICAgY3JlYXRlRm9sZGVyT2JqZWN0KCk7XG4gICAgY3JlYXRlRm9sZGVyQnRuKGUpO1xuICAgIGxpbmtGb3JtVG9PYmooKTtcbiAgICBtYWluRGlzcGxheUVsZW1lbnRzKCk7XG5cbiAgfVxuKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9