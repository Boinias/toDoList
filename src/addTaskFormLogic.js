let newTaskForm = document.getElementById('newTaskForm');
let dimBg = document.getElementById('dimBg')

function clearForm () {
    newTaskForm.style.display = 'none';
    dimBg.style.display = 'none';
    function resetForm () {
    if (newTaskForm.style.display == 'none')
        newTaskForm.reset();
    }
    const timeOut = setTimeout(resetForm, 5000);
}

function displayAddTaskForm () {
    newTaskForm.style.display = 'flex';
    dimBg.style.display = 'flex';
}

class newTask {
    constructor(name, dueDate, priority) {
      this.name = name;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }
  
  // Retrieve 'folders' array from Local Storage or create an empty array
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  function createTaskObj(form) {
    let name = document.getElementById("name").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let task = new newTask(name, dueDate, priority);
    form.tasks.push(task);
  
    // Update Local Storage with the updated 'folders' array
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  

export {displayAddTaskForm, clearForm, createTaskObj};