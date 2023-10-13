class newFolder {
    constructor(title) {
      this.title = title;
      // this.tasks = [];
    }
  }
  
  // Retrieve 'folders' array from Local Storage or create an empty array
  let folders = JSON.parse(localStorage.getItem('folders')) || [];
  
  function createFolderObject() {
    let addFolderInput = document.getElementById("addFolder").value;
    let folder = new newFolder(addFolderInput);
    folders.push(folder);
  
    // Update Local Storage with the updated 'folders' array
    localStorage.setItem('folders', JSON.stringify(folders));
  }
  
  export { folders, createFolderObject };