import { folders as foldersArray, setFoldersToLocalStorage } from './foldersArray.js';

class newFolder {
    constructor (title) {
        this.title = title;
        this.tasks = [];
    }
}

function createFolderObject () {
    let addFolderInput = document.getElementById("addFolder").value;
    let folder = new newFolder (addFolderInput);
    if (!Array.isArray(foldersArray)) {
        foldersArray = [];
    }
    foldersArray.push(folder);
    setFoldersToLocalStorage(foldersArray);
}

export default createFolderObject;