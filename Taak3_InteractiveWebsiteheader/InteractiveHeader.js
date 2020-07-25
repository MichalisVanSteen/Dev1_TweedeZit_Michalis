'use strict';
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

//window.onmousemove = move;
//window.onclick = click;

//variables
context.canvas.height = 400;

function drawSea() {
    context.fillStyle = "darkblue";
    context.fillRect(context.canvas.width / 4, 0, context.canvas.width, context.canvas.height);

}

drawSea();

function drawBeach() {

    context.fillStyle = "#E3A960";
    context.fillRect(0, 0, context.canvas.width / 4, context.canvas.height);

    context.beginPath();
    context.ellipse(context.canvas.width / 4, context.canvas.height, 100, 30, Math.PI * -.5, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.ellipse(context.canvas.width / 4, context.canvas.height / 2 - 90, 50, 30, Math.PI * -.5, 0, Math.PI);
    context.fill();


    //Tekenen golven strand
    context.fillStyle = "darkblue";
    context.beginPath();
    context.ellipse(context.canvas.width / 4, context.canvas.height / 2 + 30, 70, 30, Math.PI * .5, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.ellipse(context.canvas.width / 4, context.canvas.height / 2 - 175, 35, 30, Math.PI * .5, 0, Math.PI);
    context.fill();

}

drawBeach();

function drawLightHouse() {

    //Ondersteuning vuurtoren
    context.fillStyle = "grey";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 75, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.fillRect(0, context.canvas.height / 4 + 75, 125, 50);

    //Vuurtoren
    context.fillStyle = "red";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 50, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "white";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 40, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "red";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 30, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "white";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 20, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 15, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "black";
    context.beginPath();
    context.arc(context.canvas.width / 8 - 25, context.canvas.height / 4 + 100, 7, 0, 2 * Math.PI);
    context.fill();
}

drawLightHouse();

function drawWaves() {

}