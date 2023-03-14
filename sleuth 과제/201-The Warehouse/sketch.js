/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 9524407
CaseNum: 201-3-96036035-9524407

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(550, 120);
    vertex(630, 100);
    vertex(650, 140);
    vertex(690, 390);
    vertex(820, 360);
    vertex(850, 390);
    vertex(650, 470);
    vertex(510, 460);
    vertex(520, 380);
    vertex(580, 400);
    vertex(550, 120);
    
    
    
    endShape();
    
}
