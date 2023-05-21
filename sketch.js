var ball;
var wall1 , wall2 ; 


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
	var ball_options = 
	{
	  isStatic: false,
	  restitution: 0.3,
	  friction: 0,
	  density: 0.12
	}

	ball = Bodies.circle(200 , 0 , 30 , ball_options);
	World.add(world , ball);

	groundObj = new Ground(width/2 , 670 , width , 20);
	leftSide  = new Ground(1100 , 600 , 20 , 120);

	wall1 = new Ground(700 , 615 , 10 , 90);
	wall2 = new Ground(550 , 615 , 10 , 90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  
  var bp = ball.position

  ellipse(bp.x , bp.y , 30)

  groundObj.show();
  leftSide.show();
  wall1.show();
  wall2.show();

  //vForce();
  //keyPressed();
  
  drawSprites();
 
}



function keyPressed() 
{
 if (keyCode === UP_ARROW) 
 {
   Matter.Body.applyForce(ball, {x:0 , y:0}, {x:10 , y:-15});

 }
}
