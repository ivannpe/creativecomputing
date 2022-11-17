let lineCoord = {
  x1: 0,
  y1: 75,
  x2: 350,
  y2: 75,
}

//Creating background to look like loose-leaf paper

function drawPaper(){
  //blue horizontal lines
  stroke(200, 234, 248);
  strokeWeight(1);
  for(let i = 0; i < 350; i += 25){
    line(lineCoord.x1, lineCoord.y1 + i, lineCoord.x2, lineCoord.y2 + i)
  }
  // red vertical line
  stroke(218, 106, 141);
  strokeWeight(2);
  line(65, 0, 65, 450);
}
let looseleaf;

function setup() {
  createCanvas(350, 450);
  looseleaf = createGraphics(350, 450);
  looseleaf.clear();
  myPencil = new Pencil(75, 75, 2, 1, 0.7);
  myPencil2 = new Pencil(35, 10, 1, 3, 0.3);
}

function draw() {
  background(255);

  //creates paper background
  drawPaper();
  
  //creates the ink, the pencil, and moves the pencil across the page
  myPencil.ink();
  myPencil2.ink();
  myPencil.move();
  myPencil2.move();
  myPencil.draw();
  myPencil2.draw();
}

class Pencil {
  constructor(x, y, xspeed, yspeed, r) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.r = r;
  }
  //creates the pencil that will move across the page
  draw(){
    noStroke();
    fill(255, 204, 0);
    rect(this.x, this.y, 200, 20, 75, 0, 0, 75);
    // console.log('Draw');
  }
  //creates trailling ellipse to look like pencil mark
  ink(){
    looseleaf.fill(0);
    looseleaf.stroke(2);
    looseleaf.ellipse(this.x, this.y, this.r*2, this.r*2);

    image(looseleaf, 0, 0);

    // console.log('Ink');
  }
  
  // moves the pencil and pencil makr across the page to make a pretty pattern
  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width - this.r|| this.x < this.r) {
      this.xspeed = -this.xspeed;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.yspeed = -this.yspeed;
    }  
  }
  
}