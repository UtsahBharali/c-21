var car;
var wall, thickness;
var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,225)
	weight=random(30,52)
	thickness=random(22,83)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1200,thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
  
  drawSprites();
 
}

function hascollided(Lbullet, Lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
	return true
}
else {
	return false
}


if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed *speed/(thickness *thickness *thickness);

if(damage>10)
{
wall.shapecolor=color(255,0,0);
}

if(damage<10)
{
wall.shapeColor=color(0,255,0);
}
}
}

