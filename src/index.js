// Logic to load placeholder icon when the user has no folders or most recent folder
import {intialRender} from './initialRender.js';
intialRender()
// Logic to make new folder upon form submission
import { folders, createFolderObject } from './createFolderObject.js';
import {createFolderBtn, removeMainDisplayElements} from './createFolderBtn.js';
import {linkFormToObj, displayTasks, mainDisplayElements, formStatus} from './mainDisplayElements.js';
import {clearForm} from './taskFormLogic.js';
import {createTaskObj, displayNewTaskForm, displayEditTask, addTask, editTask} from './taskFormLogic.js'

let currentFolder
function currentFolderFunc () {
  currentFolder = document.getElementById('mainDisplayTitle');
  currentFolder = mainDisplayTitle.textContent;
  currentFolder = folders.find(folder => folder.title == currentFolder);
  return currentFolder;
}

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

const taskForm = document.getElementById("taskForm");
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(formStatus)
  if (formStatus == 'add task') {
  addTask();
  } else if (formStatus == 'edit task') {
    editTask ()
  }
})

// task frm submit () > {
//   if the variable formState = add { do above} else if
//   formState = edit {make form edit on submission}
// }

export {currentFolderFunc};