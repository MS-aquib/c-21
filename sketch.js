var fixedRect, movingRect;

var bullet,wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  bullet=createSprite(200,600,50,30);
  bullet.velocityX=10;
  wall=createSprite(700,600,30,80);
  wall.shapeColor="cyan";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouch(bullet,wall)){
    bullet.velocityX=0
    wall.shapeColor="red";

  }

  
  drawSprites();
}





