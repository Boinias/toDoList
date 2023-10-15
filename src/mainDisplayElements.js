import {folders} from './createFolderObject.js';
import { format, addDays } from 'date-fns';
import {displayAddTaskForm} from './addTaskFormLogic.js'

let newFolderSubmission = document.getElementById('addFolder');
let mainDisplay = document.getElementById('mainDisplay');

// function to set minimum date for dueDate form
let taskForm = document.getElementById('taskForm');
let today = new Date();
const formattedMinDate = format(today, 'yyyy-MM-dd');


// Function to find correct folder object in folders Array when folder selected/initially created
let correctObj
function linkBtnToObj (e) {
    correctObj = folders.find((element) => element.title === e.target.textContent);
    correctObj = correctObj;
};

function linkFormToObj () {
    correctObj = folders.find((element) => element.title === newFolderSubmission.value);
    correctObj = correctObj;
};


function renderMostRecentFolder () {
    correctObj = folders[folders.length-1];
    correctObj = correctObj;
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle';
    title.textContent = correctObj.title;
    mainDisplay.appendChild(title);
};

// Logic for counting incomplete tasks
let incompleteTaskCounter = ''

function tasksRemainingLogic () {
    let tasks = correctObj.tasks;
    console.log(tasks);

    if (tasks == undefined || tasks == false || tasks == null)  {
        incompleteTaskCounter = 0;
    } else if (tasks.length === 0)  {
        incompleteTaskCounter = 0;
    } else {
        incompleteTaskCounter = tasks.reduce(function (acc, currentValue) {
        if (currentValue.completeStatus === 'incomplete') {
            return acc + 1;
        }
        return acc;
        }, 0);
        incompleteTaskCounter = String(incompleteTaskCounter);
        return incompleteTaskCounter;
    }
}

function tasksRemainingText () {
    let tasksRemaining = document.createElement('div');
    tasksRemaining.id = 'mainDisplayTasksRemaining';
    tasksRemaining.textContent = `Tasks Remaining: ${incompleteTaskCounter}`;
    mainDisplay.appendChild(tasksRemaining)
}


function createAddTaskBtn () {
    let addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'addTaskBtn';
    let correctFolder = correctObj
    correctFolder = correctFolder.toString();
    addTaskBtn.textContent = '+';
    addTaskBtn.addEventListener('click', () => {
        displayAddTaskForm(correctFolder)
    });
    mainDisplay.appendChild(addTaskBtn);
}


// function to display all tasks
function displayTasks () {
    console.log(correctObj)
let tasks = document.createElement('div')
if (correctObj.tasks == undefined || correctObj.tasks == false || correctObj.tasks == null) {
    console.log('no tasks')
} else {
correctObj.tasks.forEach(element => {
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('data-id', element.name)
    let name = document.createElement('h1')
    name.textContent = element.name;
    taskDiv.appendChild(name)
    let dueDate = document.createElement('div')
    dueDate.textContent = element.dueDate
    taskDiv.appendChild(dueDate)
    let priority = document.createElement('div')
    priority.textContent = element.priority;
    taskDiv.appendChild(priority)
    let description = document.createElement('div')
    description.textContent = element.description
    console.log(element.description)
    taskDiv.appendChild(description)
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('data-id', element.name)
    editBtn.addEventListener('click', (e, correctObj) => {
        // bring up form
    })
    taskDiv.appendChild(editBtn);
    tasks.appendChild(taskDiv)
});
mainDisplay.appendChild(tasks)
}
};




function mainDisplayElements () {
    mainDisplay.classList = [];
    while (mainDisplay.firstChild) {
        mainDisplay.removeChild(mainDisplay.firstChild);
      }
    title()
    tasksRemainingLogic()
    tasksRemainingText()
    displayTasks()
    createAddTaskBtn (correctObj)
}




export {mainDisplayElements, correctObj, linkBtnToObj ,linkFormToObj, renderMostRecentFolder, displayTasks};