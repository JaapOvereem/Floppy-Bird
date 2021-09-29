class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  drawRect() {
    rect(this.x, this.y, this.w, this.h);
    this.x += -3;
  }
}

var yVal;
var accel;
var velocity;
var mass;
var rects = [];


function setup() {
  createCanvas(640, 360);

  yVal = 0;
  velocity = 0;
  mass = 50;
  floppy = loadImage("images/35-disk.png");
  accel = mass * 0.01;
}


function draw() {
  background(127);
  fill(255, 0, 0);

  velocity += accel;
  yVal += velocity;
  image(floppy, width / 2, yVal, mass + 20, mass - 10);


  if (yVal > height - mass / 2) {
    velocity *= -0.6;
    yVal = height - mass / 2;
  }

  if (frameCount % 85 == 0) {
    console.log("add pipe");

    randomHeight = random(height - 150);

    rect1 = new Rect(700, 0, 50, randomHeight)
    rect2 = new Rect(700, randomHeight + 150, 50, 300)

    rects.push(rect1);
    rects.push(rect2);
  }

  rects.forEach(p => p.drawRect());
}




function keyPressed(spacebar) {
  yVal + 40;
  // - mass gedeeld door 6 om bij elke mass een proportionele stuiter te krijgen
  velocity = -mass / 6;
}






