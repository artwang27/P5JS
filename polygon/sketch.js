let n=8;
let r=190;
var pArray=[];


function setup() {
  createCanvas(800, 800);
  r= height/2-10;
    
  init(n,r);
  drawIt(n);
  
  createDiv("多邊形轉牙轉~~王鐙儀製作");
  
}

function draw() {
   if (mouseIsPressed) {
    changeSize();
  }
}


function changeSize(){
  
    let number=int(mouseX/10);
    if(number<3)  number=3;
    //print(number);
    if(n!=number){
      n=number;
      init(n,r);
      drawIt(n);
    }
}

function init(n,r){
    let h2=height/2;
  pArray=[];
  let base=2*PI/n;
  for(i=0; i<n; i++){
    let th= i*base;
    let x=r*cos(th)+h2;
    let y=r*sin(th)+h2;
    pArray.push({x:x, y:y});
  }
  
  pArray.push(pArray[0]);
}


function randomColor(){
    let r=random(255);
    let g=random(255);
    let b=random(255);
    return color(r,g,b);
} 


function drawIt(n){
  background(220);
  
  //let randomColor = color(random(255),random(255),random(255));
    let randC=randomColor();
  stroke(randC);

  
  for(let i=0; i<n-1; i++){
    let x1=pArray[i].x;
    let y1=pArray[i].y;
    
    for(let j=i+1; j<n; j++){
      let x2=pArray[j].x;
      let y2=pArray[j].y;
      line(x1,y1,x2,y2);  
    }
  }
  
  textSize(32);
  text(n, 50, 50 );
 
}
