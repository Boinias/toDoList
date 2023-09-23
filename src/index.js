// Logic to load local storage
import folders from './foldersArray.js';
const storedFolders = JSON.parse(localStorage.getItem('folders'));
if (storedFolders) {
  folders = storedFolders
}

// Logic to load placeholder icon when the user has no folders
import loadPlaceholderIcon from './placeholderIcon.js';
loadPlaceholderIcon()

// Logic to make new folder upon form submission
import createFolderObject from './createFolderObject.js';
import {createFolderBtn, removeMainDisplayElements} from './createFolderBtn.js';
import {mainDisplayElements} from './mainDisplayElements.js';
import {linkFormToObj} from './mainDisplayElements.js';
const addFolderForm = document.getElementById("addFolderForm");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    removeMainDisplayElements();
    createFolderObject();
    createFolderBtn(e);
    linkFormToObj();
    mainDisplayElements();
  }
);

