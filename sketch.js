
function setup() {
createCanvas(400,400);
}

function draw() {
var wPercent;
wPercent = mouseX/width;
var hPercent= mouseY/height;
    
var b;
b = wPercent*255;
var r; 
r= hPercent * 255; 

 background (r,100,b);
    
line(mouseX,mouseY,0,0);
line(mouseX,mouseY,width,height);
line(mouseX,mouseY,width,0);
line(mouseX,mouseY,0,height);
    
line(mouseX,mouseY,width,height/4);
line(mouseX,mouseY,width/4,height);
line(mouseX,mouseY,0,height/4);
line(mouseX,mouseY,width/4,0);
line(mouseX,mouseY,width/4,height);
line(mouseX,mouseY,300,0);
line(mouseX,mouseY,0,300);
line(mouseX,mouseY,300,400);
line(mouseX,mouseY,400,300);


fill (b,100,b);
ellipse(mouseX,mouseY,150,150);
fill(b,100,r);    
ellipse(mouseX,mouseY,150,mouseY/3);
fill("black");    
ellipse(mouseX,mouseY,mouseY/4,mouseY/4); 


}

