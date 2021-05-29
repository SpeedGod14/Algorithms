var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 100, 50);
  fixedrect.shapeColor = "blue"
  fixedrect.debug = true
  movingrect = createSprite(100, 100, 50, 100);
  movingrect.shapeColor = "red"
  movingrect.debug = true
}

function draw() {
  background(0,0,0);
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.y - movingrect.y <= movingrect.height/2 + movingrect.height/2 &&
    movingrect.y - fixedrect.y <= movingrect.height/2 + movingrect.height/2){
      movingrect.shapeColor = "yellow"
      fixedrect.shapeColor = " green"
    } else{
      movingrect.shapeColor = "red"
      fixedrect.shapeColor = "blue"
    }
  drawSprites();
}