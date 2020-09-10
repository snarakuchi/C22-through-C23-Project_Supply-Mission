var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box2,box3;
var package_options,ground_options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//Options
	var package_options = {
		isStatic: true,
		restitution: 1
	}

	var ground_options ={
		isStatic: true
	}

	//Physics Engine
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
 	World.add(world, ground);

	//The Package
	packageSprite=createSprite(packageBody.position.x,packageBody.position.y,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//The Ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//The Chopper
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//Boxes
	box = new Box(400,600,200,20);
	box2 = new Box(335,565,20,100);
	box3 = new Box(465,565,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  //If the Down Arrow is Pressed
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }

  //Box Display
  box.display();
  box2.display();
  box3.display();

  drawSprites();
}