
var  ground , paper1 ;
var wallSprite , wall2Sprite , wall3Sprite ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 
function setup() {
  createCanvas(1200, 600);
  
  engine = Engine.create();
	world = engine.world;


  paper = new Papper(100,470,20);
  
	ground = new Ground(600 , 500 ,1200 , 20 );
  
  wallSprite=createSprite(1100 , 485 , 150,10);
	wallSprite.shapeColor=color("red")

	wall2Sprite=createSprite(1020 , 445,10,90);
	wall2Sprite.shapeColor=color("red")

	wall3Sprite=createSprite(1180 , 445 , 10 , 90);
	wall3Sprite.shapeColor=color("red")


   
    Engine.run(engine);
  
}


function draw() {

  background(0);
  paper.display();
  ground.display();

 
  drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce( paper.body,paper.body.position,{x:85,y:-85});
}

}

