
var r = 0;
var g = 50;
var b = 225;
var ellipse
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
 // ellipse = createSprite(200,200,50,50);
}


function draw(){
  background(mouseX,mouseY,mouseX);
  //ellipse.x = mouseX;
  //ellipse.y = mouseY;
 // ellipse.shapeColour = "green"
 ellipse(mouseX,100,20,20);

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}