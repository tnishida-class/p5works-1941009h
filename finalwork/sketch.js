let count;
let cycle;
let a=[];
let b=[];
i=0;

function setup(){
  createCanvas(500,500);
  count = 0;
  cycle = 100;
}

function draw(){
  background(192);
  noStroke();
  count = (count + 1) % cycle;
  let size=count
  if(count>50){
    size=60;
  }
  else{size=30;}
    let theta = TWO_PI
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
  fill(255,255,0);
  star(x,y,size);
  fill(0,128,0);

  triangle(150,115,60,220,240,220);
  triangle(150,145,30,270,270,270);
  triangle(150,175,0,320,300,320);
  rect(125,320,50,70);
  fill(255);

  for(i=0;i<a.length;i++){
    ellipse(a[i],b[i],10)
}
}

function mouseClicked(){
  a[i]= mouseX;
  b[i] = mouseY;
  i++;
}

  function star(cx, cy, r){
    beginShape();
    for(var i = 0; i < 5; i++){
      var theta = TWO_PI * i * 2 / 5 - HALF_PI;
      var x = cx + cos(theta) * r;
      var y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
