function setup () {
  
  createCanvas(600, 600); // build us a canvas
  background(0); // I think it should be night time
  noStroke(); // Draw shapes without an outline

  var houseX = 100;
  var houseY = 300;
  var houseWidth = 200;
  var houseHeight = 200;
  var roofHeight = 100;

  rect(houseX, houseY, houseWidth, houseHeight); // Draw a main structure

  fill(75);//make ground a color
  rect(0, 500, 600, 100); // draw the ground
  fill(150);//make the house gray
  triangle(houseX - 10, houseY, houseX + houseWidth/2, houseY - roofHeight, houseX + houseWidth + 10, houseY); // draw the roof

  fill(0);//make door black
  rect(170, 425, 45, 75);//door

  fill(150);//m1ake doorknob gray
  ellipse(205, 460, 7, 7);//doorknob

  fill(0);//make windows lighter
  rect(125, 325, 60, 75); //left window
  rect(210, 325, 60, 75);
  rect(325, 425, 90, 75);

}
