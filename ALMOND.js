background(89, 216, 255);
var drawWinston = function(){

var centerX = random(345, 70);
var centerY = random(468, 138);
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

noStroke();

fill(bodyColor);// body

ellipse(centerX, centerY, bodyLength, bodyHeight);//tail

var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;

triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

var mouseX = random(34, 329);
var mouseY = random(209, 281);
ellipse(mouseX,mouseY,55,-33);




};

drawWinston(50, 50);
drawWinston(40, 40);
drawWinston(30, 30);
drawWinston(20, 20);
drawWinston(10, 10);
drawWinston(5, 5);
drawWinston(2, 2);
drawWinston(23, 34);

         