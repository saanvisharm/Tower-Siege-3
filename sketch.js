const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;
var sling;

function preload(){
  getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    striker= new Polygons(50,200,30,30);
    stand1 = new Ground(400,380,350,10);
    stand2 = new Ground(850, 350, 350,10);
    block1= new Box(270,345,50,55);
    block2= new Box(320,345,50,55);
    block3= new Box(370,345,50,55);
    block4= new Box(420,345,50,55);
    block5= new Box(470,345,50,55);
    block6= new Box(520,345,50,55);
    block7= new Box(290,290,50,55);
    block8= new Box(340,290,50,55);
    block9= new Box(390,290,50,55);
    block10= new Box(440,290,50,55);
    block11= new Box(490,290,50,55);
    block12= new Box(320,235,50,55);
    block13= new Box(370,235,50,55);
    block14= new Box(420,235,50,55);
    block15 = new Box(470,235,50,55);
    block16 = new Box(350,179,50,55);
    block17 = new Box(400,179,50,55);
    block18 = new Box(450,179,50,55);
    block19 = new Box(375,125,50,55);
    block20 = new Box(425,125,50,55);
    block21 = new Box(405,70,50,55);
    block22= new Box(720,315,50,55);
    block23= new Box(770,315,50,55);
    block24= new Box(820,315,50,55);
    block25= new Box(870,315,50,55);
    block26= new Box(920,315,50,55);
    block27= new Box(970,315,50,55);
    block28= new Box(740,260,50,55);
    block29= new Box(790,260,50,55);
    block30= new Box(840,260,50,55);
    block31= new Box(890,260,50,55);
    block32= new Box(940,260,50,55);
    block33= new Box(760,205,50,55);
    block34= new Box(810,205,50,55);
    block35= new Box(860,205,50,55);
    block36 = new Box(910,205,50,55);
    block37 = new Box(780,150,50,55);
    block38 = new Box(830,150,50,55);
    block39 = new Box(880,150,50,55);
    block40 = new Box(805,95,50,55);
    block41 = new Box(855,95,50,55);
    block42 = new Box(830,40,50,55);
    sling = new Sling(striker.body,{x:50, y:200});
}

function draw(){
  if(backgroundImg){
  background(backgroundImg);
  }
   
    textSize(25);
    text("SCORE:"+score,1000,40)
    Engine.update(engine);
    strokeWeight(4);
       stand1.display();
       stand2.display();
       fill("lightgreen");
       block1.display();
       block2.display();
       block3.display();
       block4.display();
       block5.display();
       block6.display();
       fill("lightblue");
       block7.display();
       block8.display();
       block9.display();
       block10.display();
       block11.display();
       fill("lightpink");
       block12.display();
       block13.display();
       block14.display();
       block15.display();
       fill("purple");
       block16.display();
       block17.display();
       block18.display();
       fill("yellow");
       block19.display();
       block20.display();
       fill("white");
       block21.display();
       fill("lightgreen");
       block22.display();
       block23.display();
       block24.display();
       block25.display();
       block26.display();
       block27.display();
       fill("lightblue");
       block28.display();
       block29.display();
       block30.display();
       block31.display();
       block32.display();
       fill("lightpink");
       block33.display();
       block34.display();
       block35.display();
       block36.display();
       fill("purple");
       block37.display();
       block38.display();
       block39.display();
       fill("yellow");
       block40.display();
       block41.display();
       fill("white");
       block42.display();
       block1.score();
       block2.score();
       block3.score();
       block4.score();
       block5.score();
       block6.score();
     
       block7.score();
       block8.score();
       block9.score();
       block10.score();
       block11.score();
      
       block12.score();
       block13.score();
       block14.score();
       block15.score();
    
       block16.score();
       block17.score();
       block18.score();
       
       block19.score();
       block20.score();
      
       
       block22.score();
       block23.score();
       block24.score();
       block25.score();
       block26.score();
       block27.score();
       
       block28.score();
       block29.score();
       block30.score();
       block31.score();
       block32.score();
        
       block33.score();
       block34.score();
       block35.score();
       block36.score();
        
       block37.score();
       block38.score();
       block39.score();
        
       block40.score();
       block41.score();
       
       block42.score();
       striker.display();
       sling.display();
    }
    function mouseDragged(){
        Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
      }
      
      
      function mouseReleased(){
        sling.fly();
      }
      
      function keyPressed() {
        if (keyCode === 32) {
          Matter.Body.setPosition(striker.body,{x:100, y:100});
          sling.attach(striker.body);
        }
    }
    
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "day.jpeg";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

