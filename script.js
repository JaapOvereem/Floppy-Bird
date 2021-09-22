var yVal; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(640, 360);
  
  yVal = 0;  
  velocity = 0; 
  mass = 50; 
  
  accel = mass * 0.01; 
}

function draw() {
  background(127);
  fill(255,0,0);
  
  velocity += accel; 
  yVal += velocity;
	ellipse(width/2,yVal, mass,mass); 
  
  if (yVal > height - mass/2) {
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}


function keyPressed(spacebar) {
  yVal + 50;  
  velocity = -10; 
}






