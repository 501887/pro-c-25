
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbinSide1,dustbinSide2,dustbinSide3;
function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	 world = engine.world;


	 paper = new Paper(100, 600, 10);

     ground = new Ground(400, 680, 800, 20);
  
	dustbinSide1 = new Dustbin(550, 620, 20, 100);
    dustbinSide2= new Dustbin(635, 660, 150, 20);
	dustbinSide3 = new Dustbin(720, 620, 20, 100);
	 
	 Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	Engine.update(engine);
  
	paper.display();
  
	ground.display();
  
	dustbinSide1.display();
	dustbinSide2.display();
	dustbinSide3.display();
  
	drawSprites();
   
  }
  
  function keyPressed(){
	  if(keyCode === UP_ARROW)  {
		 Matter.Body.applyForce(paper.body, paper.body.position, 
			 {x:15, y: -15})
	  }
  
	}
  

