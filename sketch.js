function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background("#12130F");
}

function draw() {

  noFill();
  strokeWeight(12);

if (frameCount <= 240) {
  push();
  stroke(lerpColor(color("#12130F"),color("#8FCB9B"), frameCount/240));
  strokeWeight(frameCount/20);
  translate(width/2,height/2);
  rotate(240);
  arc(100,0,200,200,240,240+frameCount);
  pop();

  push();
  stroke(lerpColor(color("#12130F"),color("#856084"), frameCount/240));
  strokeWeight(frameCount/20);
  translate(width/2,height/2);
  rotate(300);
  arc(100,0,200,200,120-frameCount,120);
  pop();
}

else if (frameCount <= 480) {
  push();
  stroke("#8FCB9B");
  translate(width/2,height/2);
  rotate(360);
  arc(100,0,200,200,240,240+(frameCount-240));
  pop();

  push();
  stroke("#856084");
  translate(width/2,height/2);
  rotate(180);
  arc(100,0,200,200,120-(frameCount-240),120);
  pop();
}

else if (frameCount <= 720) {
  push();
  stroke("#8FCB9B");
  translate(width/2,height/2);
  rotate(120);
  arc(100,0,200,200,240,240+(frameCount-480));
  pop();

  push();
  stroke("#856084");
  translate(width/2,height/2);
  rotate(60);
  arc(100,0,200,200,120-(frameCount-480),120);
  pop();

}

else if (frameCount <= 820) {
  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(120);
  line(0,0,frameCount-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(240);
  line(0,0,frameCount-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(300);
  line(0,0,frameCount-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(60);
  line(0,0,frameCount-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(0);
  line(0,0,frameCount-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(180);
  line(0,0,frameCount-720,0);
  pop();
}

else if (frameCount <= 1020) {

  background("#12130F");

//ridisegno fiore

  push();
  stroke("#8FCB9B");
  strokeWeight(12);
  translate(width/2,height/2);
  rotate(240);
  arc(100,0,200,200,240,480);
  pop();

  push();
  stroke("#856084");
  strokeWeight(12);
  translate(width/2,height/2);
  rotate(300);
  arc(100,0,200,200,-120,120);
  pop();

  push();
  stroke("#8FCB9B");
  translate(width/2,height/2);
  rotate(360);
  arc(100,0,200,200,240,240+240);
  pop();

  push();
  stroke("#856084");
  translate(width/2,height/2);
  rotate(180);
  arc(100,0,200,200,120-240,120);
  pop();

  push();
  stroke("#8FCB9B");
  translate(width/2,height/2);
  rotate(120);
  arc(100,0,200,200,240,240+(720-480));
  pop();

  push();
  stroke("#856084");
  translate(width/2,height/2);
  rotate(60);
  arc(100,0,200,200,120-(720-480),120);
  pop();

//linee
  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(120);
  line(0,0,820-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(240);
  line(0,0,820-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(300);
  line(0,0,820-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(60);
  line(0,0,820-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(0);
  line(0,0,820-720,0);
  pop();

  push();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(180);
  line(0,0,820-720,0);
  pop();

//disegno nuovi petali

  push();
  noFill();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(0);
  square(100,0,frameCount-820,0,100,100,100);
  pop();

  push();
  noFill();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(60);
  square(100,0,frameCount-820,0,100,100,100);
  pop();

  push();
  noFill();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(120);
  square(100,0,frameCount-820,0,100,100,100);
  pop();

  push();
  noFill();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(180);
  square(100,0,frameCount-820,0,100,100,100);
  pop();

  push();
  noFill();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(240);
  square(100,0,frameCount-820,0,100,100,100);
  pop();

  push();
  noFill();
  stroke("#EAE6E5");
  strokeWeight(9);
  translate(width/2,height/2);
  rotate(300);
  square(100,0,frameCount-820,0,100,100,100);
  pop();

}


}
