
function setup() {
  createCanvas(400,400);
  sprite=createSprite(200,200,10,10)
  
}

function draw() 
{
  background("yellow");
  if (keyDown("UP")){
    sprite.y=sprite.y-5
  }
  if(keyDown("DOWN")){
    sprite.y=sprite.y+5
  }
  if (keyDown("RIGHT")){
    sprite.x=sprite.x+5
  }
  if (keyDown("LEFT")){
    sprite.x=sprite.x-5
  }
  drawSprites()

}




