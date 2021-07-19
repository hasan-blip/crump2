
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,650,800,10)
ball=new Ball(100,600,30)
 dustbin= new Dustbin(550, 600, 80, 100);

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ground.display()
  ball.display()
	dustbin.display()

  drawSprites();
 
}
function keyPressed()
{ if(keyCode === UP_ARROW)
	 { Matter.Body.applyForce(ball.body, ball.body.position, {x:160, y: -160}) } }



