const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var rock1, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform= new Ground(1005,550,750,200);

    box1 = new Box(700,400,70,70);
    box2 = new Box(780,400,70,70);
    box3 = new Box(870,400,70,70);
    box4 = new Box(950,400,70,70);
    box5 = new Box(1000,400,70,70);
    box6 = new Box(740,330,70,70);
    box7 = new Box(805,330,70,70);
    box8 = new Box(875,330,70,70);
    box9 = new Box(945,330,70,70);
    box10 = new Box(770,260,70,70);
    box11 = new Box(840,260,70,70);
    box12 = new Box(910,260,70,70);
    box13 = new Box(805,190,70,70);
    box14 = new Box(875,190,70,70);
    box15 = new Box(840,120,70,70);








    rock1 = new Rock(200,350);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(rock1.body,{x:190, y:480});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    rock1.display();
   
    //log6.display();
    slingshot.display();    

    platform.display();

    
    rock1.depth=rock1.depth+1;

}

function mouseDragged(){
    Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(rock1.body);
        Matter.Body.setPosition(rock1.body,{x:200,y:350});
    }
}