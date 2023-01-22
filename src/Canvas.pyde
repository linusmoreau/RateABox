startX = 0;
startY = 0;
lines = [];
grading_menu=False;
    
def setup():
    size(480, 240)
    btn = Button(10, 10, 100, 100, "Press" )

def draw():
    background(255)
    btn.display()
    if  mousePressed:
        fill(0)
        for straight_line in lines:
            line(straight_line[0], straight_line[1],straight_line[2], straight_line[3])
        line(startX, startY, mouseX, mouseY)
        
def mousePressed():
    global startX; global startY;
    startX = mouseX
    startY = mouseY

def mouseReleased():
    lines.append([startX, startY, mouseX, mouseY])
    if len(lines) == 9:
        grading_menu = True;
    print(lines);

    
