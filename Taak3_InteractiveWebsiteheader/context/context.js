'use strict';
/** @type {CanvasRenderingContext2D} */
let context;

getCanvasContext();

//test
function getCanvasContext() {
    //get a reference to the canvas element and configure it to fill the whole window
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.margin = 0;
    canvas.style.padding = 0;
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    //get drawing context
    context = canvas.getContext('2d');
}

export default context;