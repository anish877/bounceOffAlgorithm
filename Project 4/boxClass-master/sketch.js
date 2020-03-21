const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,275,200,200);
    box2 = new Box(320,250,50,250);
    box3 = new Box(80,250,50,250);
    box4 = new Box(200,350,50,60);
    box5 = new Box(150,230,40,40);
    box6 = new Box(250,230,40,40);

    ground = new Ground(200,390,400,30);
}

function draw(){
    background("blue");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box5.display();
    box4.display();
    box6.display();
    
 
    fill("yellow")
    triangle(105,175,200,80,295,175);
    triangle(55,125,80,50,105,125);
    triangle(295,125,320,50,345,125);
    ellipse(80,170,40,40)
    ellipse(320,170,40,40)
    ground.display();
   
}