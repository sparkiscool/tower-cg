
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var stand1,stand2
var score = -0
function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,780,1600,20);
    stand1 = new Ground(1300,400,300,20);
    stand2 = new Ground(700,600,500,20);
    block1 = new bloque(1300,380);
    block2 = new bloque(1300,380);
    block3 = new bloque(1300,380);
    block4 = new bloque(1300,380);
    block5 = new bloque(1300,380);

    block6 = new bloque(1300,330);
    block7 = new bloque(1300,330);
    block8 = new bloque(1300,330);

    block9 = new bloque(1300,280);
    
    
    block10 = new bloque(700,580);
    block11 = new bloque(700,580);
    block12 = new bloque(700,580);
    block13 = new bloque(700,580);
    block14 = new bloque(700,580);
    block15 = new bloque(700,580)
    block16 = new bloque(700,580);
    block17 = new bloque(700,580);

    block18 = new bloque(700,530);
    block19 = new bloque(700,530);
    block20 = new bloque(700,530);
    block21 = new bloque(700,530);
    block22 = new bloque(700,530);

    block23 = new bloque(700,480);
    block24 = new bloque(700,480);
    block25 = new bloque(700,480);    

    block26 = new bloque(700,430);
//:)

    polygon1 = new Polygon(100,600,50)
    slingshot = new pewpew(polygon1.body,{x:200, y:600});
    Engine.run(engine)
}

function draw(){
   background("white");
    Engine.update(engine);
    //strokeWeight(4);
    text("score"+ score,1400,750)
    polygon1.display();
    slingshot.display()

    ground.display();
    stand1.display()
    stand2.display()
    fill("blue");
    block1.display(); 
    block1.score()
    block2.display();
    block2.score() 
    block3.display(); 
    block3.score()
    block4.display(); 
    block4.score()
    block5.display(); 
    block5.score()

    fill("red");
    block6.display(); 
    block6.score()
    block7.display(); 
    block7.score()
    block8.display();
    block8.score()

    fill("green");
    block9.display(); 
    block9.score()
    
    fill("blue");
    block10.display();
    block10.score()
    block11.display();
    block11.score()
    block12.display();
    block12.score()
    block13.display();
    block13.score()
    block14.display();
    block14.score()
    block15.display();
    block15.score()
    block16.display();
    block16.score()
    block17.display();
    block17.score()
    fill("red");
    block18.display();
    block18.score()
    block19.display();
    block19.score()
    block20.display();
    block20.score()
    block21.display();
    block21.score()
    block22.display();
    block22.score()

    fill("green");
    block23.display();
    block23.score()
    block24.display();
    block24.score()
    block25.display();
    block25.score()
    block26.display();
    block26.score()
    //log6.display();
        
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode == 32){
slingshot.attatch(polygon1.body)

    }
}