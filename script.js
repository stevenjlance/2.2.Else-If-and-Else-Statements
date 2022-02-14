

function setup() {
  createCanvas(500, 500);
	background(0);
}

function draw() {
	rectMode(CENTER);
  background(0);
  fill(255, 0, 0); //set the initial fill to red

	// Demo
	// if(mouseX > 300) {
	// 	background(200); 
	// }
	// else {
	// 	background(0);
	// }

	// Practice #1
	// rectMode(CENTER);
  // background(0);
  // fill(255, 0, 0); //set the initial fill to red

  // if (mouseX > 250) {
  //   ellipse(width / 2, height / 2, 40, 40);
  // } else {
  //   rect(width / 2, height / 2, 40, 40);
  // }

	// Practice #2
	// if (mouseY > 250) {
  //   ellipse(width / 2, height / 2, 40, 40);
  // } else {
  //   rect(width / 2, height / 2, 40, 40);
  // }


	// Practice #3
	//begin with highest value
	//  if (mouseX > 500) { 
  //   ellipse(550, 60, 20, 20); 
	// 	//draw an ellipse at 550
  // } else if (mouseX > 400) {
  //   ellipse(450, 60, 20, 20); 
	// 	//if the mouse moves left draw an ellipse at 450
  // } else if (mouseX > 300) {
  //   ellipse(350, 60, 20, 20); 
	// 	//if the mouse moves more draw an ellipe at 350
  // } else if (mouseX > 200) {
  //   ellipse(250, 60, 20, 20); 
	// 	//draw an ellipse at 250
  // } else if (mouseX > 100) {
  //   ellipse(150, 60, 20, 20); 
	// 	//draw an ellipse at 150
  // } else { 
	// 	//in all other cases (which means the mouseX is less than 100)
  //   ellipse(50, 60, 20, 20); 
	// 	//draw an ellipse at 50
  // }

	// Practice #4
	// if(mouseX>100){//begin with highest value
	// 	ellipse(150, 60, 20,20)//draw an ellipse at 550
	// }if(mouseX>200){
	// 	ellipse(250, 60, 20,20)//if the mouse moves left draw an ellipse at 450
	// }if(mouseX>300){
	// 	ellipse(350, 60, 20,20)//if the mouse moves more draw an ellipe at 350
	// }if(mouseX>400){
	// 	ellipse(450, 60, 20,20)//draw an ellipse at 250
	// }if(mouseX>500){
	// 	ellipse(550, 60, 20,20)//draw an ellipse at 150
	// }if(mouseX > 0){//in all other cases (which means the mouseX is less than 100)
 	//  ellipse(50,60,20,20)//draw an ellipse at 50
	// }

	// Practice #5
	// var redLight = 'white';
  // var yellowLight = 'white';
  // var greenLight = 'white';

  // background(220);
  // rectMode(CENTER); // place the rectangle according to its CENTER
  // fill(140);
	// rect(width / 2, height / 2,50,100); // draw the surrounding rect

  // if (mouseY > (height / 2 + 20)) { // begin with the highest value. if mouseY is at the bottom of the canvas
  //   greenLight = 'green' // set the greenlight variable to green
  // }
  // else if (mouseY > height / 2 - 20){ // is mouseY is towards the middle
  //   yellowLight = 'yellow'; // set the yellowLight variable to yellow
  // }
  // else {
  //   redLight = 'red';
  // }

  // fill(redLight);
  // ellipse(width / 2, height / 2 - 25, 20, 20);
  // fill(yellowLight);
  // ellipse(width / 2, height / 2, 20, 20);
  // fill(greenLight);
  // ellipse(width / 2, height / 2 + 25, 20, 20);







	
}