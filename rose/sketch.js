
var n;
var nSlider;
var dSlider;
var d; 

function setup() {
  createCanvas(600,600);
  background(50);
  
  nSlider = createSlider(0,10,1);
  dSlider = createSlider(0,10,1);

  
}



function draw() {
  background(50);
  
  n = nSlider.value();
  d = dSlider.value();
  
  k = n/d;
  //k = kSlider.value();
 // print(k);
 
  translate(width/2, height/2);
  beginShape()
  
  for (theta = 0; theta < (2 * PI)*d; theta +=.01){
 
    r = cos(k * theta);
    
    x = (200 * r * cos(theta));
    y = (200 * r * sin(theta));
  
    stroke(255);
    noFill();
    vertex(x,y);
  
 
  
  }
  endShape(CLOSE);
  
  

  
  
}
  

  
