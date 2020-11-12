class Ball {
    constructor(x, y) {
      var Boptions = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.3,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.radius = 10;

      this.body = Bodies.circle(x, y,this.radius, Boptions);
      
      this.color = color(random(0,255),random(0,255),random(0,255));

      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);

      fill(this.color);
      noStroke();

      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };