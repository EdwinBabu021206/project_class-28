const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3,mango4, mango5, mango6, mango7, mango8;
var tree;
var ground;
var boy;
var stoneObj;
var launcher;

function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(950, 450, 100, 300);
	
	// ground
	ground = new Ground(400, 680, 1600, 50);

	// mangoes
	mango1 = new Mango(950,200,30,30);
	mango2 = new Mango(900,300,30,30);
	mango3 = new Mango(1000,350,30,30);
	mango4 = new Mango(900,400,30,30);
	mango5 = new Mango(800,470,30,30);
	mango6 = new Mango(1050,300,30,30);
	mango7 = new Mango(1100,250,30,30);
	mango8 = new Mango(1000,250,30,30);

	stoneObj = new Stone(175, 280);


	launcher = new Launcher(stoneObj.body, {x:280, y:580});
	
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);


  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  stoneObj.display();

  
  launcher.display();

  image(boy, 200,580, 250,350);
  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX, y: mouseY})

}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){

        Matter.Body.setPosition(stoneObj.body,{x:200, y:50});
       launcher.attach(stoneObj.body);

    }
}


