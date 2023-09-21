import folders from './foldersArray'

let newFolderSubmission = document.getElementById('addFolder');
let mainDisplay = document.getElementById('mainDisplay');

// Function to find correct folder object in folders Array when folder selected/initially created
let correctObj

function linkBtnToObj (e) {
    correctObj = folders.find((element) => element.title === e.target.textContent)
    correctObj = correctObj.title
}

function linkFormToObj () {
    correctObj = folders.find((element) => element.title === newFolderSubmission.value)
    correctObj = correctObj.title
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle'
    title.textContent = correctObj;
    mainDisplay.appendChild(title)
}

// Logic for counting incomplete tasks
let tasks = correctObj.tasks
const uncompleteTaskCounter = tasks.reduce(function (acc, currentValue){
    if (currentValue.completeStatus === 'incomplete') {
        return acc + 1;
    }
    return acc;
    }, 0);
    uncompleteTaskCounter = String(uncompleteTaskCounter);

function tasksRemainingText () {
    let tasksRemaining = document.createElement('div')
    tasksRemaining.id = 'mainDisplayTasksRemaining'
    tasksRemaining.textContent = `Tasks Remaining:${uncompleteTaskCounter}`
}

function mainDisplayElements() {
    title()
}




export {mainDisplayElements, linkBtnToObj ,linkFormToObj};