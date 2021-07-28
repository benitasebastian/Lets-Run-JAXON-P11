var path, runner = createSprite();


function preload(){
  //pre-load images
  path = loadAnimation("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);
//create moving background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;
}
