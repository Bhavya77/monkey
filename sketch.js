
var monkeyImage , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
  survivalTime=0
}



function setup() {
  
createCanvas(600,400)
  
   monkey=createSprite(50,160,10,10)
  
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.13
  
  g=createSprite(300,395,1200,40)
   
  fruitsGroup=new Group();
  obstacleGroup=new Group();
  
  g.x = g.width /2;
   
  
}


function draw() {

  background("white")
  
  console.log(survivalTime)
survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  textSize(20)
  text("survivalTime= "+survivalTime,170,50)
  
  g.velocityX=-5;
  
  
  monkey.velocityY=monkey.velocityY+2
  
  monkey.collide(g)
  
 // console.log(g.x)
  
  if(keyDown("space")&&monkey.y>330){
    
    monkey.velocityY=-30;
    
  
  }
  
   if (g.x < 0){
      g.x = g.width/2;
    }
 
  if(frameCount % 80===0){
    
     f();
  }
  if(frameCount % 200===0){
    
    obstacle();
  }
    
 
  
  drawSprites();
}


function f(){
  
  fruit=createSprite(600,Math.round(random(70,200)),20,20)
  fruit.velocityX=-5
  
  fruit.addImage(bananaImage)
  
  fruit.scale=0.1
  
  fruit.lifetime=525
  
  fruitsGroup.add(fruit)
}
function obstacle(){
  
  o=createSprite(600,340,10,10)
  o.addImage(obstaceImage)
  o.scale=0.2
  
 
  
  o.velocityX=-10;
}


