const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyAnimation;
var Stone1;
var mango1,mango2,mango3,mango4;
var constraint;

function preload()
{
	boyAnimation = loadImage("Plucking mangoes/boy.png");
	treeimg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	image(boyAnimation,300,450)

	Stone1 = new STONE (150,370);

	mango1 = new MANGO(800,100,30);
	mango2 = new MANGO(830,190,30);
	mango3 = new MANGO(900,150,30);
	mango4 = new MANGO(930,182,30);

	ground = new GROUND(600,480,1200,20)

	boxx = 900;
	boxy = 470;
	boxw = 200;
	boxt = 20;
	boxh = 200;

	boxb = new Dustbin(boxx,boxy,boxw,bowt);
	boxl = new Dustbin(boxx-boxw/2, boxy-boxh/2+10, boxh);
	boxr = new Dustbin(boxx+boxw/2, boxy-boxh/2+10, boxh);

	constraint = new CONSTRAINT(Stone1,{x :250, y : 500})

	Engine.run(engine);
  
}

function draw() {
	background("lightblue");

boxb.display();
boxl.display();
boxr.dosplay();  
image(boyAnimation,130,320,200,200);
image(treeimg,780,30,250,450);
Stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
constraint.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);

ground.display();

drawSprites();
						
}

function mouseDragged() {
	Matter.body.setPosition(STONE,{x : mouseX, y : mouseY});
}

function mouseReleased() {
	constraint.fly();
}

function detectCollision (lmango,lstone) {
	mangoBodyPosition = lmango.body.Position
	stoneBodyPosition = lstone.body.Position

	var distance =dist(stoneBodyPosition.xstoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed () {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone1.body,{x : 150, y : 370});
		conastraint.attach(stone1.body);
	}
}