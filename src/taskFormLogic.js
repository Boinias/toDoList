import {folders} from './createFolderObject.js'

let taskForm = document.getElementById('newTaskForm');
let dimBg = document.getElementById('dimBg')

function clearForm () {
    taskForm.style.display = 'none';
    dimBg.style.display = 'none';
    function resetForm () {
    if (taskForm.style.display == 'none')
        taskForm.reset();
    }
    const timeOut = setTimeout(resetForm, 5000);
}

function displayTaskForm () {
    taskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
}

class newTask {
    constructor(name, dueDate, priority, description) {
      this.name = name;
      this.dueDate = dueDate;
      this.priority = priority;
      this.description = description;
    }
  };

  function createTaskObj(openFolder) {
    let currentFolderTitle = openFolder.title.toString();
    let currentFolder = folders.find(folder => folder.title === currentFolderTitle);
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priorityInputSelect").value;
    let description = document.getElementById("description").value
    console.log(priority);
    let task = new newTask(name, dueDate, priority, description);
  
    // Push the task to the 'tasks' array of the current folder
    currentFolder.tasks.push(task);
  
    // Update Local Storage with the entire 'folders' object
    localStorage.setItem('folders', JSON.stringify(folders));
  };
  

export {displayTaskForm, clearForm, createTaskObj};