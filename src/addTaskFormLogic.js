let newTaskForm = document.getElementById('newTaskForm');
let dimBg = document.getElementById('dimBg')

function clearForm() {
    newTaskForm.style.display = 'none';
    newTaskForm.reset();
    dimBg.style.display = 'none';
}

function displayAddTaskForm() {
    newTaskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
}

export {displayAddTaskForm, clearForm};