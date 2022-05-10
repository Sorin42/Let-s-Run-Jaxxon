var street,streetline;
var jaxxon, train;
var leftboundary,rightboundary;
function preload(){
  //pre-load images\
  streets = loadImage("path.png")
  runner = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,600);
  leftboundary = createSprite(40,400,50,800)
  rightboundary = createSprite(360,400,50,800)
  rightboundary.visible = false; 
  leftboundary.visible = false;
  street = createSprite(200,400,)
  street.addImage("movingpath",streets)
  street.velocityY = 6
  jaxxon = createSprite(200,550,20,20);
  jaxxon.addAnimation("jaxon",runner)
  jaxxon.scale = 0.1
  //create sprites here
}

function draw() {
  background("white");
  if(street.y > 500){
    street.y = street.width/2
  }
  jaxxon.x = mouseX;
  jaxxon.collide(leftboundary)
  jaxxon.collide(rightboundary)
  drawSprites();
}
