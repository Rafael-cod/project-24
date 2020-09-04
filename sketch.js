const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var boxSide1, boxSide2, boxBott;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground = createSprite(400,680,800,15);
	ground.shapeColor = color("yellow");

	var boxBott = createSprite(600,660,150,15);
	boxBott.shapeColor = color(255);
	var boxSide1 = createSprite(525,625,15,75);
	boxSide1.shapeColor = color(255);
	var boxSide2 = createSprite(675,625,15,75);
	boxSide2.shapeColor = color(255);

	var paper = new Paper(100,660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(Paper.body.position,{x:85,y:-85})
	}
}


