const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground1,ground2,ground3,ground4;

var particles = [];
var plinkos = [];
var divisions = []; 


var divisionHeight = 300;

function setup() {
  createCanvas(480,720);
  drawSprites();

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,720,width,10)
  ground3 = new Ground(0,360,10,height)
  ground4 = new Ground(480,360,10,height)

  for (var k = 0; k <= width ; k = k+80) {
    divisions.push(new Divisions(k , height - divisionHeight/2 , 10 , divisionHeight))
    
  }

  for(var j = 35 ; j <= width - 10 ; j = j + 50){
    plinkos.push(new Plinko(j , 75))
  }

  for(var j = 15 ; j <= width - 10 ; j = j + 50){
    plinkos.push(new Plinko(j , 135))
  }

  for(var j = 35 ; j <= width - 10 ; j = j + 50){
    plinkos.push(new Plinko(j , 195))
  }

  for(var j = 15 ; j <= width - 10 ; j = j + 50){
    plinkos.push(new Plinko(j , 255))
  }



  
}

function draw() {
  background(0);

  Engine.update(engine);

  ground1.display();
  ground3.display();
  ground4.display();

  for(var k = 0 ; k < divisions.length ; k++){
    divisions[k].display();
    
  }

  for(var j = 0 ; j < plinkos.length ; j++){
    plinkos[j].display();
  }
  
  if(frameCount % 60 === 0){
    particles.push(new Ball(random(width/2 - 300 , width/2 + 300),10,10))
  }

  for(var p = 0 ; p < particles.length ; p++){
    particles[p].display();
  }

  drawSprites();

}