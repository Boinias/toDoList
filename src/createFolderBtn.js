import {mainDisplayElements, linkBtnToObj} from './mainDisplayElements.js'
import {folders, createFolderObject} from './createFolderObject.js'

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
    if (folders.length == 0) {
        addFolderInput = folders[0].title;
    } else {
        addFolderInput = folders[folders.length - 1].title;
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
        linkBtnToObj (e)
        mainDisplayElements()
        // function to add new elements based on folder details
    }
    folderBtns.appendChild(button)
}

export {
	createFolderBtn,
	removeMainDisplayElements
}
