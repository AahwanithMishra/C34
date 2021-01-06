const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var ball1;
var rope1;

function setup(){
    var canvas = createCanvas(1600,500);
    engine = Engine.create();
    world = engine.world;

    //building1
    box1 = new Box(900,200,70,70);
    box2 = new Box(900,200,70,70);
    box3 = new Box(900,200,70,70);
    box4 = new Box(900,200,70,70);
    box5 = new Box(900,200,70,70);
    box6 = new Box(900,200,70,70);
    //building2
    box7 = new Box(800,200,70,70);
    box8 = new Box(800,200,70,70);
    box9 = new Box(800,200,70,70);
    box10 = new Box(800,200,70,70);
    box11= new Box(800,200,70,70);
    box12= new Box(800,200,70,70);

    ball1 = new Ball(200,200,40);
    
    rope1 = new Rope(ball1.body,{x:550, y:50});
    

    ground = new Ground(600,400,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
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

    rope1.display();

    ball1.display();

    ground.display();

}