
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine; 
let world;
var fruit_con;
var fruit_con_2;
var fruit_con_3;

var star;
var star2;
var star_img;
var star_empty;
var star_half;
var star_full;
var rope;
var fruit;
var ground;
var rope3;
var omnom, omnomImg;
var ground;
var higherground;
var food,foodImg;
var con;
var con2;
var rope;
var bubble,bubble_img;

function preload(){
  
  bk_song = loadSound('Cut The Rope 2.mp3');
  sad_sound = loadSound("sad Trombone")
  cut_sound = loadSound('rope_cut.mp3');
  
  food = loadImage('candy.png');
  hungry = loadAnimation('omnom_hungry.gif');
  eat = loadAnimation("omnom_eating.gif");
  sad = loadAnimation("omnom_sad");
  star_img = loadImage('star.gif');
  empty_star =loadAnimation("star_empty.png");
  half_star =loadAnimation("star_half-full.png");
  full_stars =loadAnimation("stars.png");

  
}

function setup() {
  createCanvas(600,800);

  bk_song.play();

  engine = Engine.create();
  world = engine.world;

  button = createImg('cut_btn.png');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(drop);

   //btn 2
  button2 = createImg('cut_btn.png');
  button2.position(450,90);
  button2.size(50,50);
  button2.mouseClicked(drop2);
  
  mute_btn = createImg('mute button.png');
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);
  
  ground = new Ground(300,height,width,20);

  omnom = createSprite(200,height-80,100,100);
  omnom.scale = 0.2;
  omnom.addAnimation('hungry',hungry);
  omnom.addAnimation('eating',eat);
  omnom.addAnimation('sad',sad);
  
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,food);
  
  fruit_con = new Link(rope,food);
  fruit_con_2 = new Link(rope2,food);

  blower = createImg('baloon2.png');
  blower.position(260,370);
  blower.size(120,120);
  blower.mouseClicked(airBlow);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

}

function draw() 
{
  background(200);
  Engine.update(engine);

  
}
