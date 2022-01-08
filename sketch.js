var n = 0;
var c = 3;

function setup(){
		createCanvas(500,500);
		angleMode(DEGREES);
		//colorMode(HSB);
		background(2, 0, 51);
}

function draw(){

	var a= n * 137.5;
	var r = c * sqrt(n);
	
	var x = r * cos(a)+ width/2;
	var y = r * sin(a)+ height/2;

	fill(a % 256, 255, 255);
	noStroke();
	ellipse(x, y, 4, 4);

	n++;
}