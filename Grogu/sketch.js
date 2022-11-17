function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(247, 245, 232);
  
  // Drawing the floating stroller pod
  strokeWeight(8);
  stroke(5, 61, 38);
  fill(214, 203, 193);
  circle(200, 200, 300);
  
  //inner shadow of stoller
  noStroke();
  fill(140, 102, 89);
  circle(200, 200, 250);
  
  //outer part of the stroller
  stroke(5, 61, 38);
  fill(140, 102, 89);
  arc(200, 235, 280, 250, 0, PI , PIE);
  
  // outer shadowing
  noStroke();
  fill(214, 203, 193);
  arc(180, 280, 180, 135, 0, PI , PIE);
  
  // bar that goes around the stroller
  stroke(5, 61, 38);
  fill(214, 203, 193);
  rectMode(CENTER);
  rect(200,235,310,30);
  
  //bar details
  noStroke();
  fill(140, 102, 89);
  rect(185,235,10,15,20)
  rect(200,235,10,15,20)
  rect(215,235,10,15,20)
  
  // Drawing Baby Yoda - Grogu
  
  //head
  
  //ears first so they are behind face
  strokeWeight(6);
  stroke(5, 61, 38);
  fill(138, 184, 104);
  rect(145, 125, 85, 55, 0, 80, 0, 80);
  rect(255, 125, 85, 55, 80, 0, 80, 0);
  
  // inner ear
  fill(244, 145, 129);
  rect(155, 135, 75, 35, 0, 80, 0, 80);
  rect(245, 135, 75, 35, 80, 0, 80, 0);

  //face
  strokeWeight(6);
  stroke(5, 61, 38);
  fill(138, 184, 104);
  rect(200, 150, 100, 85, 35, 35, 50, 50);
  
  //eyes
  noStroke();
  fill(0);
  rect(180,150,15,15,35)
  rect(220,150,15,15,35)
  
  
  // part of body
  stroke(5, 61, 38);
  fill(223, 155, 126);
  rect(200, 202, 125, 30, 35, 35, 0, 0);
  
}