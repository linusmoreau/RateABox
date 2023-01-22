import math
import numpy as np


class Line:
    def __init__(self, start, end):
        self.start: (int, int) = start
        self.end: (int, int) = end
        x_dif: int = end[0] - start[0]
        y_dif: int = end[1] - start[1]
        d: int = math.gcd(x_dif, y_dif)
        self.equation: (int, int, int) = [x_dif // d, y_dif // d, start[0]]

    def distance_from_point(self, point):
        a = self.equation[0]
        b = self.equation[1]
        c = self.equation[2]
        return abs(a * point[0] + b * point[1] + c) / math.sqrt(a ** 2 + b ** 2)

    def angle_from_point(self, point):
        opp = self.distance_from_point(point)
        hyp = math.sqrt((point[0]**2) + (point[1] - self.equation[2])**2)
        return math.degrees(math.sin(opp / hyp))


def group_lines(lines):
    """group_lines groups the lines based on if they should share a vanishing point"""
    group_size = len(lines) // 3
    return []


def is_parallel(lines):
    """is_parallel returns true if all lines are parallel"""
    for line in lines:
        if line.equation[0] != lines[0].equation[0] or line.equation[1] != lines[0].equation[1]:
            return False
    return True


def determine_vanishing_point(lines):
    if is_parallel(lines):
        return None

    return 0, 0


def intersect(P0, P1):
    """P0 and P1 are NxD arrays defining N lines.
    D is the dimension of the space. This function
    returns the least squares intersection of the N
    lines from the system given by eq. 13 in
    http://cal.cs.illinois.edu/~johannes/research/LS_line_intersect.pdf.
    """
    # generate all line direction vectors
    n = (P1 - P0) / np.linalg.norm(P1 - P0, axis=1)[:, np.newaxis]  # normalized

    # generate the array of all projectors
    projs = np.eye(n.shape[1]) - n[:, :, np.newaxis] * n[:, np.newaxis]  # I - n*n.T
    # see fig. 1

    # generate R matrix and q vector
    R = projs.sum(axis=0)
    q = (projs @ P0[:, :, np.newaxis]).sum(axis=0)

    # solve the least squares problem for the
    # intersection point p: Rp = q
    p = np.linalg.lstsq(R, q, rcond=None)[0]

    return p


def sum_square_distance_from_point(point, lines):
    """sum_square_distance_from_point returns the sum of the minimum square distance from each line to the given
    point """
    total = 0
    for line in lines:
        total += line.distance_from_point(point)**2
    return total


def sum_square_angle_from_point(point, lines):
    """sum_square_angle_from_point returns the sum of square degrees that each line deviates from the given point"""
    total = 0
    for line in lines:
        total += line.angle_from_point(point)**2
    return total


def rate_box(lines):
    total = 0
    groups = group_lines(lines)
    for group in groups:
        point = determine_vanishing_point(group)
        if point is None:
            total += len(group)
        else:
            total += sum_square_angle_from_point(point, group)
    return total

