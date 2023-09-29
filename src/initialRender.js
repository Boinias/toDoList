import { createFolderBtn } from './createFolderBtn.js';
import {renderMostRecentFolder, correctObj, mainDisplayElements} from './mainDisplayElements.js';
import {loadPlaceholderIcon} from './placeholderIcon.js'

function intialRender () {
renderMostRecentFolder();
if (correctObj == undefined) {
    loadPlaceholderIcon();
} else {
    mainDisplayElements();
    createFolderBtn();
    }
};

export {intialRender};