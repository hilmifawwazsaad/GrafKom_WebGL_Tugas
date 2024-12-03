"use strict";

let freeze = false;

// Toggle freeze state when mouse is clicked
function onMouseClick(event) {
    freeze = !freeze;
    console.log("Freeze state toggled:", freeze);
}

// Set freeze to true when spacebar is pressed
function onKeyDown(event) {
    if (event.keyCode === 32) { // Spacebar key code
        freeze = true;
        console.log("Freeze state set to true");
    }
}

// Set freeze to false when spacebar is released
function onKeyUp(event) {
    if (event.keyCode === 32) { // Spacebar key code
        freeze = false;
        console.log("Freeze state set to false");
    }
}

// Attach event listeners
document.addEventListener('click', onMouseClick, false);
document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

export { freeze };