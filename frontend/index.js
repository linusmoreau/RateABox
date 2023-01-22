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
    alert("Your score is 100");
}
