import {folders} from './createFolderObject.js'
import {currentFolderFunc} from './index.js'
import {mainDisplayElements} from './mainDisplayElements.js'

let taskForm = document.getElementById('taskForm');
let taskFormTitle = document.getElementById('formTitle');
let submitBtn = document.getElementById('submitBtn')
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
  
  function addTask () {
    currentFolderFunc()
    createTaskObj(currentFolderFunc())
    clearForm();
    mainDisplayElements ()
  }


  function displayNewTaskForm () {
    taskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
    taskFormTitle.textContent = 'New Task';
    submitBtn.textContent = 'Add';
    
}

  function displayEditTaskForm (e) {
    taskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
    taskFormTitle.textContent = 'Edit Task'
    submitBtn.textContent = 'Update'
    let button = e.target;
    let taskId = button.getAttribute('data-id');
    let currentFolder = currentFolderFunc()
    console.log(currentFolder)
    let tasksArray = currentFolder.tasks
    let currentTask = tasksArray.find(task => task.name === taskId);
    document.getElementById("name").value = currentTask.name;
    document.getElementById("dueDate").value = currentTask.dueDate;
    document.getElementById("priorityInputSelect").value = currentTask.priority;
    document.getElementById("description").value = currentTask.description;
  };

export {clearForm, createTaskObj, addTask, displayEditTaskForm, displayNewTaskForm};