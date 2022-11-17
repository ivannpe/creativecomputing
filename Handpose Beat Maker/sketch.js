let video;
let handpose;
let predictions = [];
//colors taken from coolors app generator
let carolinaBlue =[77,157,224];
let indianRed = [225,85,84];
let saffron = [225,188,41];
let seaGreen  = [59,178,115];
//sounds from BLASTWAVEFX Soundsnap
let aChord;
let cChord;
let fChord;
let gChord;
// console.log(predictions);
console.log('ml5 version:', ml5.version);
function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.size(width, height);
  // Creating a new handpose method
  handpose = ml5.handpose(video, modelLoaded);
  // Fills handpose predictions array when poses are deteced
  handpose.on('predict', results => {
    predictions = results;
  });
  // Hides the video
  video.hide();
  //defines quadrant objects
  q1 = new Quadrant(0, 0, carolinaBlue[0], carolinaBlue[1], carolinaBlue[2],50);
  q2 = new Quadrant(300,0,indianRed[0], indianRed[1], indianRed[2], 50);
  q3 = new Quadrant(0,200, saffron[0], saffron[1], saffron[2], 50);
  q4 = new Quadrant(300,200,seaGreen[0], seaGreen[1], seaGreen[2], 50);
//   defines sounds
  aChord = loadSound('chords/AMINOR.mp3');
  cChord = loadSound('chords/C.mp3');
  fChord = loadSound('chords/F.mp3');
  gChord = loadSound('chords/G.mp3');
}
//confirmation that model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}
function draw() {
  // Mirroring camera for easier interaction using translate and scale
  // https://github.com/atharvapatil/ICM-Final/blob/9d35efcebda46a90565fc286ad4f6a5797950921/sketch.js#L65
  translate(video.width, 0);
  scale(-1, 1);
  //displays webcam
  image(video, 0, 0, width, height);
  // draws the points on the hand
  drawKeypoints();
  // displays the quadrants on the canvas
  q1.show();
  q2.show();
  q3.show();
  q4.show();
  //calls function that is the song maker
  makeSong();
}

function drawKeypoints()  {
  for (let i = 0; i < predictions.length; i++) {
    let pose = predictions[i];
    for (let j = 0; j < pose.landmarks.length; j++) {
      // The 3D coordinates of each hand landmark.
      let keypoint = pose.landmarks[j];
        fill(0, 255, 255);
        noStroke();
      // creates a circle at every keypoint in the hand
        ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}
function makeSong() {
  for (let i = 0; i < predictions.length; i++) {
    // // Semantic groupings of the `landmarks` coordinates.
    let annotations = predictions[i].annotations;
    // gets the coordinates for the tip of the index finger
    let x = annotations.indexFinger[0][0];
    let y = annotations.indexFinger[0][1];
    // checks if the index finger tip is contained in the quadrant
//     if so , plays corresponding chord and increases alpha
    if(q1.contains(x, y)){
      q1.a = 75;
      aChord.play();
      // aChord.stop();
      console.log('IN BLUE');
    }else if(q2.contains(x, y)){
      q2.a = 75;
      cChord.play();
      // cChord.stop();
      console.log('IN RED');
    }else if(q3.contains(x, y)){
      q3.a = 75;
      fChord.play();
      // fChord.stop();
      console.log('IN YELLOW');

    }else if(q4.contains(x, y)){
      q4.a = 75;
      gChord.play();
      // gChord.stop();
      console.log('IN GREEN');
    }else{
      console.log('HAND NOT DETECTED');
    }
  }
}
class Quadrant{
    constructor(x,y,r, g, b, a){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
  // creates rectangle for quadrant
    show(){
      stroke(this.r, this.g, this.b);
      fill(this.r, this.g, this.b, this.a);
      rect(this.x, this.y, 300, 200);
    }
  // checks if given coordinates are within the bounds of the quadrant rectangle and returns boolean value
    contains(someX, someY){
      if ((someX > this.x) && (someX < (this.x + 300)) &&
    (someY > this.y) && (someY < (this.y + 200))) {
        return true;
      }else{
        return false;
      }
    }
}

