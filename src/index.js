// Logic to load placeholder icon when the user has no folders
import loadPlaceholderIcon from './placeholderIcon.js';
loadPlaceholderIcon()

// Logic to make new folder upon form submission
import { folders, createFolderObject } from './createFolderObject.js';
import {createFolderBtn, removeMainDisplayElements} from './createFolderBtn.js';
import {mainDisplayElements} from './mainDisplayElements.js';
import {linkFormToObj} from './mainDisplayElements.js';
const addFolderForm = document.getElementById("addFolderForm");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    removeMainDisplayElements();
    createFolderObject();
    createFolderBtn();
    linkFormToObj();
    mainDisplayElements();
  }
);

