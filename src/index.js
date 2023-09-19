// Logic to load placeholder icon when the user has no folders
import loadPlaceholderIcon from './placeholderIcon.js';
loadPlaceholderIcon()

// Logic to make new folder upon form submission
import createFolderObject from './createFolderObject.js';
import createFolderBtn from './createFolderBtn.js';
const addFolderForm = document.getElementById("addFolder");
addFolderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createFolderObject()
    createFolderBtn()
  }
);

