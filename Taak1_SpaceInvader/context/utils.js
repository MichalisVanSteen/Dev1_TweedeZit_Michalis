'use strict';
import context from "./context.js";
/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l) {
    return 'hsl(' + h + "," + s + "%," + l + '%)';
}

/** function that formats an rgb value based on parameters
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 */
export function rgb(r, g, b) {
    return 'rgb(' + r + "," + g + "," + b + ')';
}

/** function that converts an angle in degrees to radians
 * @param {number} degrees 
 */
export function degrees(degrees) {
    return degrees * (Math.PI / 180);
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fillCircle(x, y, radius) {
    fillEllipse(x, y, radius, radius);
}

export function strokeCircle(x, y, radius) {
    strokeEllipse(x, y, radius, radius);
}

export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

export function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}