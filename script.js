var yVal; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(640, 360);
  
  yVal = 0;  
  velocity = 0; 
  mass = 60; 
  floppy = loadImage("images/35-disk.png");
  accel = mass * 0.01; 
}

function draw() {
  background(127);
  fill(255,0,0);
  
  velocity += accel; 
  yVal += velocity;
	image(floppy,width/2,yVal, mass,mass); 
  rect(320, -10, 40, 75)
  
  if (yVal > height - mass/2) {
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}


function keyPressed(spacebar) {
  yVal + 40;  
  // - mass gedeeld door 6 om bij elke mass een proportionele stuiter te krijgen
  velocity = -mass / 6; 
}






