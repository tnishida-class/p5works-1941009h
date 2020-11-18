// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
        console.log(i,j);
        if(i%2==0 && j%2==1){
          fill(125);
        }
        else if(j%2==0 && i%2==1){
          fill(125);
        }
        else{
          fill(255);
        }

        rect(i * 10,j * 10, 10, 10);

      if(j<3 && i%2==0 && j%2==1){
        fill(255,0,0);
       }
      else if(j<3 && j%2==0 && i%2==1){
        fill(255,0,0);
       }
      else if(j>4 && j%2==0 && i%2==1){
        fill(0);
      }
      else if(j>4 && i%2==0 && j%2==1){
       fill(0);
     }
       ellipse(i*10+5,j*10+5,8,8);
      }
      }
}
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
