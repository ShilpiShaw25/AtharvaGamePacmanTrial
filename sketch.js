var bg;
var pac,Pac;
var P,p;
var Sp,sp,Sound;
var PacD,pacD;
var gh,gh1,gh2,gh3,Ghost1,Ghost2,Ghost3,Ghost4,Ghost5;
var gameState = "serve";
var PLAY = 1;
var END = 2;
var score = 0;
var Side1 ,Side2 , Side3 ,Side4 ,line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17,line18,line19,line20;


function preload(){
bg = loadImage("images.jpg");
pac = loadAnimation("Pac1.png","Pac2.png")
pacD = loadAnimation("PacD.png","Pac2.png")
Ghost1 = loadImage("ghost1.png")
Ghost2 = loadImage("ghost2.png")
Ghost3 = loadImage("ghost3.png")
Ghost4 = loadImage("ghost5.png")
Ghost5 = loadImage("ghost4.png")
p = loadImage("pellets.png")
sp = loadImage("Spellets.png")
Sound  = loadSound("pacman_chomp.wav");
}

function setup(){
 createCanvas(displayWidth-1,displayHeight-111);

 Pac = createSprite(300,380,10,10);
 
Pac.addAnimation("running",pac)
Pac.addAnimation("Rundown",pacD)

Pac.scale = 1;

gh = createSprite(725,345,10,10);
gh.addImage(Ghost1)
gh.scale=0.122


gh1 = createSprite(770,345,10,10);
gh1.addImage(Ghost2)
gh1.scale=0.0999


gh2 = createSprite(385,200,10,10);
gh2.addImage(Ghost3)
gh2.scale=0.129

gh3 = createSprite(430,200,10,10);
gh3.addImage(Ghost4)
gh3.scale=0.0999

SP = new Group();
  P1 = new Group();

for (var i = 30; i < 800; i=i+300) {
    Sp=createSprite(i,i,5,5);
    Sp.addImage(sp);
    Sp.scale = 0.0789;
SP.add(Sp); 
      
}

for (var i = 30; i < 300; i=i+300) {
    Sp=createSprite(800,i,5,5);
    Sp.addImage(sp);
    Sp.scale = 0.0789;
SP.add(Sp); 
      
}



  for (var i = 20; i < 500; i=i+30) {
    P=createSprite(200,i,5,5);
    P.addImage(p);
    P.scale = 0.0799
    P1.add(P)
  }
  
}

function draw(){
    background(bg);
    Pac.velocityX=0;
    Pac.velocityY=0;
    
  
    if(gameState === "serve"){
        textSize(24);
        fill("WHITE")
        text("PRESS Q TO START THE GAME!!!",600,300)
    if(keyDown("Q")){
        gameState = PLAY;
    }
    }

    

 if(gameState===PLAY){
     
   Pac.changeAnimation("running",pac);

    if(keyDown("UP_ARROW")){
       Pac.velocityY=-4;
   }
   
   if(keyDown("DOWN_ARROW")){
    Pac.velocityY=4
    
    Pac.changeAnimation("Rundown",pacD);
    console.log("down arrow")
    Pac.scale=0.5
}

if(keyDown("LEFT_ARROW")){
    Pac.velocityX=-4
}

if(keyDown("RIGHT_ARROW")){
    Pac.velocityX=4
}

var r= Math.round(random(1,4));
switch(r){
    case 1: 
    gh1.velocityX=5;
    gh1.velocityY=-5;
    
    break;
    case 2: gh2.velocityX=5;
    gh2.velocityY=-5;
    break;
    case 3: gh3.velocityY=5;
    gh3.velocityX=-5;
    break;
    case 4: gh.velocityY=5;
    gh.velocityX=-5;
    break;
    default: break;

}

  
  maze();
    if(Pac.isTouching(gh)||Pac.isTouching(gh1)||Pac.isTouching(gh2)){
        Pac.velocityX=0;
        Pac.velocityY=0;
    gameState = END;
    }

 bounceChar();

for(var i=0;i<P1.length;i++){
if(P1.get(i).isTouching(Pac)){
   P1.get(i).remove();
   console.log("P1 remove code section")
}
}

for(var i=0;i<SP.length;i++){
    if(SP.get(i).isTouching(Pac)){
       SP.get(i).remove();
       console.log("SP remove code section")
    }
    }


}

if(gameState === END){
    Pac.velocityX=0;
    Pac.velocityY=0;
    gh.velocityX=0;
    gh.velocityY=0;
    gh1.velocityX=0;
    gh1.velocityY=0;
    gh2.velocityX=0;
    gh2.velocityY=0;
    gh3.velocityX=0;
    gh3.velocityY=0;
    var GM=createSprite(680,300,20,20);
    GM.shapeColor="White"
    fill("WHITE");
    textSize(24);
    text("GAME OVER!!!",600,250);
   
}

    drawSprites();
}

function maze(){
Side1 = createSprite(0,600,20,1200);
Side2 = createSprite(700,658,1500,20);
Side3 = createSprite(1365,600,20,1200);
Side4 = createSprite(700,0,1500,20);
line1 = createSprite(80,100,10,50);
line2 = createSprite(80,300,10,50);
line3 = createSprite(80,540,10,50);
line4 = createSprite(1280,200,10,50);
line5 = createSprite(1280,400,10,50);
line6 = createSprite(550,350,10,140);
line7 = createSprite(820,350,10,140);
line8 = createSprite(685,420,280,10);
line9 = createSprite(590,285,80,10);
line10 = createSprite(780,285,80,10);
line11 = createSprite(980,285,80,10);
line12 = createSprite(380,285,10,150);
line13 = createSprite(780,285,80,10);
line14 = createSprite(780,285,80,10);
line15 = createSprite(780,285,80,10);
line16 = createSprite(780,285,80,10);
line17 = createSprite(780,285,80,10);
line18 = createSprite(780,285,80,10);
line19 = createSprite(780,285,80,10);
line20 = createSprite(780,285,80,10);
}

function bounceChar(){
    Pac .bounceOff(Side1);
  Pac .bounceOff(Side2);
  Pac .bounceOff(Side3);
  Pac .bounceOff(Side4);
  Pac .bounceOff(line1);
  Pac .bounceOff(line2);
  Pac .bounceOff(line3);
  Pac .bounceOff(line4);
  Pac .bounceOff(line5);
  gh.bounceOff(Side1);
  gh.bounceOff(Side2);
  gh.bounceOff(Side3);
  gh.bounceOff(Side4);
  gh1.bounceOff(Side1);
  gh1.bounceOff(Side2);
  gh1.bounceOff(Side3);
  gh1.bounceOff(Side4);
  gh2.bounceOff(Side1);
  gh2.bounceOff(Side2);
  gh2.bounceOff(Side3);
  gh2.bounceOff(Side4);
  gh3.bounceOff(Side1);
  gh3.bounceOff(Side2);
  gh3.bounceOff(Side3);
  gh3.bounceOff(Side4);
}