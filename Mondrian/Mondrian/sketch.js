function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);
    fill(255, 255, 255);
    rect(100, 50, 150, 300);
    rect(100, 300, 150, 200);
    fill(0, 0, 255);
    rect(100, 500, 150, 150);
    fill(255, 255, 255);
    rect(250, 500, 390, 150);
    fill(255, 255, 0);
    
    rect(640, 500, 60, 70);
    fill(255, 255, 255);
    rect(640, 500, 60, 70);
    // testttt
}