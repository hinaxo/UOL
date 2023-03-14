/*

Officer: 9524407
CaseNum: 101-3-12238423-9524407

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a cyan filled rectangle with a magenta outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar cyan filled
rectangle with a magenta outline around him.

Identify the man reading the newspaper by drawing a magenta filled rectangle
with a green outline around him.

Identify the woman with the dog by drawing a cyan filled rectangle with a
yellow outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
//    noFill();
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    stroke(255, 0, 255);//magenta
    fill(0, 255, 255);
    rect(40, 325, 352, 480);
    
    stroke(255, 255, 0);//yellow
    fill(0, 255, 255);
    rect(235, 30, 100, 222);
    
    stroke(0, 255, 0);//green
    fill(255, 0, 255);
    rect(610, 145, 167, 332);
    
    stroke(255, 0, 255);//magenta
    fill(0, 255, 255);
    rect(892, 82, 370, 780);

}
