class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "green";
  }

  drawRect() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    this.x += -3;
  }
  
  

  checkCollision() {
    if (width / 2 + 50 > this.x && (width / 2) < this.x + this.w) {
      if (yVal + mass - 10 > this.y && yVal < this.y + this.h) {
        gameState = 2;
        this.color = "red";
      }
    }
    else {
      this.color = "green";
    }
  }
}

var gif_createImg;
var yVal;
var accel;
var velocity;
var mass;
var rects = [];
var score = 0;

let gameState = 0

function setup() {
  createCanvas(640, 360);
  backgroundIMG = loadImage("images/foto.jpg");
  yVal = 0;
  velocity = 0;
  mass = 50;
  floppy = loadImage("images/35-disk.png");
  accel = mass * 0.01;
  pressStart = loadImage("images/press start.png")
  endBackground = loadImage("images/endbackground.png")
  textAlign(CENTER);
}



function draw() {


  if (gameState == 0) {
    startGame();
  } else if (gameState == 1) {
    playGame();
  }
  else if (gameState == 2) {
    finishGame();
  }
}

function game() {
  background(backgroundIMG);

  velocity += accel;
  yVal += velocity;
  image(floppy, width / 2, yVal, mass + 20, mass - 10);


  if (yVal > height - mass / 2) {
    velocity *= -0.6;
    yVal = height - mass / 2;
  }

  if (frameCount % 85 == 0) {


    randomHeight = random(height - 150);

    rect1 = new Rect(700, 0, 50, randomHeight)
    rect2 = new Rect(700, randomHeight + 150, 50, 300)

    rects.push(rect1);
    rects.push(rect2);

    // remove unnessecary pipes
    if (rects.length > 6) {
      rects.splice(0, 2);
    }
  }

  
   if (frameCount % 95 == 0 && rects.length > 3.6) {
    score = score + 1;
  } 

  rects.forEach((p) => {
    p.drawRect()
    p.checkCollision()
  });

  fill('white');
  textSize(25);
  text('Score:', 50, 35)
  text(score, 100, 35);

}



function startGame() {
  background(pressStart);
}

function playGame() {
  game();
}

function finishGame() {
  background(endBackground);
}

function keyPressed(spacebar) {
  yVal + 40;
  // - mass gedeeld door 6 om bij elke mass een proportionele stuiter te krijgen
  velocity = -mass / 6;
}



function mousePressed() {
  console.log(gameState);
  if (gameState == 0) {
    gameState += 1;


  } else if (gameState == 2) {
    rects = [];
    score = 0;

    gameState = 0;
  }
}




