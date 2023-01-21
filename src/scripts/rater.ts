
export class Line {
    start: [number, number];
    end: [number, number];
    y_equation: ([number, number] | null);   // y = number * x + number
    x_equation: ([number, number] | null);   // x = number * y + number

    // start and end cannot be equal
    constructor(start: [number, number], end: [number, number]) {
        this.start = start;
        this.end = end;
        if (start[0] == end[0]) {
            this.y_equation = null
        } else {
            this.y_equation = [(end[0] - start[0]) / (end[1] - start[1]), start[1]]
        }
        if (start[1] == end[1]) {
            this.x_equation = null
        } else {
            this.x_equation = [(end[1] - start[1]) / (end[0] - start[0]), start[0]]
        }
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

function determine_vanishing_point(lines: Line[]) : [number, number] {
    for (let line of lines) {
    }
    return [0, 0]
}

// rate_box receives the lines defining the edges of a box and returns a rating.
// Argument lines must be of length 9 or 12
export function rate_box(lines: Line[]) : number {

    return 0;
}

