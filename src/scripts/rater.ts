
class Line {
    start: [number, number];
    end: [number, number];

    constructor(start: [number, number], end: [number, number]) {
        this.start = start;
        this.end = end;
    }

    print() : void {
        console.log(`Line from (${this.start}) to (${this.end})`);
    }
}


function group_lines(lines: Line[]) : Array<Array<Line>> {
    let group_size;
    if (lines.length == 9) {
        group_size = 3;
    } else {
        group_size = 4;
    }
    return [];
}

// rate_box receives the lines defining the edges of a box and returns a rating
// lines must be
export function rate_box(lines: Array<[[number, number], [number, number]]>) : number {
    let _lines: Line[] = [];
    for (let line of lines) {
        _lines.push(new Line(line[0], line[1]));
    }
    return 0;
}

