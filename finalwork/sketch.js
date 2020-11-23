let count;
let cycle;

function setup(){
  createCanvas(500,500);
  count = 0;
  cycle = 100;
}



function draw(){
  background(160, 192, 255);
  fill(255,255,0);
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
  star(x,y,size);
  fill(0,128,0);
  triangle(150,115,60,200,240,200);
  triangle(150,145,30,240,270,240);
  triangle(150,175,0,280,300,280);
  rect(125,280,50,70)


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
