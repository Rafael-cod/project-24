const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var boxSideLeft, boxSideRight, boxBott;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,15);
	paper = new Paper(100,660);

	boxBott = new Box(600,660,150,15);
	boxSideLeft = new Box(525,625,15,75);
	boxSideRight = new Box(675,625,15,75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);

  drawSprites();
 
  ground.display();
  paper.display();
  boxBott.display();
  boxSideLeft.display();
  boxSideRight.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


