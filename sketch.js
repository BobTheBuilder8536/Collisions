var rect1, rect2;

var object1;
var object2;
var object3;
var object4;


function setup() {
  createCanvas(windowWidth,windowHeight);
  rect1 = createSprite(400, 200, 80, 50);
  rect1.shapeColor = "green";
  rect1.debug = true;

  rect2 = createSprite(0,0,50,20);
  rect2.shapeColor = "green";
  rect2.debug = true;

  object1 = createSprite(100,300,50,50);
  object1.shapeColor = "green";
  object2 = createSprite(100,600,50,50);
  object2.shapeColor = "green";
  object3 = createSprite(300,300,50,50);
  object3.shapeColor = "green";
  object4 = createSprite(300,600,50,50);
  object4.shapeColor = "green";
}

function draw() {
  background(0);

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  if(isTouching(object1,rect2)){
    rect2.shapeColor = "red";
  object1.shapeColor = "red";
  }
  else {
    object1.shapeColor = "green";
  rect2.shapeColor = "green";
  }


  drawSprites();
}
