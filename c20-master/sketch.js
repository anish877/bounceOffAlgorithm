
var r = 165;
var g = 50;
var b=201;
var pointer;


function setup(){

  createCanvas(600,400);
  pointer = createSprite(200,200,100,80)
  pointer.shapeColor = "green" 
  pointer.debug = true;
  
}


function draw(){
background(0,0,0)
pointer.x = World.mouseX;
pointer.y = World.mouseY;
if(pointer.x>0 && pointer.x<100)
{
  background(g);
}
if(pointer.x>100 && pointer.x<200)
{
  background(b);
}
if(pointer.x>200 && pointer.x<300)
{
  background(r);
}
if(pointer.x>300 && pointer.x<400)
{
  background(198,212,56);
}if( pointer.x>400)
{
  background(4,178,56);
}
drawSprites();

}