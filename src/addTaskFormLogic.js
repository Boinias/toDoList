import {folders} from './createFolderObject.js'

let newTaskForm = document.getElementById('newTaskForm');
let dimBg = document.getElementById('dimBg')

function clearForm () {
    newTaskForm.style.display = 'none';
    dimBg.style.display = 'none';
    function resetForm () {
    if (newTaskForm.style.display == 'none')
        newTaskForm.reset();
    }
    const timeOut = setTimeout(resetForm, 5000);
}

function displayAddTaskForm () {
    newTaskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
}

class newTask {
    constructor(name, dueDate, priority) {
      this.name = name;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  };
  
  function createTaskObj(openFolder) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priorityInput").value;
    let currentFolderTitle = openFolder.title.toString();
    let currentFolder = folders.find(folder => folder.title === currentFolderTitle);
    let task = new newTask(name, dueDate, priority);

    if(!currentFolder.hasOwnProperty('tasks')) {
      currentFolder.tasks = [];
    }
    currentFolder.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(currentFolder));
  }
  

export {displayAddTaskForm, clearForm, createTaskObj};