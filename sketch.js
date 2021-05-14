var wall, thickness
var bullet, speed, weight

function setup() {
  createCanvas(1000,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,10);
  wall=createSprite(900,200,thickness,height/2);
 
  wall.shapeColor="cyan";
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  bullet.shapeColor="white";

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    
    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);

  if(damage>10){
  wall.shapeColor="red";
  }
  if(damage<=10){
  wall.shapeColor="green";
  }

  }

  function hasCollided(Lbullet,Lwall){
    bulletRightEdge=Lbullet.x+ Lbullet.width;
    wallLeftEdge=Lwall.x;

    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
      return false;
  }

  drawSprites();
}
