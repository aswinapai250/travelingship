var ship1,ship2,ship3,ship4,traveling_ship;
var sea,sea_ground,edges;

function preload(){
  traveling_ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_ground = loadImage("sea.png")
}


function setup(){
  createCanvas(600,600)

    sea = createSprite(200,0);
   sea.addImage("sea.png",sea_ground);
   sea.x = sea.width/2;

   ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",traveling_ship)
  edges = createEdgeSprites();

  
   ship.scale = 0.25;
}

function draw() {
  background("blue");

  sea.velocityX = -6;

  if(sea.x < 0){
  sea.x = sea.width/2;
  }

    
  drawSprites();
}
