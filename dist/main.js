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
/* harmony import */ var _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersArray.js */ "./src/foldersArray.js");
/* harmony import */ var _mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDisplayElements.js */ "./src/mainDisplayElements.js");
// Im about to chaane createFolderBtn so that it gets its textcontent from the most recent object in the array 'folders' rather than the form submission's value





let folderBtns = document.getElementById("folderBtns")

function allBtnsDeselectedColor () {
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

function createFolderBtn () {
    let button = document.createElement('button');
    let addFolderInput = ''
    if (_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders.length == 0) {
        addFolderInput = _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders[0].title;
    } else {
        addFolderInput = _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders[_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders.length - 1].title;
    }
    addFolderInput = String(addFolderInput);
    button.textContent = addFolderInput;
    button.id = 'folderBtn';
    button.classList.add('selectedColor');
    allBtnsDeselectedColor();
    button.onclick = function (e) {
        allBtnsDeselectedColor();
        btnSelectedColor(e.target);
        removeMainDisplayElements();
        (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__.linkBtnToObj) (e)
        ;(0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__.mainDisplayElements)()
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
/* harmony import */ var _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foldersArray.js */ "./src/foldersArray.js");


class newFolder {
    constructor (title) {
        this.title = title;
        this.tasks = [];
    }
}

function createFolderObject () {
    let addFolderInput = document.getElementById("addFolder").value;
    let folder = new newFolder (addFolderInput);
    if (!Array.isArray(_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders)) {
        _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders = [];
    }
    _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders.push(folder);
    (0,_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.setFoldersToLocalStorage)(_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders);
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
/* harmony export */   folders: () => (/* binding */ folders),
/* harmony export */   serializedFolders: () => (/* binding */ serializedFolders),
/* harmony export */   setFoldersToLocalStorage: () => (/* binding */ setFoldersToLocalStorage)
/* harmony export */ });
let folders = [

];

const serializedFolders = JSON.stringify(folders)

function setFoldersToLocalStorage (serializedFolders) {
    localStorage.setItem('folders', serializedFolders)
};



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
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__.folders.find((element) => element.title === e.target.textContent)
    correctObj = correctObj
}

function linkFormToObj () {
    correctObj = _foldersArray__WEBPACK_IMPORTED_MODULE_0__.folders.find((element) => element.title === newFolderSubmission.value);
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

let serializedFolders = JSON.stringify(_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders)
localStorage.setItem('folders', serializedFolders)
let storedFolders = JSON.parse(localStorage.getItem('folders'));
if (storedFolders) {
  _foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders.length = 0;
  Array.prototype.push.apply(_foldersArray_js__WEBPACK_IMPORTED_MODULE_0__.folders, storedFolders); 
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
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_3__.createFolderBtn)();
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_4__.linkFormToObj)();
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_4__.mainDisplayElements)();
  }
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG9MaXN0SWNvbi5wbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRm9sZGVyQnRuLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlck9iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb2xkZXJzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbkRpc3BsYXlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wbGFjZWhvbGRlckljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NTdiODJjMjFiZTEwN2Q1N2JkZjE5YmEzMTQ4ODQ0ZC5wbmdcIjsiLCIvLyBJbSBhYm91dCB0byBjaGFhbmUgY3JlYXRlRm9sZGVyQnRuIHNvIHRoYXQgaXQgZ2V0cyBpdHMgdGV4dGNvbnRlbnQgZnJvbSB0aGUgbW9zdCByZWNlbnQgb2JqZWN0IGluIHRoZSBhcnJheSAnZm9sZGVycycgcmF0aGVyIHRoYW4gdGhlIGZvcm0gc3VibWlzc2lvbidzIHZhbHVlXG5cbmltcG9ydCB7Zm9sZGVyc30gZnJvbSAnLi9mb2xkZXJzQXJyYXkuanMnO1xuaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzLCBsaW5rQnRuVG9PYmp9IGZyb20gJy4vbWFpbkRpc3BsYXlFbGVtZW50cy5qcydcblxuXG5sZXQgZm9sZGVyQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVyQnRuc1wiKVxuXG5mdW5jdGlvbiBhbGxCdG5zRGVzZWxlY3RlZENvbG9yICgpIHtcbiAgICBsZXQgZm9sZGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb2xkZXJCdG4nKVxuICAgIGZvbGRlckJ0bnMuZm9yRWFjaChmdW5jdGlvbihmb2xkZXJCdG4pIHtcbiAgICAgICAgZm9sZGVyQnRuLmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICBmb2xkZXJCdG4uY2xhc3NMaXN0LmFkZCgnZGVzZWxlY3RlZENvbG9yJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYnRuU2VsZWN0ZWRDb2xvciAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkQ29sb3InKVxufVxuXG5mdW5jdGlvbiByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpO1xuICAgIHdoaWxlKG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkRpc3BsYXkucmVtb3ZlQ2hpbGQobWFpbkRpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlRm9sZGVyQnRuICgpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGFkZEZvbGRlcklucHV0ID0gJydcbiAgICBpZiAoZm9sZGVycy5sZW5ndGggPT0gMCkge1xuICAgICAgICBhZGRGb2xkZXJJbnB1dCA9IGZvbGRlcnNbMF0udGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkRm9sZGVySW5wdXQgPSBmb2xkZXJzW2ZvbGRlcnMubGVuZ3RoIC0gMV0udGl0bGU7XG4gICAgfVxuICAgIGFkZEZvbGRlcklucHV0ID0gU3RyaW5nKGFkZEZvbGRlcklucHV0KTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhZGRGb2xkZXJJbnB1dDtcbiAgICBidXR0b24uaWQgPSAnZm9sZGVyQnRuJztcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpO1xuICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICAgICAgYnRuU2VsZWN0ZWRDb2xvcihlLnRhcmdldCk7XG4gICAgICAgIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgICAgICAgbGlua0J0blRvT2JqIChlKVxuICAgICAgICBtYWluRGlzcGxheUVsZW1lbnRzKClcbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gYWRkIG5ldyBlbGVtZW50cyBiYXNlZCBvbiBmb2xkZXIgZGV0YWlsc1xuICAgIH1cbiAgICBmb2xkZXJCdG5zLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlRm9sZGVyQnRuLFxuXHRyZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzXG59XG4iLCJpbXBvcnQgeyBmb2xkZXJzIGFzIGZvbGRlcnNBcnJheSwgc2V0Rm9sZGVyc1RvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9mb2xkZXJzQXJyYXkuanMnO1xuXG5jbGFzcyBuZXdGb2xkZXIge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlck9iamVjdCAoKSB7XG4gICAgbGV0IGFkZEZvbGRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb2xkZXJcIikudmFsdWU7XG4gICAgbGV0IGZvbGRlciA9IG5ldyBuZXdGb2xkZXIgKGFkZEZvbGRlcklucHV0KTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9sZGVyc0FycmF5KSkge1xuICAgICAgICBmb2xkZXJzQXJyYXkgPSBbXTtcbiAgICB9XG4gICAgZm9sZGVyc0FycmF5LnB1c2goZm9sZGVyKTtcbiAgICBzZXRGb2xkZXJzVG9Mb2NhbFN0b3JhZ2UoZm9sZGVyc0FycmF5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9sZGVyT2JqZWN0OyIsImxldCBmb2xkZXJzID0gW1xuXG5dO1xuXG5jb25zdCBzZXJpYWxpemVkRm9sZGVycyA9IEpTT04uc3RyaW5naWZ5KGZvbGRlcnMpXG5cbmZ1bmN0aW9uIHNldEZvbGRlcnNUb0xvY2FsU3RvcmFnZSAoc2VyaWFsaXplZEZvbGRlcnMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIHNlcmlhbGl6ZWRGb2xkZXJzKVxufTtcblxuZXhwb3J0IHtmb2xkZXJzLCBzZXRGb2xkZXJzVG9Mb2NhbFN0b3JhZ2UsIHNlcmlhbGl6ZWRGb2xkZXJzfTsiLCJpbXBvcnQge2ZvbGRlcnN9IGZyb20gJy4vZm9sZGVyc0FycmF5J1xuXG5sZXQgbmV3Rm9sZGVyU3VibWlzc2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRGb2xkZXInKTtcbmxldCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpO1xuXG4vLyBGdW5jdGlvbiB0byBmaW5kIGNvcnJlY3QgZm9sZGVyIG9iamVjdCBpbiBmb2xkZXJzIEFycmF5IHdoZW4gZm9sZGVyIHNlbGVjdGVkL2luaXRpYWxseSBjcmVhdGVkXG5sZXQgY29ycmVjdE9ialxuXG5mdW5jdGlvbiBsaW5rQnRuVG9PYmogKGUpIHtcbiAgICBjb3JyZWN0T2JqID0gZm9sZGVycy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRpdGxlID09PSBlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICBjb3JyZWN0T2JqID0gY29ycmVjdE9ialxufVxuXG5mdW5jdGlvbiBsaW5rRm9ybVRvT2JqICgpIHtcbiAgICBjb3JyZWN0T2JqID0gZm9sZGVycy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRpdGxlID09PSBuZXdGb2xkZXJTdWJtaXNzaW9uLnZhbHVlKTtcbiAgICBjb3JyZWN0T2JqID0gY29ycmVjdE9iajtcbn1cblxuZnVuY3Rpb24gdGl0bGUgKCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUuaWQgPSAnbWFpbkRpc3BsYXlUaXRsZSc7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb3JyZWN0T2JqLnRpdGxlO1xuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHRpdGxlKTtcbn1cblxuLy8gTG9naWMgZm9yIGNvdW50aW5nIGluY29tcGxldGUgdGFza3NcbmxldCBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSAnJ1xuXG5mdW5jdGlvbiB0YXNrc1JlbWFpbmluZ0xvZ2ljICgpIHtcbiAgICBsZXQgdGFza3MgPSBjb3JyZWN0T2JqLnRhc2tzO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSB0YXNrcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUuY29tcGxldGVTdGF0dXMgPT09ICdpbmNvbXBsZXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIGFjYyArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIGluY29tcGxldGVUYXNrQ291bnRlciA9IFN0cmluZyhpbmNvbXBsZXRlVGFza0NvdW50ZXIpO1xuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVRhc2tDb3VudGVyO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFza3NSZW1haW5pbmdUZXh0ICgpIHtcbiAgICBsZXQgdGFza3NSZW1haW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrc1JlbWFpbmluZy5pZCA9ICdtYWluRGlzcGxheVRhc2tzUmVtYWluaW5nJztcbiAgICB0YXNrc1JlbWFpbmluZy50ZXh0Q29udGVudCA9IGBUYXNrcyBSZW1haW5pbmc6ICR7aW5jb21wbGV0ZVRhc2tDb3VudGVyfWA7XG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQodGFza3NSZW1haW5pbmcpXG59XG5cbmZ1bmN0aW9uIG1haW5EaXNwbGF5RWxlbWVudHMgKCkge1xuICAgIHRpdGxlKClcbiAgICB0YXNrc1JlbWFpbmluZ0xvZ2ljKClcbiAgICB0YXNrc1JlbWFpbmluZ1RleHQoKVxufVxuXG5cblxuXG5leHBvcnQge21haW5EaXNwbGF5RWxlbWVudHMsIGxpbmtCdG5Ub09iaiAsbGlua0Zvcm1Ub09ian07IiwiaW1wb3J0IHRvZG9MaXN0SWNvbiBmcm9tICcuL3Bob3Rvcy90b2RvTGlzdEljb24ucG5nJztcbmxldCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpXG5cbmZ1bmN0aW9uIGxvYWRQbGFjZWhvbGRlckljb24gKCkge1xuICAgIC8vIE9uY2UgdGhlIGZvbGRlcnMgYXJyYXkgaXMgc2V0IHVwIHVzZSBhbiBpZiBzdGF0ZW1lbnQgdG8gaW5pdGlhdGUgdGhpcyBmdW5jdGlvbidzIGZ1bmN0aW9uYWxpdHkgb25seSBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAgICBsZXQgcGxhY2Vob2xkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGxhY2Vob2xkZXJJY29uLnNyYyA9IHRvZG9MaXN0SWNvbjtcbiAgICBwbGFjZWhvbGRlckljb24uaWQgPSAncGxhY2Vob2xkZXJJY29uJ1xuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVySWNvbilcbiAgICBtYWluRGlzcGxheS5jbGFzc0xpc3QgPSBbXTtcbiAgICBtYWluRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtYWluRGlzcGxheUVtcHR5Jylcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBsYWNlaG9sZGVySWNvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gTG9naWMgdG8gbG9hZCBsb2NhbCBzdG9yYWdlXG5pbXBvcnQge2ZvbGRlcnN9IGZyb20gJy4vZm9sZGVyc0FycmF5LmpzJztcbmxldCBzZXJpYWxpemVkRm9sZGVycyA9IEpTT04uc3RyaW5naWZ5KGZvbGRlcnMpXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIHNlcmlhbGl6ZWRGb2xkZXJzKVxubGV0IHN0b3JlZEZvbGRlcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO1xuaWYgKHN0b3JlZEZvbGRlcnMpIHtcbiAgZm9sZGVycy5sZW5ndGggPSAwO1xuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShmb2xkZXJzLCBzdG9yZWRGb2xkZXJzKTsgXG59XG5cbi8vIExvZ2ljIHRvIGxvYWQgcGxhY2Vob2xkZXIgaWNvbiB3aGVuIHRoZSB1c2VyIGhhcyBubyBmb2xkZXJzXG5pbXBvcnQgbG9hZFBsYWNlaG9sZGVySWNvbiBmcm9tICcuL3BsYWNlaG9sZGVySWNvbi5qcyc7XG5sb2FkUGxhY2Vob2xkZXJJY29uKClcblxuLy8gTG9naWMgdG8gbWFrZSBuZXcgZm9sZGVyIHVwb24gZm9ybSBzdWJtaXNzaW9uXG5pbXBvcnQgY3JlYXRlRm9sZGVyT2JqZWN0IGZyb20gJy4vY3JlYXRlRm9sZGVyT2JqZWN0LmpzJztcbmltcG9ydCB7Y3JlYXRlRm9sZGVyQnRuLCByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL2NyZWF0ZUZvbGRlckJ0bi5qcyc7XG5pbXBvcnQge21haW5EaXNwbGF5RWxlbWVudHN9IGZyb20gJy4vbWFpbkRpc3BsYXlFbGVtZW50cy5qcyc7XG5pbXBvcnQge2xpbmtGb3JtVG9PYmp9IGZyb20gJy4vbWFpbkRpc3BsYXlFbGVtZW50cy5qcyc7XG5jb25zdCBhZGRGb2xkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb2xkZXJGb3JtXCIpO1xuYWRkRm9sZGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgICBjcmVhdGVGb2xkZXJPYmplY3QoKTtcbiAgICBjcmVhdGVGb2xkZXJCdG4oKTtcbiAgICBsaW5rRm9ybVRvT2JqKCk7XG4gICAgbWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICB9XG4pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=