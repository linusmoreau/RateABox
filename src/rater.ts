
export class Line {
    start: [number, number];
    end: [number, number];
    y_equation: ([number, number] | null);   // y = number * x + number; null if vertical
    x_equation: ([number, number] | null);   // x = number * y + number; null if horizontal

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


function group_lines(lines: Line[]) : Line[][] {
    let group_size: number;
    if (lines.length == 9) {
        group_size = 3;
    } else {
        group_size = 4;
    }
    return [];
}

// is_parallel returns true if all lines are parallel
function is_parallel(lines: Line[]) : boolean {
    let x_parallel: boolean = true;
    let y_parallel: boolean = true;
    for (let line of lines) {
        if (line.y_equation == null || line.y_equation[0] != lines[0].y_equation[0]) {
            y_parallel = false;
            break;
        }
    }
    for (let line of lines) {
        if (line.x_equation == null || line.x_equation[0] != lines[0].x_equation[0]) {
            x_parallel = false;
            break;
        }
    }
    return x_parallel || y_parallel;
}

function determine_vanishing_point(lines: Line[]) : ([number, number] | null) {
    if (is_parallel(lines)) {
        return null;
    }

    return [0, 0]
}

function sum_square_distance_from_point(point: [number, number], lines: Line[]) {

}

// rate_box receives the lines defining the edges of a box and returns a rating.
// Argument lines must be of length 9 or 12
export function rate_box(lines: Line[]) : number {
    let groups: Line[][] = group_lines(lines);
    for (let group of groups) {

    }
    return 0;
}

