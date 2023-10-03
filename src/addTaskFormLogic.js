let newTaskForm = document.getElementById('newTaskForm');
let dimBg = document.getElementById('dimBg')

function clearForm() {
    newTaskForm.style.display = 'none';
    dimBg.style.display = 'none';
    function resetForm () {
    if (newTaskForm.style.display == 'none')
        newTaskForm.reset();
    }
    const timeOut = setTimeout(resetForm, 5000);
}

function displayAddTaskForm() {
    newTaskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
}

export {displayAddTaskForm, clearForm};