

var yVal; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(640, 360);
  
  yVal = 0;  
  velocity = 0; 
  mass = 50; 
  floppy = loadImage("images/35-disk.png");
  accel = mass * 0.01; 
  randomNum1 = random(200,350);
  randomNum2 = randomNum1 - 150;
}

function draw() {
  background(127);
  fill(255,0,0);
  
  velocity += accel; 
  yVal += velocity;
	image(floppy,width/2,yVal, mass+20,mass-10); 
  rect(320, -10, 50, randomNum2);
  rect(320, randomNum1, 50, 300);
  
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






