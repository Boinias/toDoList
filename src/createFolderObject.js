import folders from './foldersArray'

class newFolder {
    constructor (title) {
        this.title = title;
        this.tasks = [];
    }
}

function createFolderObject () {
    let addFolderInput = document.getElementById("addFolder").value;
    let folder = new newFolder (addFolderInput)
    folders.push(folder)
    const serializedFolders = JSON.stringify(folders)
    localStorage.setItem('folders', serializedFolders)
}




export default createFolderObject;