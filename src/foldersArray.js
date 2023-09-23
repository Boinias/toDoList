let folders = [

];

const serializedFolders = JSON.stringify(folders)

function setFoldersToLocalStorage (serializedFolders) {
    localStorage.setItem('folders', serializedFolders)
};

export {folders, setFoldersToLocalStorage, serializedFolders};