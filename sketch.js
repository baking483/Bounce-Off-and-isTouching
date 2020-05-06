var fixedRect;
var movingRect;

var object1;
var object2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(200,300,80,30);
  movingRect.shapeColor = "blue";
  object1 = createSprite(200,5,30,10);
  object1.velocityY = 3;
  object2 = createSprite(200,395,30,10);
  object2.velocityY = -3;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.width/2+fixedRect.width/2>movingRect.x - fixedRect.x && movingRect.width/2 + fixedRect.width/2>fixedRect.x-movingRect.x && movingRect.height/2+fixedRect.height/2>movingRect.y-fixedRect.y && movingRect.height/2+fixedRect.height/2>fixedRect.y-movingRect.y){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  } 
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  if(object1.width/2+object2.width/2>object1.x-object2.x && object1.width/2+object2.width/2>object2.x-object1.x){
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
  }
  if(object1.height/2+object2.height/2>object1.y-object2.y && object1.height/2+object2.height/2>object2.y - object1.y){
    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);
  }
  drawSprites();
}