import pygame
import pygame_widgets
import sys
from typing import *


lines = []
grading_menu = False
start: Union[List[int], None] = None


def mousePressed():
    global start
    start = pygame.mouse.get_pos()


def mouseReleased():
    global start
    pos = pygame.mouse.get_pos()
    lines.append([start, pos])
    start = None
    if len(lines) == 9:
        grading_menu = True
    print(lines)


if __name__ == "__main__":
    pygame.init()
    window = pygame.display.set_mode((600, 400))

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.MOUSEBUTTONUP:
                mouseReleased()
            elif event.type == pygame.MOUSEBUTTONDOWN:
                mousePressed()

        window.fill((255, 255, 255))

        if start is not None:
            pygame.draw.line(window, (0, 0, 0), start, pygame.mouse.get_pos())

        for line in lines:
            pygame.draw.line(window, (0, 0, 0), line[0], line[1])

        pygame.display.flip()
