
//Halle Pollack 2017

function setup() {
   
//background and slider setup//
    
    background(51);
    createCanvas(400, 400);
    nSlider = createSlider(0, 10, random(10));
    dSlider = createSlider(1, 10, random(1,10));
    nSlider.position(width / 3, height + 20);
    dSlider.position(width / 3, height + 40);
}

function draw() {
    background(51);
    
//get values from sliders//
    n = nSlider.value();
    d = dSlider.value();
    k = n / d;
    
 //add labels   
    strokeWeight(1)
    nLabel = text(n, 30, height - 30);
    text("k = ---", 8, height - 21);
    dLabel = text(d, 30, height - 10);
    translate(width / 2, height / 2);
    strokeWeight(4);
    
    
    
//WHERE THE DRAWING HAPPENS//
    
    beginShape()
    
//From 0 to 2*pi, in intervals of .01, calculate the r value and covert to x,y and plot the points (Javascript can only plot in x,y coordinates) and at the end, connect all the points to create a smooth shape// 
    
    
    for (theta = 0; theta < (2 * PI) * d; theta += .01) {
        r = cos(k * theta);
        x = (200 * r * cos(theta));
        y = (200 * r * sin(theta));
        stroke(255);
        noFill();
        vertex(x, y);
    }
    endShape(CLOSE);
    
    
    
}
