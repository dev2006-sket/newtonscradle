const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	//Create the Bodies Here.

	roof = new Roof(600,height,1200,20)
    bob1 = new bob(100,100);
	bob2 = new bob(200,200);
    bob3 = new bob(300,300);
	bob4 = new bob(400,400);
	bob5 = new bob(500,500);
	rope1 = new rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new rope(bob2.body, roof.body, -bobDiameter*2, 0);
	rope3 = new rope(bob2.body, roof.body, -bobDiameter*2, 0);
	rope4 = new rope(bob4.body, roof.body, -bobDiameter*2, 0);
	rope5 = new rope(bob5.body, roof.body, -bobDiameter*2, 0);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
  drawSprites();
 
}



