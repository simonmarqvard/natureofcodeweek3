class Particle {

  constructor(x, y) {
    this.location = createVector(x, y)
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.radius = 2;
    this.angle = 0;
    this.movementX = 0;
  }

  update() {
//    this.location.add(this.velocity);
//    this.velocity.add(this.acceleration);
    this.location.add(this.movementX,);

// How do i get each point to go in simple harmonic motions back and forth?
      this.movementX = random(floor(-1,1)) * sin(this.angle);
       this.angle = this.angle + 0.01


  }


  display() {
    strokeWeight(2);
		stroke(255,255,255);
    fill(255,255,255);
		point(this.location.x,this.location.y);
  }


}
