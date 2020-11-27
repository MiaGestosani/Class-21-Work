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