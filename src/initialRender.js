import {renderMostRecentFolder, correctObj, mainDisplayElements} from './mainDisplayElements.js';
import {loadPlaceholderIcon} from './placeholderIcon.js'

function intialRender () {
renderMostRecentFolder();
if (correctObj == null || correctObj == undefined) {
    loadPlaceholderIcon();
} else {
    mainDisplayElements();
    }
    console.log(correctObj)
};

export {intialRender};