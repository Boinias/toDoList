import {mainDisplayElements, linkBtnToObj} from './mainDisplayElements.js'


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
