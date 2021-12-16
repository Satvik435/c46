 
var knife;
var alien1
var fruit1
var fruit2
var fruit3
var fruit4 
var fruitgroup
var score=0
function preload(){
  alien1=loadImage('assets/alien1.png')
  fruit1=loadImage('assets/apple.png')
  fruit2=loadImage('assets/banana.png')
  fruit3=loadImage('assets/pear.png')
  fruit4=loadImage('assets/orange.png')
  knifeimg=loadImage('assets/knife.png')
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  knife=createSprite(13,13,13,13)
  knife.addImage(knifeimg)
knife.scale=0.7

fruitgroup=createGroup()

}

function draw() {
  background(0); 
knife.x=mouseX
knife.y=mouseY
if(fruitgroup.isTouching(knife)){
  fruitgroup.destroyEach()
  score += 100 
}
text('Score:'+score,width-200,50)
spawnFruits()
drawSprites();



}
function spawnFruits(){
  if(World.frameCount%15===0){
    fruit=createSprite(213,-10,10,10)
    fruit.velocityY = 25;
    fruit.x=random(100,width-100)
    fruit.scale=0.2
    var randomfruit=Math.round(random(1,4))
    if(randomfruit===1){
      fruit.addImage(fruit1)
      fruit.scale=0.08
    }
else if (randomfruit==2){
fruit.addImage(fruit2)
}  
else if (randomfruit==3){
  fruit.addImage(fruit3)
  }  
  else {
    fruit.addImage(fruit4)
    }
    fruit.lifetime=height/20  
    fruitgroup.add(fruit)


  }
}