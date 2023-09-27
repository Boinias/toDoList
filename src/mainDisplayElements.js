import {folders} from './createFolderObject.js'

let newFolderSubmission = document.getElementById('addFolder');
let mainDisplay = document.getElementById('mainDisplay');

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

function mainDisplayElements () {
    title()
    tasksRemainingLogic()
    tasksRemainingText()
}




export {mainDisplayElements, linkBtnToObj ,linkFormToObj, renderMostRecentFolder};