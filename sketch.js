var ball;
function setup() {
  createCanvas(400,400);
ball = createSprite(200,200,10,10);
}

function draw() 
{
  background(255);
  if(keyIsDown(RIGHT_ARROW)) {
    ball.position.x = ball.position.x +5;
  }
if(keyIsDown(UP_ARROW)) {
  ball.position.y = ball.position.y -3;
}

  drawSprites();
}




