
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      Plane = new Plane(200,650,2000,100);
	    Hammer = new Hammer(600,450,150,40)
      Stone = new Stone(480,540,0,0);
      Rubber = new Rubber(750,572,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Plane.display();
  Hammer.display();
  Stone.display();
  Rubber.display();
  drawSprites();
 
}



