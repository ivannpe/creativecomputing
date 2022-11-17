// let gravity;
const waterDroplets = [];
function setting(){
  //grass
  noStroke();
  fill(113, 129, 109);
  rect(0, 300, 400, 100);
  
  //fountain
  fill(189, 187, 182);
  ellipse(200, 315, 200, 60);
  
  fill(53, 86, 145);
  ellipse(200, 310, 115, 30);
}
function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.2);
}

function draw() {
  background(135, 206, 235);
  
  setting();
  
  for (let i = 0; i < 5; i++) {
    let p = new Water();
    waterDroplets.push(p);
  }
  for (let j = waterDroplets.length - 1; j >= 0; j--) {
    // waterDroplets[j].gravity(gravity);
    waterDroplets[j].update();
    waterDroplets[j].show();
  }
}
// Water Droplets
class Water {
  constructor() {
    this.x = 200;
    this.y = 310;
    // this.acc = createVector(0,0);
    this.vx = random(-1, 1);
    this.vy = random(-2, -5);
    this.alpha = 255;
  }

  show() {
    noStroke();
    fill(53, 86, 145, this.alpha);
    ellipse(this.x, this.y, 10);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // this.acc.mult(0);
    this.alpha -= 5;
  }

  // gravity(force){
  //   this.acc.add(force);
  // }
}