"use strict";
exports.__esModule = true;
var rater_1 = require("../src/rater");
var current = "Draw";
function draw(value) {
    if (current !== value) {
        var element = document.getElementById("er");
        element.className = "button";
        element = document.getElementById("dr");
        element.className = "highlight";
        current = "Draw";
    }
}
function eraser(value) {
    if (current !== value) {
        var element = document.getElementById("dr");
        element.className = "button";
        element = document.getElementById("er");
        element.className = "highlight";
        current = "Eraser";
    }
}
function undo() {
    alert("You've switched to undo");
}
function redo() {
    alert("You've switched to redo");
}
function grade() {
    (0, rater_1.rate_box)([]);
    alert("Your score is 100");
}
