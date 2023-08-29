//I made a cone that spun really fast

function setup() {
  createCanvas(100, 100, WEBGL);
  describe('a rotating white cone');
}
function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cone(40, 70);
}


//I made a spinning cylinder

function setup() {
  createCanvas(500, 500, WEBGL);
  describe('a rotating green cylinder');
}
function draw() {
  background(205, 105, 94);
  rotateX(frameCount * 1);
  rotateZ(frameCount * 1);
  cylinder(100, 100);
}


//abstract art piece
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    fill(400,10,0);
  } else {
    fill(0,300,300);
  }
  square(mouseX, mouseY, 80);
  rectMode(CENTER)
  background(20);
  ellipse(80,120,80,80)
}
function draw() {
  background(220);
  if (mouseIsPressed) {
    fill(0,300,300);
  } else {
    fill(400,10,0);
  }
  square(mouseX, mouseY, 80);
  square(160,200,80,80)
  curve()
}


//idk

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  ellipse(80,120,80,80)
  ellipse()
  square(160,200,80,80)
}
