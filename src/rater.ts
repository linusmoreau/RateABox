
export class Line {
    start: [number, number];
    end: [number, number];
    equation: ([number, number, number]);    // n * x + n * y + n = 0

    // start and end cannot be equal
    constructor(start: [number, number], end: [number, number]) {
        this.start = start;
        this.end = end;
        let x_dif: number = end[0] - start[0];
        let y_dif: number = end[1] - start[1];
        let d: number = gcd(x_dif, y_dif);
        this.equation = [x_dif / d, y_dif / d, start[0]]
    }

    print() : void {
        console.log(`Line from (${this.start}) to (${this.end})`);
    }

    distance_from_point(point: [number, number]) : number {
        let a: number = this.equation[0];
        let b: number = this.equation[1];
        let c: number = this.equation[2];
        return Math.abs(a * point[0] + b * point[1] + c) / Math.sqrt(a**2 + b**2);
    }

    angle_from_point(point: [number, number]) : number {
        let opp: number = this.distance_from_point(point);
        let hyp: number = Math.sqrt((point[0]**2) + (point[1]-this.equation[2])**2);
        return Math.sin(opp / hyp);
    }
}

// gcd returns the greatest common denominator of the two given numbers
function gcd(a: number, b: number) : number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {let temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

// group_lines groups the lines based on if they should share a vanishing point
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
    let parallel: boolean = true;
    for (let line of lines) {
        if (line.equation[0] != lines[0].equation[0] || line.equation[1] != lines[1].equation[1]) {
            parallel = false;
            break;
        }
    }
    return parallel;
}

function determine_vanishing_point(lines: Line[]) : ([number, number] | null) {
    if (is_parallel(lines)) {
        return null;
    }

    return [0, 0];
}

// sum_square_distance_from_point returns the sum of the minimum square distance from each line to the given point
function sum_square_distance_from_point(point: [number, number], lines: Line[]) : number {
    let total: number = 0;
    for (let line of lines) {
        total += line.distance_from_point(point);
    }
    return total;
}

// sum_square_angle_from_point returns the sum of square degrees that each line deviates from the given point
function sum_square_angle_from_point(point: [number, number], lines: Line[]) {
    let total: number = 0;
    for (let line of lines) {
        total += line.angle_from_point(point);
    }
    return total;
}

// rate_box receives the lines defining the edges of a box and returns a rating.
// Argument lines must be of length 9 or 12
export function rate_box(lines: Line[]) : number {
    let groups: Line[][] = group_lines(lines);
    for (let group of groups) {

    }
    return 0;
}
