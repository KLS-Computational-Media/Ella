//Abstract art 2.0

function setup() {
  createCanvas(400, 400);
  background(170,736,181);
}

function draw() {
  if (mouseIsPressed) {
    fill(400,10,0);
  } else {
    fill(0,300,300);
    square(mouseX, mouseY, 80);
  rectMode(CENTER)
  rect(160,30,40,30,80)
  ellipse(180,10,40,30)
  arc(300,100,100,100,10,100)
  triangle(1000,900,10,40,150,60)
  square(50,50,100)
}}

//Variation of abstract art 2.0

function setup() {
  createCanvas(400, 400);
  background(170,736,181);
}

function draw() {
  square(mouseX, mouseY, 80);
  rectMode(CENTER)
  if (mouseIsPressed) {
    fill(400,10,0);
  } else {
    fill(0,300,300);
  rect(160,30,40,30,80)
  ellipse(180,10,40,30)
  arc(300,100,100,100,10,100)
  triangle(1000,900,10,40,150,60)
  square(50,50,100)
}}

//3rd variation of abstract art 2.0

function setup() {
  createCanvas(400, 400);
  background(170,736,181);
  noStroke()
 rect(160,30,40,30,80);
  noStroke();
  ellipse(180,10,40,30);
    noStroke();
  arc(300,100,100,100,10,100);
    noStroke();
  triangle(1000,900,10,40,150,60);
    fill(100,80,200);
    noStroke();
  square(50,50,100);
    fill(0,40,40);
    noStroke();
}
function draw() {
  square(mouseX, mouseY, 80);
  rectMode(CENTER);
  if (mouseIsPressed) {
    fill(400,10,0);
    noStroke();
  } else {
    fill(0,300,300);
    noStroke();
}}

//geometric thing

function setup() {
  createCanvas(1000,1000);
  background(170,736,181);
}
function draw() {
     noStroke();
  quad(mouseX, mouseY, 20, 50, mouseY, 645, 203, mouseX, 87);
  if (mouseIsPressed) {
    fill(400,10,0,2);
    noStroke();
  } else {
    fill(0,300,300,2);
    noStroke();
}}
 //idk

function setup() {
  createCanvas(700, 600);
  background(255,255,255);
}
function draw() {
  quad(mouseX, 0, mouseX, 400, 0, mouseY, 300, mouseY);
  if (mouseIsPressed) {
    fill(200,200,300,6);
    noStroke()
  } else {
    fill(123,287,367, 6);
    noStroke()
 
}}
