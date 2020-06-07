var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness))
  
  wall = createSprite(1200, 200,thickness , 200);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(200, 200, 20, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
}

function draw() {
  background(0);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    
    text("damage: "+ damage,800,200);
    text("weight: "+ weight,800,20);
    text("speed: "+ speed,800,40);
    text("wall thickness: "+ thickness,800,60);
    if(damage>=10){
      wall.shapeColor="red";
    }
    else{
      wall.shapeColor="green";
    }
  }
  else{
    bullet.velocityX=speed;
  }
  drawSprites();
}