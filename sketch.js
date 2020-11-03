
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper,ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new Paper(500,510,60);
	paper=new Paper(300,200,40);
	ground=new Ground(800,600,1600,20);

	
	//dustbin2=new Dustbin(1000,510,20,200);
	//dustbin3=new Dustbin(1100,600,200,20);
	

	Engine.run(engine);
  
}


function draw() {

Engine.update(engine);
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();

  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  

  

  
 
}



