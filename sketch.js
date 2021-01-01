
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
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,height,width,40); //x=1600/2, y=700, width = 1600, height = 40

	dustbin1=new Dustbin(width-200, height-30, 150, 20); //create a bin towards right and bottom side of the canvas
	paper=new Paper(300,200,40);	
	Engine.run(engine);  //update engine
}


function draw() {
  //Engine.update(engine);  Engine.run() is for the same.
  rectMode(CENTER);
  background("lightgreen");
  dustbin1.display();
  paper.display();
  ground.display();
}

function keyPressed(){
	if(keyCode===32|| keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-55})
		
	}
}



