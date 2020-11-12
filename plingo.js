class Plinko {
    constructor(x, y) {
      var Boptions = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.3,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.radius = 10;
      this.body = Bodies.circle(x, y,this.radius, Boptions);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      stroke(58, 6, 82)
      fill(208, 107, 255);
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };