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
/* harmony import */ var _createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFolderObject.js */ "./src/createFolderObject.js");



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
_createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder, index) => {
    let folderTitle = folder.title;
    let button = document.createElement('button');
    button.textContent = folderTitle;
    button.id = 'folderBtn';
    button.classList.add('selectedColor');
    allBtnsDeselectedColor();
    button.onclick = function (e) {
        allBtnsDeselectedColor();
        btnSelectedColor(e.target);
        removeMainDisplayElements();
        (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_0__.linkBtnToObj) (e)
        ;(0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_0__.mainDisplayElements)()
    };
    folderBtns.appendChild(folderTitle)
});
};








// function createFolderBtn () {
//     let button = document.createElement('button');
//     let addFolderInput = ''
//     if (folders.length == 0) {
//         addFolderInput = folders[0].title;
//     } else {
//         addFolderInput = folders[folders.length - 1].title;
//     }
//     addFolderInput = String(addFolderInput);
//     button.textContent = addFolderInput;
//     button.id = 'folderBtn';
//     button.classList.add('selectedColor');
//     allBtnsDeselectedColor();
//     button.onclick = function (e) {
//         allBtnsDeselectedColor();
//         btnSelectedColor(e.target);
//         removeMainDisplayElements();
//         linkBtnToObj (e)
//         mainDisplayElements()
//         // function to add new elements based on folder details
//     }
//     folderBtns.appendChild(button)
// }


/***/ }),

/***/ "./src/createFolderObject.js":
/*!***********************************!*\
  !*** ./src/createFolderObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFolderObject: () => (/* binding */ createFolderObject),
/* harmony export */   folders: () => (/* binding */ folders)
/* harmony export */ });
class newFolder {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }
  
  // Retrieve 'folders' array from Local Storage or create an empty array
  let folders = JSON.parse(localStorage.getItem('folders')) || [];
  
  function createFolderObject() {
    let addFolderInput = document.getElementById("addFolder").value;
    let folder = new newFolder(addFolderInput);
    folders.push(folder);
  
    // Update Local Storage with the updated 'folders' array
    localStorage.setItem('folders', JSON.stringify(folders));
  }
  
  

/***/ }),

/***/ "./src/initialRender.js":
/*!******************************!*\
  !*** ./src/initialRender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intialRender: () => (/* binding */ intialRender)
/* harmony export */ });
/* harmony import */ var _createFolderBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFolderBtn.js */ "./src/createFolderBtn.js");
/* harmony import */ var _mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDisplayElements.js */ "./src/mainDisplayElements.js");
/* harmony import */ var _placeholderIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholderIcon.js */ "./src/placeholderIcon.js");




function intialRender () {
(0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__.renderMostRecentFolder)();
if (_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__.correctObj == undefined) {
    (0,_placeholderIcon_js__WEBPACK_IMPORTED_MODULE_2__.loadPlaceholderIcon)();
} else {
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_1__.mainDisplayElements)();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_0__.createFolderBtn)();
    }
};



/***/ }),

/***/ "./src/mainDisplayElements.js":
/*!************************************!*\
  !*** ./src/mainDisplayElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctObj: () => (/* binding */ correctObj),
/* harmony export */   linkBtnToObj: () => (/* binding */ linkBtnToObj),
/* harmony export */   linkFormToObj: () => (/* binding */ linkFormToObj),
/* harmony export */   mainDisplayElements: () => (/* binding */ mainDisplayElements),
/* harmony export */   renderMostRecentFolder: () => (/* binding */ renderMostRecentFolder)
/* harmony export */ });
/* harmony import */ var _createFolderObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFolderObject.js */ "./src/createFolderObject.js");


let newFolderSubmission = document.getElementById('addFolder');
let mainDisplay = document.getElementById('mainDisplay');

// Function to find correct folder object in folders Array when folder selected/initially created
let correctObj

function linkBtnToObj (e) {
    correctObj = _createFolderObject_js__WEBPACK_IMPORTED_MODULE_0__.folders.find((element) => element.title === e.target.textContent);
    correctObj = correctObj;
};

function linkFormToObj () {
    correctObj = _createFolderObject_js__WEBPACK_IMPORTED_MODULE_0__.folders.find((element) => element.title === newFolderSubmission.value);
    correctObj = correctObj;
};

function renderMostRecentFolder () {
    correctObj = _createFolderObject_js__WEBPACK_IMPORTED_MODULE_0__.folders[_createFolderObject_js__WEBPACK_IMPORTED_MODULE_0__.folders.length-1];
    correctObj = correctObj;
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle';
    title.textContent = correctObj.title;
    mainDisplay.appendChild(title);
};

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
    mainDisplay.classList = [];
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
/* harmony export */   loadPlaceholderIcon: () => (/* binding */ loadPlaceholderIcon)
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
/* harmony import */ var _initialRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialRender.js */ "./src/initialRender.js");
/* harmony import */ var _createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFolderObject.js */ "./src/createFolderObject.js");
/* harmony import */ var _createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFolderBtn.js */ "./src/createFolderBtn.js");
/* harmony import */ var _mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainDisplayElements.js */ "./src/mainDisplayElements.js");
// Logic to load placeholder icon when the user has no folders or most recent folder

(0,_initialRender_js__WEBPACK_IMPORTED_MODULE_0__.intialRender)()
// Logic to make new folder upon form submission
;



const addFolderForm = document.getElementById("addFolderForm");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__.removeMainDisplayElements)();
    (0,_createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__.createFolderObject)();
    (0,_createFolderBtn_js__WEBPACK_IMPORTED_MODULE_2__.createFolderBtn)();
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_3__.linkFormToObj)();
    (0,_mainDisplayElements_js__WEBPACK_IMPORTED_MODULE_3__.mainDisplayElements)();
  }
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUw7QUFDUDs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQVk7QUFDcEIsUUFBUSw2RUFBbUI7QUFDM0I7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFLQzs7Ozs7OztBQU9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CdUQ7QUFDMEM7QUFDekM7O0FBRXhEO0FBQ0EsK0VBQXNCO0FBQ3RCLElBQUksK0RBQVU7QUFDZCxJQUFJLHdFQUFtQjtBQUN2QixFQUFFO0FBQ0YsSUFBSSw0RUFBbUI7QUFDdkIsSUFBSSxvRUFBZTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwyREFBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDJEQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMkRBQU8sQ0FBQywyREFBTztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFELHNCQUFzQjtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRHFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDZ0Q7QUFDaEQsK0RBQVk7QUFDWjtBQUNBLENBQXNFO0FBQ1U7QUFDbkI7QUFDTjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhFQUF5QjtBQUM3QixJQUFJLDBFQUFrQjtBQUN0QixJQUFJLG9FQUFlO0FBQ25CLElBQUksc0VBQWE7QUFDakIsSUFBSSw0RUFBbUI7QUFDdkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Bob3Rvcy90b2RvTGlzdEljb24ucG5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlckJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb2xkZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5pdGlhbFJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluRGlzcGxheUVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3BsYWNlaG9sZGVySWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU1N2I4MmMyMWJlMTA3ZDU3YmRmMTliYTMxNDg4NDRkLnBuZ1wiOyIsImltcG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50cywgbGlua0J0blRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnXG5pbXBvcnQge2ZvbGRlcnMsIGNyZWF0ZUZvbGRlck9iamVjdH0gZnJvbSAnLi9jcmVhdGVGb2xkZXJPYmplY3QuanMnXG5cbmZ1bmN0aW9uIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IgKCkge1xuICAgIGxldCBmb2xkZXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZvbGRlckJ0bicpXG4gICAgZm9sZGVyQnRucy5mb3JFYWNoKGZ1bmN0aW9uKGZvbGRlckJ0bikge1xuICAgICAgICBmb2xkZXJCdG4uY2xhc3NMaXN0ID0gW107XG4gICAgICAgIGZvbGRlckJ0bi5jbGFzc0xpc3QuYWRkKCdkZXNlbGVjdGVkQ29sb3InKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBidG5TZWxlY3RlZENvbG9yIChidXR0b24pIHtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMgKCkge1xuICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5EaXNwbGF5Jyk7XG4gICAgd2hpbGUobWFpbkRpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluRGlzcGxheS5yZW1vdmVDaGlsZChtYWluRGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXJCdG4gKCkge1xuZm9sZGVycy5mb3JFYWNoKChmb2xkZXIsIGluZGV4KSA9PiB7XG4gICAgbGV0IGZvbGRlclRpdGxlID0gZm9sZGVyLnRpdGxlO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBmb2xkZXJUaXRsZTtcbiAgICBidXR0b24uaWQgPSAnZm9sZGVyQnRuJztcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpO1xuICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICAgICAgYnRuU2VsZWN0ZWRDb2xvcihlLnRhcmdldCk7XG4gICAgICAgIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgICAgICAgbGlua0J0blRvT2JqIChlKVxuICAgICAgICBtYWluRGlzcGxheUVsZW1lbnRzKClcbiAgICB9O1xuICAgIGZvbGRlckJ0bnMuYXBwZW5kQ2hpbGQoZm9sZGVyVGl0bGUpXG59KTtcbn07XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUZvbGRlckJ0bixcblx0cmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c1xufVxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlRm9sZGVyQnRuICgpIHtcbi8vICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgbGV0IGFkZEZvbGRlcklucHV0ID0gJydcbi8vICAgICBpZiAoZm9sZGVycy5sZW5ndGggPT0gMCkge1xuLy8gICAgICAgICBhZGRGb2xkZXJJbnB1dCA9IGZvbGRlcnNbMF0udGl0bGU7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgYWRkRm9sZGVySW5wdXQgPSBmb2xkZXJzW2ZvbGRlcnMubGVuZ3RoIC0gMV0udGl0bGU7XG4vLyAgICAgfVxuLy8gICAgIGFkZEZvbGRlcklucHV0ID0gU3RyaW5nKGFkZEZvbGRlcklucHV0KTtcbi8vICAgICBidXR0b24udGV4dENvbnRlbnQgPSBhZGRGb2xkZXJJbnB1dDtcbi8vICAgICBidXR0b24uaWQgPSAnZm9sZGVyQnRuJztcbi8vICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpO1xuLy8gICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbi8vICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbi8vICAgICAgICAgYnRuU2VsZWN0ZWRDb2xvcihlLnRhcmdldCk7XG4vLyAgICAgICAgIHJlbW92ZU1haW5EaXNwbGF5RWxlbWVudHMoKTtcbi8vICAgICAgICAgbGlua0J0blRvT2JqIChlKVxuLy8gICAgICAgICBtYWluRGlzcGxheUVsZW1lbnRzKClcbi8vICAgICAgICAgLy8gZnVuY3Rpb24gdG8gYWRkIG5ldyBlbGVtZW50cyBiYXNlZCBvbiBmb2xkZXIgZGV0YWlsc1xuLy8gICAgIH1cbi8vICAgICBmb2xkZXJCdG5zLmFwcGVuZENoaWxkKGJ1dHRvbilcbi8vIH1cbiIsImNsYXNzIG5ld0ZvbGRlciB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFJldHJpZXZlICdmb2xkZXJzJyBhcnJheSBmcm9tIExvY2FsIFN0b3JhZ2Ugb3IgY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gIGxldCBmb2xkZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKSB8fCBbXTtcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlck9iamVjdCgpIHtcbiAgICBsZXQgYWRkRm9sZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvbGRlclwiKS52YWx1ZTtcbiAgICBsZXQgZm9sZGVyID0gbmV3IG5ld0ZvbGRlcihhZGRGb2xkZXJJbnB1dCk7XG4gICAgZm9sZGVycy5wdXNoKGZvbGRlcik7XG4gIFxuICAgIC8vIFVwZGF0ZSBMb2NhbCBTdG9yYWdlIHdpdGggdGhlIHVwZGF0ZWQgJ2ZvbGRlcnMnIGFycmF5XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJzKSk7XG4gIH1cbiAgXG4gIGV4cG9ydCB7IGZvbGRlcnMsIGNyZWF0ZUZvbGRlck9iamVjdCB9OyIsImltcG9ydCB7IGNyZWF0ZUZvbGRlckJ0biB9IGZyb20gJy4vY3JlYXRlRm9sZGVyQnRuLmpzJztcbmltcG9ydCB7cmVuZGVyTW9zdFJlY2VudEZvbGRlciwgY29ycmVjdE9iaiwgbWFpbkRpc3BsYXlFbGVtZW50c30gZnJvbSAnLi9tYWluRGlzcGxheUVsZW1lbnRzLmpzJztcbmltcG9ydCB7bG9hZFBsYWNlaG9sZGVySWNvbn0gZnJvbSAnLi9wbGFjZWhvbGRlckljb24uanMnXG5cbmZ1bmN0aW9uIGludGlhbFJlbmRlciAoKSB7XG5yZW5kZXJNb3N0UmVjZW50Rm9sZGVyKCk7XG5pZiAoY29ycmVjdE9iaiA9PSB1bmRlZmluZWQpIHtcbiAgICBsb2FkUGxhY2Vob2xkZXJJY29uKCk7XG59IGVsc2Uge1xuICAgIG1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgICBjcmVhdGVGb2xkZXJCdG4oKTtcbiAgICB9XG59O1xuXG5leHBvcnQge2ludGlhbFJlbmRlcn07IiwiaW1wb3J0IHtmb2xkZXJzfSBmcm9tICcuL2NyZWF0ZUZvbGRlck9iamVjdC5qcydcblxubGV0IG5ld0ZvbGRlclN1Ym1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRm9sZGVyJyk7XG5sZXQgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKTtcblxuLy8gRnVuY3Rpb24gdG8gZmluZCBjb3JyZWN0IGZvbGRlciBvYmplY3QgaW4gZm9sZGVycyBBcnJheSB3aGVuIGZvbGRlciBzZWxlY3RlZC9pbml0aWFsbHkgY3JlYXRlZFxubGV0IGNvcnJlY3RPYmpcblxuZnVuY3Rpb24gbGlua0J0blRvT2JqIChlKSB7XG4gICAgY29ycmVjdE9iaiA9IGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50aXRsZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGNvcnJlY3RPYmogPSBjb3JyZWN0T2JqO1xufTtcblxuZnVuY3Rpb24gbGlua0Zvcm1Ub09iaiAoKSB7XG4gICAgY29ycmVjdE9iaiA9IGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50aXRsZSA9PT0gbmV3Rm9sZGVyU3VibWlzc2lvbi52YWx1ZSk7XG4gICAgY29ycmVjdE9iaiA9IGNvcnJlY3RPYmo7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJNb3N0UmVjZW50Rm9sZGVyICgpIHtcbiAgICBjb3JyZWN0T2JqID0gZm9sZGVyc1tmb2xkZXJzLmxlbmd0aC0xXTtcbiAgICBjb3JyZWN0T2JqID0gY29ycmVjdE9iajtcbn1cblxuZnVuY3Rpb24gdGl0bGUgKCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUuaWQgPSAnbWFpbkRpc3BsYXlUaXRsZSc7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb3JyZWN0T2JqLnRpdGxlO1xuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHRpdGxlKTtcbn07XG5cbi8vIExvZ2ljIGZvciBjb3VudGluZyBpbmNvbXBsZXRlIHRhc2tzXG5sZXQgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gJydcblxuZnVuY3Rpb24gdGFza3NSZW1haW5pbmdMb2dpYyAoKSB7XG4gICAgbGV0IHRhc2tzID0gY29ycmVjdE9iai50YXNrcztcbiAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG5cbiAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluY29tcGxldGVUYXNrQ291bnRlciA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gdGFza3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlLmNvbXBsZXRlU3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIDApO1xuICAgICAgICBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSBTdHJpbmcoaW5jb21wbGV0ZVRhc2tDb3VudGVyKTtcbiAgICAgICAgcmV0dXJuIGluY29tcGxldGVUYXNrQ291bnRlcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRhc2tzUmVtYWluaW5nVGV4dCAoKSB7XG4gICAgbGV0IHRhc2tzUmVtYWluaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza3NSZW1haW5pbmcuaWQgPSAnbWFpbkRpc3BsYXlUYXNrc1JlbWFpbmluZyc7XG4gICAgdGFza3NSZW1haW5pbmcudGV4dENvbnRlbnQgPSBgVGFza3MgUmVtYWluaW5nOiAke2luY29tcGxldGVUYXNrQ291bnRlcn1gO1xuICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tzUmVtYWluaW5nKVxufVxuXG5mdW5jdGlvbiBtYWluRGlzcGxheUVsZW1lbnRzICgpIHtcbiAgICBtYWluRGlzcGxheS5jbGFzc0xpc3QgPSBbXTtcbiAgICB0aXRsZSgpXG4gICAgdGFza3NSZW1haW5pbmdMb2dpYygpXG4gICAgdGFza3NSZW1haW5pbmdUZXh0KClcbn1cblxuXG5cblxuZXhwb3J0IHttYWluRGlzcGxheUVsZW1lbnRzLCBjb3JyZWN0T2JqLCBsaW5rQnRuVG9PYmogLGxpbmtGb3JtVG9PYmosIHJlbmRlck1vc3RSZWNlbnRGb2xkZXJ9OyIsImltcG9ydCB0b2RvTGlzdEljb24gZnJvbSAnLi9waG90b3MvdG9kb0xpc3RJY29uLnBuZyc7XG5sZXQgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKVxuXG5mdW5jdGlvbiBsb2FkUGxhY2Vob2xkZXJJY29uICgpIHtcbiAgICAvLyBPbmNlIHRoZSBmb2xkZXJzIGFycmF5IGlzIHNldCB1cCB1c2UgYW4gaWYgc3RhdGVtZW50IHRvIGluaXRpYXRlIHRoaXMgZnVuY3Rpb24ncyBmdW5jdGlvbmFsaXR5IG9ubHkgaWYgdGhlIGFycmF5IGlzIGVtcHR5XG4gICAgbGV0IHBsYWNlaG9sZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBsYWNlaG9sZGVySWNvbi5zcmMgPSB0b2RvTGlzdEljb247XG4gICAgcGxhY2Vob2xkZXJJY29uLmlkID0gJ3BsYWNlaG9sZGVySWNvbidcbiAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChwbGFjZWhvbGRlckljb24pXG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0ID0gW107XG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbWFpbkRpc3BsYXlFbXB0eScpXG59XG5cbmV4cG9ydCB7bG9hZFBsYWNlaG9sZGVySWNvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIExvZ2ljIHRvIGxvYWQgcGxhY2Vob2xkZXIgaWNvbiB3aGVuIHRoZSB1c2VyIGhhcyBubyBmb2xkZXJzIG9yIG1vc3QgcmVjZW50IGZvbGRlclxuaW1wb3J0IHtpbnRpYWxSZW5kZXJ9IGZyb20gJy4vaW5pdGlhbFJlbmRlci5qcyc7XG5pbnRpYWxSZW5kZXIoKVxuLy8gTG9naWMgdG8gbWFrZSBuZXcgZm9sZGVyIHVwb24gZm9ybSBzdWJtaXNzaW9uXG5pbXBvcnQgeyBmb2xkZXJzLCBjcmVhdGVGb2xkZXJPYmplY3QgfSBmcm9tICcuL2NyZWF0ZUZvbGRlck9iamVjdC5qcyc7XG5pbXBvcnQge2NyZWF0ZUZvbGRlckJ0biwgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c30gZnJvbSAnLi9jcmVhdGVGb2xkZXJCdG4uanMnO1xuaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuaW1wb3J0IHtsaW5rRm9ybVRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuY29uc3QgYWRkRm9sZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyRm9ybVwiKTtcbmFkZEZvbGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzKCk7XG4gICAgY3JlYXRlRm9sZGVyT2JqZWN0KCk7XG4gICAgY3JlYXRlRm9sZGVyQnRuKCk7XG4gICAgbGlua0Zvcm1Ub09iaigpO1xuICAgIG1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgfVxuKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9