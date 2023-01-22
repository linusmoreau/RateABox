let current: string = "Draw";

function draw(value: string): void {
    if (current !== value) {
        let element: HTMLElement = document.getElementById("er");
        element.className = "button";
        element = document.getElementById("dr");
        element.className = "highlight";
        current = "Draw";
    }
}

function eraser(value: any): void {
    if (current !== value) {
        let element: HTMLElement = document.getElementById("dr");
        element.className = "button";
        element = document.getElementById("er");
        element.className = "highlight";
        current = "Eraser";
    }
}

function undo(): void {
    alert("You've switched to undo");
}

function redo(): void {
    alert("You've switched to redo");
}

function grade(): void {
    alert("Your score is 100");
}