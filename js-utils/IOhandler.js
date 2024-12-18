"use strict";

let rotation = { x: 0, y: 0 }; 
let zoom = 1; 
let isDragging = false; 
let lastMousePosition = { x: 0, y: 0 }; 


function setZoom(direction) {
    zoom += direction * 0.1;
    zoom = Math.min(Math.max(0.5, zoom), 3); 
}

function createHandler(canvas) {
    canvas.addEventListener("mousedown", (e) => {
        isDragging = true;
        lastMousePosition.x = e.clientX;
        lastMousePosition.y = e.clientY;
    });

    canvas.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const deltaX = e.clientX - lastMousePosition.x;
            const deltaY = e.clientY - lastMousePosition.y;

            rotation.x += deltaY * 0.01; 
            rotation.y += deltaX * 0.01; 

            lastMousePosition.x = e.clientX;
            lastMousePosition.y = e.clientY;
        }
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    canvas.addEventListener("wheel", (e) => {
        zoom += e.deltaY * -0.001;
        zoom = Math.min(Math.max(0.5, zoom), 3);
        e.preventDefault();
    });

    document.getElementById("zoom-in").addEventListener("click", () => setZoom(-1));

    document.getElementById("zoom-out").addEventListener("click", () => setZoom(1));

}
