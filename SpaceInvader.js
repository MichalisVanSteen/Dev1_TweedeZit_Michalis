'use strict';
import context from "./context/context.js";

function drawSpaceInvader() {



    context.strokeRect(50, 50, 300, 300);
    context.fillRect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    context.fillStyle = "green";
    //Groot balk bovenstuk
    context.rect(75, 125, 250, 50);
    //Kleine kubus links boven
    context.rect(125, 75, 50, 50);
    //Kleine kubus rechts boven
    context.rect(225, 75, 50, 50);
    //Kleine kubus midden onder
    context.rect(175, 175, 50, 50);
    //Middelgrote balk links onder
    context.rect(75, 225, 50, 100);
    //Middelgrote balk rechts onder
    context.rect(275, 225, 50, 100);
    //Kleine kubus minder onderaan
    context.rect(175, 275, 50, 50);
    context.fill();

}

drawSpaceInvader();