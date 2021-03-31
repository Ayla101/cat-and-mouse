var tom,tomimg1,tomimg2,tomimg3,jerry,bg;

function preload() {
    tomimg1=loadImage("images/cat1.png")
    tomimg2=loadImage("images/cat2.png","images/cat2.png")
    tomimg3=loadImage("images/cat4.png")

    mouse1=loadImage("images/mouse1.png");
    mouse2=loadImage("images/mouse2.png","images/mouse3.png");
    mouse3=loadImage("images/mouse4.png");
    bg=loadImage("images/garden.png");
}
    
function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(900,600);
    tom.addAnimation("tom",tomimg1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerry",mouse1);
    jerry.scale=0.15;
    jerry.debug=true
    tom.debug=true
}

function draw() {

    background(bg);
   if(tom.x-jerry.x<tom.width/2-jerry.width/2){
       tom.velocityX=0;
       tom.addAnimation("tom",tomimg3);
       tom.x=400
       jerry.addAnimation("jerry",mouse3);
       
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if (keyCode===LEFT_ARROW){
       tom.velocityX=-5
       tom.addAnimation("tom",tomimg2)
       jerry.addAnimation("jerry",mouse2)
   }

}


