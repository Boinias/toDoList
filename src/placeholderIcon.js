import todoListIcon from './photos/todoListIcon.png';
let mainDisplay = document.getElementById('mainDisplay')

function placeholderIcon () {
    let placeholderIcon = document.createElement('img');
    placeholderIcon.src = todoListIcon;
    placeholderIcon.id = 'placeholderIcon'
    mainDisplay.appendChild(placeholderIcon)
}

export default placeholderIcon;