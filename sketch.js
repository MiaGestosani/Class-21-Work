var mr, fr, vr1, vr2,vr3,vr4;

var go1, go2;

function setup() {
  createCanvas(800,400);
  fr =createSprite(200, 200, 50, 50);
  mr =createSprite(400, 200, 50, 50);
  vr1=createSprite(600, 0, 50, 50);

  vr1.shapeColor= ("blue");
  vr2=createSprite(600, 400, 50, 50);
  vr2.shapeColor= ("blue");
  vr1.velocityY=5;
  vr1.debug=true; 
  vr2.velocityY=-5;
  vr2.debug=true;

  vr3=createSprite(0, 350, 50, 50);
  vr3.shapeColor= ("red");
  vr3.velocityX=4;
  vr4=createSprite(800, 350, 50, 50);
  vr4.shapeColor= ("blue");
  vr4.velocityX=-4;

  go1 = createSprite(100,100,50,50);
  go2 = createSprite(170,100,50,50);

}

function draw() {
  background(0);  
mr.x=World.mouseX;
mr.y=World.mouseY;



  if (isTouching(mr, go2)){
    mr.shapeColor= "red";
    go2.shapeColor="red";
  }
  else{
    mr.shapeColor= "green";
    go2.shapeColor="green";
  }

bounceOff(vr1,vr2,vr3,vr4);

  drawSprites();
}

function bounceOff(object1, object2, object3, object4){
  if(object1.y-object2.y < object1.height/2 + object2.height/2 
    && object2.y-object1.y < object1.height/2 + object2.height/2 ){
      object1.velocityY= object1.velocityY*(-1); 
      object2.velocityY= object2.velocityY*(-1); 
  }
  if(object3.x-object4.x < object3.width/2 + object4.width/2 
    && object4.x-object3.x < object3.width/2 + object4.width/2 ){
      object3.velocityX= object3.velocityX*(-1); 
      object4.velocityX= object4.velocityX*(-1);
}
}

function isTouching(object1, object2){

  if(object1.x -object2.x < object1.width/2 + object2.width/2 
    && object2.x-object1.x < object1.width/2 + object2.width/2
    && object1.y- fr.y< object1.height/2 + object2.height/2 
    && object2.y- object1.y< object1.height/2 + object2.height/2 )
  {
    return true;
  }
    else
    {
      return false;
   }
}