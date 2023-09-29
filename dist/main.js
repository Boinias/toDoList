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



let folderBtnsDiv = document.getElementById('folderBtns');

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
    folderBtnsDiv.innerHTML = '';
    _createFolderObject_js__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
        let button = document.createElement('button');
        let folderTitle = folder.title;
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
        folderBtnsDiv.appendChild(button)
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

// function to display all tasks
function displayTasks () {
let tasks = document.createElement('div')
correctObj.tasks.forEach(element => {
    let taskDiv = document.createElement('div');
    let name = document.createElement('h')
    name.textContent = element.name;
    taskDiv.appendChild(name)
    let dueDate = document.createElement('div')
    dueDate.textContent = element.dueDate
    taskDiv.appendChild(dueDate)
    let priority = document.createElement('div')
    priority.textContent = element.priority;
    taskDiv.appendChild(priority)
    let description = document.createElement('div')
    description.textContent = element.description
    taskDiv.appendChild(description)
    tasks.appendChild(taskDiv)
});
mainDisplay.appendChild(tasks)
}

// function to add task


function mainDisplayElements () {
    mainDisplay.classList = [];
    title()
    tasksRemainingLogic()
    tasksRemainingText()
    displayTasks()
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
    addFolderForm.reset();
  }
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsSUFBSSw4RUFBeUI7QUFDN0IsSUFBSSwwRUFBa0I7QUFDdEIsSUFBSSxvRUFBZTtBQUNuQixJQUFJLHNFQUFhO0FBQ2pCLElBQUksNEVBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Bob3Rvcy90b2RvTGlzdEljb24ucG5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvbGRlckJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb2xkZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5pdGlhbFJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluRGlzcGxheUVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3BsYWNlaG9sZGVySWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU1N2I4MmMyMWJlMTA3ZDU3YmRmMTliYTMxNDg4NDRkLnBuZ1wiOyIsImltcG9ydCB7bWFpbkRpc3BsYXlFbGVtZW50cywgbGlua0J0blRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnXG5pbXBvcnQge2ZvbGRlcnMsIGNyZWF0ZUZvbGRlck9iamVjdH0gZnJvbSAnLi9jcmVhdGVGb2xkZXJPYmplY3QuanMnXG5cbmxldCBmb2xkZXJCdG5zRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlckJ0bnMnKTtcblxuZnVuY3Rpb24gYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvciAoKSB7XG4gICAgbGV0IGZvbGRlckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZm9sZGVyQnRuJylcbiAgICBmb2xkZXJCdG5zLmZvckVhY2goZnVuY3Rpb24oZm9sZGVyQnRuKSB7XG4gICAgICAgIGZvbGRlckJ0bi5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgZm9sZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2Rlc2VsZWN0ZWRDb2xvcicpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJ0blNlbGVjdGVkQ29sb3IgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZENvbG9yJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cyAoKSB7XG4gICAgY29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKTtcbiAgICB3aGlsZShtYWluRGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5EaXNwbGF5LnJlbW92ZUNoaWxkKG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlckJ0biAoKSB7XG4gICAgZm9sZGVyQnRuc0Rpdi5pbm5lckhUTUwgPSAnJztcbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBmb2xkZXJUaXRsZSA9IGZvbGRlci50aXRsZTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gZm9sZGVyVGl0bGU7XG4gICAgICAgIGJ1dHRvbi5pZCA9ICdmb2xkZXJCdG4nO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRDb2xvcicpO1xuICAgICAgICBhbGxCdG5zRGVzZWxlY3RlZENvbG9yKCk7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGFsbEJ0bnNEZXNlbGVjdGVkQ29sb3IoKTtcbiAgICAgICAgICAgIGJ0blNlbGVjdGVkQ29sb3IoZS50YXJnZXQpO1xuICAgICAgICAgICAgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICAgICAgICAgICAgbGlua0J0blRvT2JqIChlKVxuICAgICAgICAgICAgbWFpbkRpc3BsYXlFbGVtZW50cygpXG4gICAgICAgIH07XG4gICAgICAgIGZvbGRlckJ0bnNEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtcblx0Y3JlYXRlRm9sZGVyQnRuLFxuXHRyZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzXG59XG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVGb2xkZXJCdG4gKCkge1xuLy8gICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vICAgICBsZXQgYWRkRm9sZGVySW5wdXQgPSAnJ1xuLy8gICAgIGlmIChmb2xkZXJzLmxlbmd0aCA9PSAwKSB7XG4vLyAgICAgICAgIGFkZEZvbGRlcklucHV0ID0gZm9sZGVyc1swXS50aXRsZTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBhZGRGb2xkZXJJbnB1dCA9IGZvbGRlcnNbZm9sZGVycy5sZW5ndGggLSAxXS50aXRsZTtcbi8vICAgICB9XG4vLyAgICAgYWRkRm9sZGVySW5wdXQgPSBTdHJpbmcoYWRkRm9sZGVySW5wdXQpO1xuLy8gICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFkZEZvbGRlcklucHV0O1xuLy8gICAgIGJ1dHRvbi5pZCA9ICdmb2xkZXJCdG4nO1xuLy8gICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZENvbG9yJyk7XG4vLyAgICAgYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvcigpO1xuLy8gICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgYWxsQnRuc0Rlc2VsZWN0ZWRDb2xvcigpO1xuLy8gICAgICAgICBidG5TZWxlY3RlZENvbG9yKGUudGFyZ2V0KTtcbi8vICAgICAgICAgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50cygpO1xuLy8gICAgICAgICBsaW5rQnRuVG9PYmogKGUpXG4vLyAgICAgICAgIG1haW5EaXNwbGF5RWxlbWVudHMoKVxuLy8gICAgICAgICAvLyBmdW5jdGlvbiB0byBhZGQgbmV3IGVsZW1lbnRzIGJhc2VkIG9uIGZvbGRlciBkZXRhaWxzXG4vLyAgICAgfVxuLy8gICAgIGZvbGRlckJ0bnMuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuLy8gfVxuIiwiY2xhc3MgbmV3Rm9sZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gUmV0cmlldmUgJ2ZvbGRlcnMnIGFycmF5IGZyb20gTG9jYWwgU3RvcmFnZSBvciBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgbGV0IGZvbGRlcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpIHx8IFtdO1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlRm9sZGVyT2JqZWN0KCkge1xuICAgIGxldCBhZGRGb2xkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyXCIpLnZhbHVlO1xuICAgIGxldCBmb2xkZXIgPSBuZXcgbmV3Rm9sZGVyKGFkZEZvbGRlcklucHV0KTtcbiAgICBmb2xkZXJzLnB1c2goZm9sZGVyKTtcbiAgXG4gICAgLy8gVXBkYXRlIExvY2FsIFN0b3JhZ2Ugd2l0aCB0aGUgdXBkYXRlZCAnZm9sZGVycycgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlcnMpKTtcbiAgfVxuICBcbiAgZXhwb3J0IHsgZm9sZGVycywgY3JlYXRlRm9sZGVyT2JqZWN0IH07IiwiaW1wb3J0IHsgY3JlYXRlRm9sZGVyQnRuIH0gZnJvbSAnLi9jcmVhdGVGb2xkZXJCdG4uanMnO1xuaW1wb3J0IHtyZW5kZXJNb3N0UmVjZW50Rm9sZGVyLCBjb3JyZWN0T2JqLCBtYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuaW1wb3J0IHtsb2FkUGxhY2Vob2xkZXJJY29ufSBmcm9tICcuL3BsYWNlaG9sZGVySWNvbi5qcydcblxuZnVuY3Rpb24gaW50aWFsUmVuZGVyICgpIHtcbnJlbmRlck1vc3RSZWNlbnRGb2xkZXIoKTtcbmlmIChjb3JyZWN0T2JqID09IHVuZGVmaW5lZCkge1xuICAgIGxvYWRQbGFjZWhvbGRlckljb24oKTtcbn0gZWxzZSB7XG4gICAgbWFpbkRpc3BsYXlFbGVtZW50cygpO1xuICAgIGNyZWF0ZUZvbGRlckJ0bigpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7aW50aWFsUmVuZGVyfTsiLCJpbXBvcnQge2ZvbGRlcnN9IGZyb20gJy4vY3JlYXRlRm9sZGVyT2JqZWN0LmpzJ1xuXG5sZXQgbmV3Rm9sZGVyU3VibWlzc2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRGb2xkZXInKTtcbmxldCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGlzcGxheScpO1xuXG4vLyBGdW5jdGlvbiB0byBmaW5kIGNvcnJlY3QgZm9sZGVyIG9iamVjdCBpbiBmb2xkZXJzIEFycmF5IHdoZW4gZm9sZGVyIHNlbGVjdGVkL2luaXRpYWxseSBjcmVhdGVkXG5sZXQgY29ycmVjdE9ialxuZnVuY3Rpb24gbGlua0J0blRvT2JqIChlKSB7XG4gICAgY29ycmVjdE9iaiA9IGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50aXRsZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGNvcnJlY3RPYmogPSBjb3JyZWN0T2JqO1xufTtcblxuZnVuY3Rpb24gbGlua0Zvcm1Ub09iaiAoKSB7XG4gICAgY29ycmVjdE9iaiA9IGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC50aXRsZSA9PT0gbmV3Rm9sZGVyU3VibWlzc2lvbi52YWx1ZSk7XG4gICAgY29ycmVjdE9iaiA9IGNvcnJlY3RPYmo7XG59O1xuXG5cbmZ1bmN0aW9uIHJlbmRlck1vc3RSZWNlbnRGb2xkZXIgKCkge1xuICAgIGNvcnJlY3RPYmogPSBmb2xkZXJzW2ZvbGRlcnMubGVuZ3RoLTFdO1xuICAgIGNvcnJlY3RPYmogPSBjb3JyZWN0T2JqO1xufVxuXG5mdW5jdGlvbiB0aXRsZSAoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZS5pZCA9ICdtYWluRGlzcGxheVRpdGxlJztcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvcnJlY3RPYmoudGl0bGU7XG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xufTtcblxuLy8gTG9naWMgZm9yIGNvdW50aW5nIGluY29tcGxldGUgdGFza3NcbmxldCBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSAnJ1xuXG5mdW5jdGlvbiB0YXNrc1JlbWFpbmluZ0xvZ2ljICgpIHtcbiAgICBsZXQgdGFza3MgPSBjb3JyZWN0T2JqLnRhc2tzO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5jb21wbGV0ZVRhc2tDb3VudGVyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmNvbXBsZXRlVGFza0NvdW50ZXIgPSB0YXNrcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUuY29tcGxldGVTdGF0dXMgPT09ICdpbmNvbXBsZXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIGFjYyArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIGluY29tcGxldGVUYXNrQ291bnRlciA9IFN0cmluZyhpbmNvbXBsZXRlVGFza0NvdW50ZXIpO1xuICAgICAgICByZXR1cm4gaW5jb21wbGV0ZVRhc2tDb3VudGVyO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFza3NSZW1haW5pbmdUZXh0ICgpIHtcbiAgICBsZXQgdGFza3NSZW1haW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrc1JlbWFpbmluZy5pZCA9ICdtYWluRGlzcGxheVRhc2tzUmVtYWluaW5nJztcbiAgICB0YXNrc1JlbWFpbmluZy50ZXh0Q29udGVudCA9IGBUYXNrcyBSZW1haW5pbmc6ICR7aW5jb21wbGV0ZVRhc2tDb3VudGVyfWA7XG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQodGFza3NSZW1haW5pbmcpXG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYWxsIHRhc2tzXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MgKCkge1xubGV0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvcnJlY3RPYmoudGFza3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaCcpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG5hbWUpXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGVcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0Rpdilcbn0pO1xubWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQodGFza3MpXG59XG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCB0YXNrXG5cblxuZnVuY3Rpb24gbWFpbkRpc3BsYXlFbGVtZW50cyAoKSB7XG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0ID0gW107XG4gICAgdGl0bGUoKVxuICAgIHRhc2tzUmVtYWluaW5nTG9naWMoKVxuICAgIHRhc2tzUmVtYWluaW5nVGV4dCgpXG4gICAgZGlzcGxheVRhc2tzKClcbn1cblxuXG5cblxuZXhwb3J0IHttYWluRGlzcGxheUVsZW1lbnRzLCBjb3JyZWN0T2JqLCBsaW5rQnRuVG9PYmogLGxpbmtGb3JtVG9PYmosIHJlbmRlck1vc3RSZWNlbnRGb2xkZXJ9OyIsImltcG9ydCB0b2RvTGlzdEljb24gZnJvbSAnLi9waG90b3MvdG9kb0xpc3RJY29uLnBuZyc7XG5sZXQgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkRpc3BsYXknKVxuXG5mdW5jdGlvbiBsb2FkUGxhY2Vob2xkZXJJY29uICgpIHtcbiAgICAvLyBPbmNlIHRoZSBmb2xkZXJzIGFycmF5IGlzIHNldCB1cCB1c2UgYW4gaWYgc3RhdGVtZW50IHRvIGluaXRpYXRlIHRoaXMgZnVuY3Rpb24ncyBmdW5jdGlvbmFsaXR5IG9ubHkgaWYgdGhlIGFycmF5IGlzIGVtcHR5XG4gICAgbGV0IHBsYWNlaG9sZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBsYWNlaG9sZGVySWNvbi5zcmMgPSB0b2RvTGlzdEljb247XG4gICAgcGxhY2Vob2xkZXJJY29uLmlkID0gJ3BsYWNlaG9sZGVySWNvbidcbiAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChwbGFjZWhvbGRlckljb24pXG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0ID0gW107XG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbWFpbkRpc3BsYXlFbXB0eScpXG59XG5cbmV4cG9ydCB7bG9hZFBsYWNlaG9sZGVySWNvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIExvZ2ljIHRvIGxvYWQgcGxhY2Vob2xkZXIgaWNvbiB3aGVuIHRoZSB1c2VyIGhhcyBubyBmb2xkZXJzIG9yIG1vc3QgcmVjZW50IGZvbGRlclxuaW1wb3J0IHtpbnRpYWxSZW5kZXJ9IGZyb20gJy4vaW5pdGlhbFJlbmRlci5qcyc7XG5pbnRpYWxSZW5kZXIoKVxuLy8gTG9naWMgdG8gbWFrZSBuZXcgZm9sZGVyIHVwb24gZm9ybSBzdWJtaXNzaW9uXG5pbXBvcnQgeyBmb2xkZXJzLCBjcmVhdGVGb2xkZXJPYmplY3QgfSBmcm9tICcuL2NyZWF0ZUZvbGRlck9iamVjdC5qcyc7XG5pbXBvcnQge2NyZWF0ZUZvbGRlckJ0biwgcmVtb3ZlTWFpbkRpc3BsYXlFbGVtZW50c30gZnJvbSAnLi9jcmVhdGVGb2xkZXJCdG4uanMnO1xuaW1wb3J0IHttYWluRGlzcGxheUVsZW1lbnRzfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuaW1wb3J0IHtsaW5rRm9ybVRvT2JqfSBmcm9tICcuL21haW5EaXNwbGF5RWxlbWVudHMuanMnO1xuY29uc3QgYWRkRm9sZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9sZGVyRm9ybVwiKTtcbmFkZEZvbGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVNYWluRGlzcGxheUVsZW1lbnRzKCk7XG4gICAgY3JlYXRlRm9sZGVyT2JqZWN0KCk7XG4gICAgY3JlYXRlRm9sZGVyQnRuKCk7XG4gICAgbGlua0Zvcm1Ub09iaigpO1xuICAgIG1haW5EaXNwbGF5RWxlbWVudHMoKTtcbiAgICBhZGRGb2xkZXJGb3JtLnJlc2V0KCk7XG4gIH1cbik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==