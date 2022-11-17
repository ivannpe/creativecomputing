var orange = {
  r: 240,
  g: 82,
  b: 19,
}
var yellow = {
  r: 234,
  g: 169,
  b: 68,
}

let star = {
  x: 0,
  y: 600,
}

function sky(){
  var sky = map(mouseY, 0, 600, 0, 255);
  background(0, 0, sky);
}

function stars(){
  staralpha = map(mouseY, 0, 600, 255, 0);
  noStroke();
  fill(188, 162, 101, staralpha)
  ellipse(star.x,star.y,10,10)
  
  star.x = random(0,400)
  star.y = random(0,200)
}

function suns(){
  noStroke();
  fill(yellow.r, yellow.g, yellow.b);
  circle(75, 100, 100);
  circle(325, 60, 65);
}

function dunes(){
  noStroke();
  
  fill(orange.r, orange.g, orange.b);
  ellipse(0, 310, 600, 400);
  ellipse(300, 310, 600, 335);
  
  fill(yellow.r, yellow.g, yellow.b);
  ellipse(50, 430, 800, 400);
  ellipse(400, 400, 500, 400);
  
  fill(orange.r, orange.g, orange.b);
  ellipse(0, 490, 600, 400);
  ellipse(300, 500, 600, 335);
  
  fill(yellow.r, yellow.g, yellow.b);
  ellipse(50, 590, 800, 400);
  ellipse(400, 580, 500, 400);
  
  // fill(orange.r, orange.g, orange.b);
  ellipse(0, 650, 600, 400);
  ellipse(300, 650, 600, 335);
}

function paul(){
  fill(255, 252, 238);
  while(mouseY < ){
      ellipse(20 0, mouseY, 15, 15);
      ellipse(200, mouseY + 30, 30, 55);
        
  }
}

function setup() {
  createCanvas(400, 600);
}

function draw() {
//Background
  sky();
  
//Stars
  stars();
  
//Suns
  suns();

//Dunes
  dunes();
  
//Paul
  paul();
}
