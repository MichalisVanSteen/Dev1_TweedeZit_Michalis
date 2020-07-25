'use strict';
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

//window.onmousemove = move;
//window.onclick = click;

//Global variables
context.canvas.height = 400;
let currentWaves = [];
let currentBoats = [];

function drawSea() {
    context.fillStyle = "darkblue";
    context.fillRect(context.canvas.width / 4, 0, context.canvas.width, context.canvas.height);

}

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

function update() {
    requestAnimationFrame(update);
    drawSea();
    drawBeach();
    drawLightHouse();


    currentWaves.forEach(element => {
        if (element.xPos < context.canvas.width / 4 + 150) {
            element.waveColor = element.waveColor - 0.0125;
            //console.log(element.waveColor);
            if (element.xPos < context.canvas.width / 4 + 100) {
                element.xPos = Math.floor(Math.random() * 400) + context.canvas.width / 4 + 300;
                element.yPos = Math.floor(Math.random() * context.canvas.height);
            }
        } else if (element.waveColor < 1 && element.xPos > context.canvas.width / 4 + 150) {
            element.waveColor += 0.0125;
        }
        element.xPos--;
        drawWaveArc(element.xPos, element.yPos, element.waveColor);
    });

    currentBoats.forEach(element => {
        element.yPos -= 2;
        if (element.yPos < -100) {
            element.yPos = context.canvas.height + 100;
            let movementLeftRight = Math.floor(Math.random() * 300);
            let leftRight = Math.floor(Math.random() * 2);
            if (leftRight == 0) {
                if (element.xPos - movementLeftRight > context.canvas.width / 2) {
                    element.xPos -= movementLeftRight;
                }
            } else if (leftRight == 1) {
                if (element.xPos + movementLeftRight < context.canvas.width - 100) {
                    element.xPos += movementLeftRight;
                }
            }
        }
        drawBoat(element.xPos, element.yPos);
    });

}

function fillArray() {
    let amountWaves = 6;
    let amountBoats = 3;
    for (let i = 0; i < amountWaves; i++) {
        let x = Math.floor(Math.random() * 400) + context.canvas.width / 4 + 150;
        let y = Math.floor(Math.random() * context.canvas.height);
        let wave = {
            xPos: x,
            yPos: y,
            waveColor: 1
        };
        currentWaves.push(wave);


    }

    for (let i = 0; i < amountBoats; i++) {
        let x = Math.floor(Math.random() * 400) + context.canvas.width / 2;
        let y = Math.floor(Math.random() * context.canvas.height);
        let boat = {
            xPos: x,
            yPos: y,
            boatColor: Math.floor(Math.random() * 255)
        };
        currentBoats.push(boat);
    }

    console.log(currentBoats);
}

fillArray();


function drawWaveArc(x, y, color) {
    context.strokeStyle = 'rgba(255,255,255,' + color + ')';
    context.beginPath();
    context.arc(x, y, 50, Math.PI * 1.2, Math.PI / 1.5, true);
    context.stroke();
}

function drawBoat(x, y) {
    context.fillStyle = "brown";
    context.beginPath();
    context.fillRect(x, y, 50, 100);

    context.beginPath();
    context.fillRect(x - 25, y + 20, 100, 10);

    context.beginPath();
    context.fillRect(x - 25, y + 40, 100, 10);

    context.beginPath();
    context.fillRect(x - 25, y + 60, 100, 10);

    context.beginPath();
    context.ellipse(x + 25, y, 25, 30, Math.PI * -1, 0, Math.PI);
    context.fill();

}




update();