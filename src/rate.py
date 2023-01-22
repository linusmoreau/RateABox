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

