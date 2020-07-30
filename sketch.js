var fixed_rec;
var moving_rec;
function setup() {
  createCanvas(800,400);
  fixed_rec = createSprite(400, 200, 50, 50);
  fixed_rec.shapeColor = "yellow";
  fixed_rec.velocityX = -3;
  moving_rec = createSprite(0,200,50,50);
  moving_rec.shapeColor = "yellow";
  moving_rec.velocityX = 5;
 
  fixed_rec1 = createSprite(400, 20, 50, 50);
  fixed_rec1.shapeColor = "red";
  fixed_rec1.velocityY = 3;
  moving_rec1 = createSprite(400,430,50,50);
  moving_rec1.shapeColor = "red";
  moving_rec1.velocityY = -5;
}

function draw() {
  background(255,0,255);  
 // moving_rec.y = mouseY;
 // moving_rec.x = mouseX;

if(isTouching(moving_rec1,fixed_rec1)){
  moving_rec1.shapeColor = "blue";
  fixed_rec1.shapeColor = "blue";
  fixed_rec1.velocityY = fixed_rec1.velocityY*(-1);
  moving_rec1.velocityY = moving_rec1.velocityY*(-1);
}
else{
  moving_rec1.shapeColor = "red";
  fixed_rec1.shapeColor = "red"; 
}
if(isTouching(moving_rec,fixed_rec)){
  moving_rec.shapeColor = "blue";
  fixed_rec.shapeColor = "blue";
  fixed_rec.velocityY = fixed_rec.velocityY*(-1);
  moving_rec.velocityY = moving_rec.velocityY*(-1);
}
else{
  moving_rec.shapeColor = "yellow";
  fixed_rec.shapeColor = "yellow"; 
}
 
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2 
    && object2.y - object1.y < object1.height/2 + object2.height/2){
/* moving_rec1.shapeColor = "blue";
  fixed_rec1.shapeColor = "blue";
  fixed_rec1.velocityY = fixed_rec1.velocityY*(-1);
  moving_rec1.velocityY = moving_rec1.velocityY*(-1);*/
  return true;
  }
  else{
 // moving_rec1.shapeColor = "red";
 // fixed_rec1.shapeColor = "red";
 return false;
  }
}