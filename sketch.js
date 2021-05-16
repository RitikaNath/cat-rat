var cat, cat_img,cati,cats;
var rat,rat_img,rati,rats;
var back;

function preload() {
    cat_img = loadAnimation("images/cat2.png","images/cat3.png");
    cats = loadImage("images/cat4.png");
    cati = loadImage("images/cat1.png",);
    rat_img = loadAnimation("images/mouse2.png","images/mouse3.png");
    rati = loadImage("images/mouse1.png");
    rats = loadImage("images/mouse4.png");
    back = loadImage("images/garden.png");
    //load the images here
}

function setup(){
    createCanvas(800,600);
    cat = createSprite(700,500,20,10);
    cat.scale = 0.1;
    cat.addImage(cati);
    rat = createSprite(50,500,20,20);
    rat.scale = 0.1;
    rat.addImage(rati);
    //create tom and jerry sprites here


}

function draw() {

    background(back);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width - rat.width)/2){
       cat.addImage("cas",cats);
       cat.changeImage("cas");
       rat.addImage("ras",rats);
       rat.changeImage("ras");
        cat.x = 200;
        cat.velocityX= 0;
        
    }

    drawSprites();
    
    
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    rat.addAnimation("moste",rat_img);
    rat.changeAnimation("moste");
    frameDelay = 25;
    cat.addAnimation("ang", cat_img);
    cat.changeAnimation("ang");
    cat.scale = 0.17;
    cat.velocityX= -3;
}

  //For moving and changing animation write code here


}
