import {folders} from './createFolderObject.js';
import { format, addDays } from 'date-fns';

let newFolderSubmission = document.getElementById('addFolder');
let mainDisplay = document.getElementById('mainDisplay');

// function to set minimum date for dueDate form
let taskForm = document.getElementById('taskForm');
let today = new Date();
const formattedMinDate = format(today, 'yyyy-MM-dd');
dateInput.min = formattedMinDate;

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

    if (tasks.length === 0) {
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

// function to display all tasks
function displayTasks () {
let tasks = document.createElement('div')
correctObj.tasks.forEach(element => {
    let taskDiv = document.createElement('div');
    let name = document.createElement('h')
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
    taskDiv.appendChild(description)
    tasks.appendChild(taskDiv)
});
mainDisplay.appendChild(tasks)
}




function mainDisplayElements () {
    mainDisplay.classList = [];
    title()
    tasksRemainingLogic()
    tasksRemainingText()
    displayTasks()
}




export {mainDisplayElements, correctObj, linkBtnToObj ,linkFormToObj, renderMostRecentFolder};