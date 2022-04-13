var boyrun, bg, bgimage, boy;
function preload(){
  //pre-load images
  bgimage = loadImage("path.png")
  boyrunimage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  bg = createSprite (200,200)
  bg.addImage(bgimage)
  bg.velocityY = 4;
  boy = createSprite(200,300)
  boy.addAnimation("running",boyrunimage)
  boy.scale = 0.1;
  leftwall = createSprite(10,300,10,100)
  rightwall = createSprite(390,300,10,100)
  leftwall.visible = false;
  rightwall.visible = false;
}

function draw() {
  background(0);
  boy.x = mouseX
  if(bg.y>400){
    bg.y= height/2
  }
  boy.collide(leftwall)
  boy.collide(rightwall)
drawSprites()
}
