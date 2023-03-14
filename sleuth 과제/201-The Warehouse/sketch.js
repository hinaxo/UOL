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
    vertex(550, 110);
    vertex(630, 80);
    vertex(660, 140);
    vertex(690, 380);
    vertex(820, 350);
    vertex(860, 380);
    vertex(650, 490);
    vertex(500, 470);
    vertex(520, 380);
    vertex(570, 380);
    vertex(520, 190);
    vertex(550, 110);
    //e
    
    
    endShape();
    
}
