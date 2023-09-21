let mainDisplay = document.getElementById('mainDisplay')

// Function to find correct folder object in folders Array
import folders from './foldersArray'
let correctObj

function linkBtnToObj (e) {
    correctObj = folders.find((element) => element.title === e.target.textContent)
}

function title () {
    let title = document.createElement('div')
    title.id = 'mainDisplayTitle'
    title.textContent = correctObj.title
    mainDisplay.appendChild(title)
}

// Logic for counting incomplete tasks - we still need to 
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

function mainDisplayElements(e) {
    linkBtnToObj (e)
    title()
}

export {mainDisplayElements};