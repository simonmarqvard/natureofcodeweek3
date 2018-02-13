var points;
var particles = [];

function preload() {
	font = loadFont("AvenirLTStd-Roman.otf")

}


function setup() {
	createCanvas(800,500);
	background(50);
	textSize(70);
	textAlign(CENTER);


	points = font.textToPoints("NATURE OF CODE",0,height/2);


	for (var i = 0; i < points.length; i++) {
		var place = points[i];
		particle = new Particle(place.x,place.y);
		particles.push(particle);
	 }
}

function draw() {
	background(100,200,200);
	for (var i = 0; i < particles.length-1; i++) {
		particles[i].update();
		particles[i].display();


	beginShape(LINES)
	vertex(particles[i].location.x,particles[i].location.y);
	vertex(particles[i+1].location.x,particles[i+1].location.y);
	endShape();
}

}
