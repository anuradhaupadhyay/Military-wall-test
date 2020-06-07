function hasCollided(obj1,obj2){
  obj1RightEdge = obj1.x+obj1.width;
  obj2LeftEdge = obj2.x;
  if(obj1RightEdge>=obj2LeftEdge){
    return true;
  }
  else{
    return false;
  }
}