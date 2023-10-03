// Logic to load placeholder icon when the user has no folders or most recent folder
import {intialRender} from './initialRender.js';
intialRender()
// Logic to make new folder upon form submission
import { folders, createFolderObject } from './createFolderObject.js';
import {createFolderBtn, removeMainDisplayElements} from './createFolderBtn.js';
import {mainDisplayElements} from './mainDisplayElements.js';
import {linkFormToObj} from './mainDisplayElements.js';
import {clearForm} from './addTaskFormLogic.js';


const addFolderForm = document.getElementById("addFolderForm");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    removeMainDisplayElements();
    createFolderObject();
    createFolderBtn();
    linkFormToObj();
    mainDisplayElements();
    addFolderForm.reset();
  }
);

let dimBg = document.getElementById("dimBg");
dimBg.addEventListener('click', () => {
  clearForm();
})
