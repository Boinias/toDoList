import {displayTaskForm} from './taskFormLogic'



function editForm (e, correctObj) {
    let button = e.target;
    let taskID = button.getAttribute('data-id');
    console.log(taskId)
    let tasksArray = correctObj.tasks
    let currentTask = tasksArray.find(task => task.name === taskID);
    document.getElementById("name").value = currentTask.name;
    document.getElementById("dueDate").value = currentTask.dueDate;
    document.getElementById("priorityInputSelect").value = currentTask.priority;
    document.getElementById("description").value = currentTask.description;


    displayTaskForm();
}