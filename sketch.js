var  wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)

bullet=createSprite(50, 200, 50, 50);
bullet.velocityX = speed;

wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=(80,80,80);

}

var speed, weight;
var car, wall;



function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,60,100);

speed=random(55,90);
weight=random(400,1500);

car.velocityX = speed;

}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
  var deformation = 0.5 * width * speed * speed ;
  if (deformation>180){
  car.shapeColor = "red";  
  }
  if(deformation<180 && deformation>100){
  car.shapeColor="yellow";  
  }
  if(deformation<100){
  car.shapeColor="green";  
  }
  } 
drawSprites();
  }