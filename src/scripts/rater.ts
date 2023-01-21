
class Line {
    start: [number, number];
    end: [number, number];

    constructor(start: [number, number], end: [number, number]) {
        this.start = start;
        this.end = end;
    }

    print(): void {
        console.log(`Line from (${this.start}) to (${this.end})`);
    }
}


export function rate_box() {
    let line = new Line([1, 2], [4, 3])
    line.print();
}

