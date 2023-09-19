import folders from './foldersArray'

class newFolder {
    constructor (title) {
        this.title = title;
        this.tasksArray = [];
    }
}

function createFolderObject () {
    let addFolderInput = document.getElementById("addFolder").value;
    let newFolder = new newFolder (addFolderInput)
    folders.push(newFolder)

}




export default createFolderObject;