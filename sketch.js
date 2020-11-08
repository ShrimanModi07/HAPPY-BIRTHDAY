var didi;
var gift1,gift2,gift3,gift4,gift5,gift6,gift7;
var gift8,gift9,gift10,gift11,gift12,gift13;
var gift14,gift15,gift16,gift17,gift18;
var no1,no1IMG,no18,no18IMG,no2,no2IMG,no3,no3IMG,no4,no4IMG;
var no5,no5IMG,no6,no6IMG,no7,no7IMG,no8,no8IMG;
var no9,no9IMG,no10,no10IMG,no11,no11IMG,no12,no12IMG;
var no13,no13IMG,no14,no14IMG,no15,no15IMG,no16,no16IMG;
var no17,no17IMG;
var tv_hint,tv_hintIMG,ac_hint,ac_hintIMG,box_hint,box_hintIMG;
var cupboard_hint,cupboard_hintIMG,drawer_hint,drawer_hint;
var comb_hint,comb_hintIMG,mandir_hint,mandir_hintIMG;
var keys_hint,keys_hintIMG,cycle_hint,cycle_hintIMG;
var utencils_hint,utencils_hintIMG,hot_hint,hot_hintIMG;
var store_hint,store_hintIMG,table_hint,table_hintIMG;
var chadhar_hint,chadhar_hintIMG,bag_hint,bag_hintIMG;
var press_hint,press_hintIMG,activa_hint,activa_hintIMG;
var last_hint,last_hintIMG;
var hb,hbIMG,credits,creditsIMG;

function preload(){
 no1IMG=loadImage("1.jpg");
 no18IMG=loadImage("18.png");
 no2IMG=loadImage("22.jpg");
 no3IMG=loadImage("3.jpg");
 no4IMG=loadImage("4.jpg");
 no5IMG=loadImage("5.jpg");
 no6IMG=loadImage("6.jpg");
 no7IMG=loadImage("7.jpg");
 no8IMG=loadImage("8.jpg");
 no9IMG=loadImage("9.jpg"); 
 no10IMG=loadImage("10.jpg"); 
 no11IMG=loadImage("11.png"); 
 no12IMG=loadImage("12.png"); 
 no13IMG=loadImage("13.png"); 
 no14IMG=loadImage("14.png"); 
 no15IMG=loadImage("15.png"); 
 no16IMG=loadImage("16.png"); 
 no17IMG=loadImage("17.png"); 
 tv_hintIMG=loadImage("tv hint.jpg");
 ac_hintIMG=loadImage("ac hint.jpg");
 box_hintIMG=loadImage("box hint.jpg");
 cupboard_hintIMG=loadImage("cupboard hint.jpg");
 drawer_hintIMG=loadImage("drawer hint.jpg");
 comb_hintIMG=loadImage("comb hint.jpg");
 mandir_hintIMG=loadImage("mandir hint.jpg");
 keys_hintIMG=loadImage("keys hint.jpg");
 cycle_hintIMG=loadImage("cycle hint.jpg");
 utencils_hintIMG=loadImage("utencils hint.jpg");
 hot_hintIMG=loadImage("hot hint.jpg");
 store_hintIMG=loadImage("store hint.jpg");
 table_hintIMG=loadImage("table hint.jpg");
 chadhar_hintIMG=loadImage("chadhar hint.jpg");
 bag_hintIMG=loadImage("bag hint.jpg");
 press_hintIMG=loadImage("press hint.jpg");
 activa_hintIMG=loadImage("activa hint.jpg");
 last_hintIMG=loadImage("last hint.jpg");
 hbIMG=loadImage("hb.jpg");
 creditsIMG=loadImage("credits.jpg");
}

function setup() {
  createCanvas(620,400);
  
  didi=createSprite(40,40,20,20);
  didi.shapeColor="yellow";
  
  gift1=createSprite(100,55,30,90);
  gift1.shapeColor="yellow";
  
  gift2=createSprite(200,55,30,90);
  gift2.shapeColor="yellow";
  
  gift3=createSprite(300,55,30,90);
  gift3.shapeColor="yellow";
  
  gift4=createSprite(400,55,30,90);
  gift4.shapeColor="yellow";
  
  gift5=createSprite(500,55,30,90);
  gift5.shapeColor="yellow";
  
  gift6=createSprite(600,55,30,90);
  gift6.shapeColor="yellow";
  
  gift7=createSprite(100,200,30,90);
  gift7.shapeColor="yellow";
  
  gift8=createSprite(200,200,30,90);
  gift8.shapeColor="yellow";
  
  gift9=createSprite(300,200,30,90);
  gift9.shapeColor="yellow";
  
  gift10=createSprite(400,200,30,90);
  gift10.shapeColor="yellow";
  
  gift11=createSprite(500,200,30,90);
  gift11.shapeColor="yellow";
  
  gift12=createSprite(600,200,30,90);
  gift12.shapeColor="yellow";
  
  gift13=createSprite(100,340,30,90);
  gift13.shapeColor="yellow";
  
  gift14=createSprite(200,340,30,90);
  gift14.shapeColor="yellow";
  
  gift15=createSprite(300,340,30,90);
  gift15.shapeColor="yellow";
  
  gift16=createSprite(400,340,30,90);
  gift16.shapeColor="yellow";
  
  gift17=createSprite(500,340,30,90);
  gift17.shapeColor="yellow";
  
  gift18=createSprite(600,340,30,90);
  gift18.shapeColor="yellow";
  
  no1=createSprite(100,55,30,30);
  no1.addImage(no1IMG);
  no1.scale=0.5;
  
  no18=createSprite(600,340,30,90);
  no18.addImage(no18IMG);
  no18.scale=0.6;
  
  no2=createSprite(200,55,30,90);
  no2.addImage(no2IMG);
  no2.scale=0.5;
  
  no3=createSprite(300,55,30,90);
  no3.addImage(no3IMG);
  no3.scale=0.5;
  
    
  no4=createSprite(400,55,30,90);
  no4.addImage(no4IMG);
  no4.scale=0.5;
  
  no5=createSprite(500,55,30,90);
  no5.addImage(no5IMG);
  no5.scale=0.5;
  
  no6=createSprite(600,55,30,90);
  no6.addImage(no6IMG);
  no6.scale=0.5;
  
  no7=createSprite(100,200,30,90);
  no7.addImage(no7IMG);
  no7.scale=0.5;
  
  no8=createSprite(200,200,30,90);
  no8.addImage(no8IMG);
  no8.scale=0.6;

  no9=createSprite(300,200,30,90);
  no9.addImage(no9IMG);
  no9.scale=0.5;
  
  no10=createSprite(400,200,20,90);
  no10.addImage(no10IMG);
  no10.scale=0.1;
  
  no11=createSprite(500,200,30,90);
  no11.addImage(no11IMG);
  no11.scale=0.6;
  
  no12=createSprite(600,200,30,90);
  no12.addImage(no12IMG);
  no12.scale=0.6;
  
  no13=createSprite(100,340,30,90);
  no13.addImage(no13IMG);
  no13.scale=0.6;
  
  no14=createSprite(200,340,30,90);
  no14.addImage(no14IMG);
  no14.scale=0.6;
  
  no15=createSprite(300,340,30,90);
  no15.addImage(no15IMG);
  no15.scale=0.6;
  
  no16=createSprite(400,340,30,90);
  no16.addImage(no16IMG);
  no16.scale=0.6;
  
  no17=createSprite(500,340,30,90);
  no17.addImage(no17IMG);
  no17.scale=0.6;
  
  no10=createSprite(400,200,30,90);
  no10.addImage(no10IMG);
  no10.scale=0.6;
  
  tv_hint=createSprite(310,200,20,20);
  tv_hint.addImage(tv_hintIMG);
  tv_hint.scale=0.9;
  tv_hint.visible = false;
  
  ac_hint=createSprite(300,200,20,20);
  ac_hint.addImage(ac_hintIMG);
  ac_hint.scale=0.9;
  ac_hint.visible = false;
  
  box_hint=createSprite(300,200,20,20);
  box_hint.addImage(box_hintIMG);
  box_hint.scale=0.9;
  box_hint.visible = false;
  
  cupboard_hint=createSprite(300,200,20,20);
  cupboard_hint.addImage(cupboard_hintIMG);
  cupboard_hint.scale=0.9;
  cupboard_hint.visible = false;
  
  drawer_hint=createSprite(300,200,20,20);
  drawer_hint.addImage(drawer_hintIMG);
  drawer_hint.scale=0.9;
  drawer_hint.visible = false;
  
  comb_hint=createSprite(310,90,20,20);
  comb_hint.addImage(comb_hintIMG);
  comb_hint.scale=0.8;
  comb_hint.visible = false;
  
  mandir_hint=createSprite(310,85,20,20);
  mandir_hint.addImage(mandir_hintIMG);
  mandir_hint.scale=0.9;
  mandir_hint.visible = false;
  
  keys_hint=createSprite(310,85,20,20);
  keys_hint.addImage(keys_hintIMG);
  keys_hint.scale=0.9;
  keys_hint.visible = false;
  
  cycle_hint=createSprite(310,85,20,20);
  cycle_hint.addImage(cycle_hintIMG);
  cycle_hint.scale=0.9;
  cycle_hint.visible = false;
  
  utencils_hint=createSprite(310,85,20,20);
  utencils_hint.addImage(utencils_hintIMG);
  utencils_hint.scale=0.9;
  utencils_hint.visible = false;
  
  hot_hint=createSprite(310,85,20,20);
  hot_hint.addImage(hot_hintIMG);
  hot_hint.scale=0.9;
  hot_hint.visible = false;
  
  store_hint=createSprite(310,180,20,20);
  store_hint.addImage(store_hintIMG);
  store_hint.scale=0.9;
  store_hint.visible = false;
  
  table_hint=createSprite(310,180,20,20);
  table_hint.addImage(table_hintIMG);
  table_hint.scale=0.9;
  table_hint.visible = false;
  
  chadhar_hint=createSprite(310,180,20,20);
  chadhar_hint.addImage(chadhar_hintIMG);
  chadhar_hint.scale=0.8;
  chadhar_hint.visible = false;
  
  bag_hint=createSprite(310,180,20,20);
  bag_hint.addImage(bag_hintIMG);
  bag_hint.scale=0.9;
  bag_hint.visible = false;
  
  press_hint=createSprite(310,180,20,20);
  press_hint.addImage(press_hintIMG);
  press_hint.scale=0.9;
  press_hint.visible = false;
  
  activa_hint=createSprite(310,180,20,20);
  activa_hint.addImage(activa_hintIMG);
  activa_hint.scale=0.9;
  activa_hint.visible = false;
  
  last_hint=createSprite(310,180,20,20);
  last_hint.addImage(last_hintIMG);
  last_hint.scale=0.9;
  last_hint.visible = false;
  
  hb=createSprite(320,85,20,20);
  hb.addImage(hbIMG);
  hb.scale=0.3;
  hb.visible = false;
  
  credits=createSprite(315,290,20,20);
  credits.addImage(creditsIMG);
  credits.scale=0.8;
  credits.visible = false;
}
function draw() {
  background("red");
  
  if(didi.isTouching(gift1)){
    tv_hint.visible=true;
    didi.velocityX=0;
    gift1.x=1000;
    no1.visible=false;
     }
  
    if(didi.isTouching(gift2)){
    ac_hint.visible=true;
    didi.velocityX=0;
    gift2.x=1000;
    no2.visible=false;
    tv_hint.x=10000;
     }
  
   if(didi.isTouching(gift3)){
    box_hint.visible=true;
    didi.velocityX=0;
    gift3.x=1000;
    no3.visible=false;
    ac_hint.x=10000;
     }
  
     if(didi.isTouching(gift4)){
    cupboard_hint.visible=true;
    didi.velocityX=0;
    gift4.x=1000;
    no4.visible=false;
    box_hint.x=10000;
     }
  
   if(didi.isTouching(gift5)){
    drawer_hint.visible=true;
    didi.velocityX=0;
    gift5.x=1000;
    no5.visible=false;
    cupboard_hint.x=10000;
     }
  
     if(didi.isTouching(gift6)){
    comb_hint.visible=true;
    didi.velocityX=0;
    gift6.x=1000;
    no6.visible=false;
    drawer_hint.x=10000;
    didi.x=40;
    didi.y=200;
     }
  
  if(didi.isTouching(gift7)){
    mandir_hint.visible=true;
    didi.velocityX=0;
    gift7.x=1000;
    no7.visible=false;
    comb_hint.x=10000;
     }
  
  if(didi.isTouching(gift8)){
    keys_hint.visible=true;
    didi.velocityX=0;
    gift8.x=1000;
    no8.visible=false;
    mandir_hint.x=10000;
     }
  
  if(didi.isTouching(gift9)){
    cycle_hint.visible=true;
    didi.velocityX=0;
    gift9.x=1000;
    no9.visible=false;
    keys_hint.x=10000;
     }
  
  if(didi.isTouching(gift10)){
    utencils_hint.visible=true;
    didi.velocityX=0;
    gift10.x=1000;
    no10.x=10000;
    cycle_hint.x=10000;
     }
  
  if(didi.isTouching(gift11)){
    hot_hint.visible=true;
    didi.velocityX=0;
    gift11.x=1000;
    no11.x=10000;
    utencils_hint.x=10000;
     }
  
  if(didi.isTouching(gift12)){
    store_hint.visible=true;
    didi.velocityX=0;
    gift12.x=1000;
    no12.x=10000;
    hot_hint.x=10000;
    didi.x=40;
    didi.y=340;
     }
  
  
  if(didi.isTouching(gift13)){
    table_hint.visible=true;
    didi.velocityX=0;
    gift13.x=1000;
    no13.x=10000;
    store_hint.x=10000;
     }
  
  
  if(didi.isTouching(gift14)){
    chadhar_hint.visible=true;
    didi.velocityX=0;
    gift14.x=1000;
    no14.x=10000;
    table_hint.x=10000;
     }
  
  if(didi.isTouching(gift15)){
    bag_hint.visible=true;
    didi.velocityX=0;
    gift15.x=1000;
    no15.x=10000;
    chadhar_hint.x=10000;
     }
  
  if(didi.isTouching(gift16)){
    press_hint.visible=true;
    didi.velocityX=0;
    gift16.x=1000;
    no16.x=10000;
    bag_hint.x=10000;
     }
  
  if(didi.isTouching(gift17)){
    activa_hint.visible=true;
    didi.velocityX=0;
    gift17.x=1000;
    no17.x=10000;
    press_hint.x=10000;
     }
  
  if(didi.isTouching(gift18)){
    last_hint.visible=true;
    didi.velocityX=0;
    gift18.x=1000;
    no18.x=10000;
    activa_hint.x=10000;
     }
    
   if(keyDown(RIGHT_ARROW)) {
    didi.velocityX =10;
    didi.velocityY = 0;
  }
  
  if(keyDown(ENTER)){
    hb.visible=true;
    last_hint.x=10000;
    credits.visible=true;
    
  }
  drawSprites();
}

