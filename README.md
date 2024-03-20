# magic8_ball
basic magic 8 ball game 

here is the code for my basic magic 8 ball, i made On javascript, 
it is unfinished and a basic model to start, 
there is a question and your name you can amend in the code which will out put the answer in the console, 
however pressing play will generate an answe in the ball, so you can ask a question and press play 

![image](https://github.com/ajswanwick/magic8_ball/assets/131805705/a8c2b311-24fc-4f1e-bbee-17c8fafac025)

![image](https://github.com/ajswanwick/magic8_ball/assets/131805705/e3294fe5-7f24-4d15-af94-a5723a94b546)

![image](https://github.com/ajswanwick/magic8_ball/assets/131805705/c99dddb9-e05a-4422-83b0-830100953561)


Code:

function setup() {
  createCanvas(600,600)
background('rgba(0, 255, 0, 0.25)'); 

}

function draw() {

 

}


let userName = "Adam";
  let eightBall = 'Magic 8 Ball Says'

 userName ? console.log(`Hello, ${userName}!`):
 console.log('Hello!')

 let userQuestion = "Will i win the lottery"
 console.log (`${userName} asked -${userQuestion}`)

 randomNumber = Math.floor(Math.random() *8)
 console.log(`${eightBall} your number is: ${randomNumber}`)

 

  switch(randomNumber){
    case 0: console.log( `${eightBall}- it is certain` );
    break;
    case 1: console.log(`${eightBall}- it is decidedely so`);
    break;
    case 2: console.log (`${eightBall}-: Try again`);
    break;
    case 3: console.log(`${eightBall}- Cannot predict now`);
    break;
    case 4: console.log(`${eightBall}- Do not count on it`);
    break;
    case 5: console.log(`${eightBall}- My sources say no`);
    break;
    case 6: console.log(`${eightBall} outlook not so good`);
    break;
    case 7: console.log(`${eightBall} signs point to yes`);
    break;
  
  
}
function draw(){
  fill(0,0,0)
  circle(300,300,400);
  fill(210,210,210)
  square(200,200,200,10);

  

if( randomNumber === 0 ){
  fill(0,0,0)
    textSize(30)
  textAlign(CENTER) 
    text('It is certain',250,250, 80)
}
 else if ( randomNumber === 1 ){
  fill(0,0,0)
    textSize(30)
  textAlign(CENTER)
    text('It is decidedly so',250,250, 80)
} 
  else if( randomNumber === 2 ){
  fill(0,0,0)
    textSize(30)
  textAlign(CENTER)
    text('It is certain',250,250, 80)
  }
    
   else if( randomNumber === 3 ){
  fill(0,0,0)
    textSize(30)
  textAlign(CENTER)
    text('Try again',250,250, 80)
   }
   else if( randomNumber === 4 ){
  fill(0,0,0)
  textSize(30)
  textAlign(CENTER)
    text('Cannot Predict now',250,250, 80)
   }
   else if( randomNumber === 5 ){
  fill(0,0,0)
    textSize(30)
  textAlign(CENTER)
    text('My sources say no',250,250, 100)
   }
  
else if( randomNumber === 6 ){
  fill(0,0,0)
    textSize(30)
  textAlign(CENTER)
    text('Outlook not so good',250,250, 100)
}
  
   else if( randomNumber === 7 ){
  fill(0,0,0)
  textSize(30)
  textAlign(CENTER)
  text('Signs point to yes',250,250, 80)
   }
  
  
  
  
  
} 
