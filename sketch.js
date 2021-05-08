var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;
var invisibleBlockGroup,invisibleBlock;
var gameState="play";
var sound;
function preload(){
towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
   ghostImage=loadImage("ghost-standing.png");
  sound=loadSound("spooky.wav")
}
function setup(){
  createCanvas(600,600);
  sound.loop();
 tower=createSprite(300,300);
 tower.addImage("tower",towerImage);
  tower.velocityY=1;
ghost=createSprite(200,200,50,50);
ghost.addImage("ghost",ghostImage)
  ghost.scale=0.4;
  doorsGroup=new Group();
  climberGroup=new Group();
  invisibleBlockGroup=new Group();
}
function draw(){
 background("white");
if(gameState==="play"){
  

  if (keyDown("space")){
    ghost.velocityY=-5; 
    
  }
  
  
  if (keyDown("left")){
  ghost.x=ghost.x-2;
  }
  if (keyDown("right")){
  ghost.x=ghost.x+2;
  }
  
  ghost.velocityY=ghost.velocityY+0.5
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0
  } 
   spawnDoors();
  if(tower.y>400){
    tower.y=300;   
  }
  if(invisibleBlockGroup.isTouching(ghost)){
    ghost.destroy();
    gameState="end";
    
  
}
drawSprites();
}
  if(gameState==="end"){
    stroke("green")
    fill("black")
    textSize(40);
    text("game over",300,350)
  }
   
  
 
}
function spawnDoors(){
  if (frameCount % 150 === 0) {
     door= createSprite(200,-50);
    door.x = Math.round(random(80,500));
    climber=createSprite(200,10)
    climber.addImage(climberImage);
    door.addImage(doorImage);
    door.scale = 0.5;
    door.velocityY = 3;
    climber.velocityY = 3;
    invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.velocityY=3;
    invisibleBlockGroup.add(invisibleBlock);
     //assign lifetime to the variable
    door.lifetime =600;
    climber.lifetime=600;
  climber.x= door.x  
    invisibleBlock.x=door.x
    //adjust the depth 
   ghost.depth = door.depth;
  ghost.depth = ghost.depth + 1;
    climberGroup.add(climber);
    //adding door to the group
  doorsGroup.add(door);
    }
}




