

  let buttons = document.getElementsByTagName("button");
      
  for (let button of buttons){
    button.addEventListener("click", shakeBall())
    
       }

  
  




  function shakeBall(){ 
  const eightBall = 'Magic 8 Ball Says'
  let randomNumber = Math.floor(Math.random() *8)
 
  console.log(`${eightBall} your number is: ${randomNumber}`)
 
 

  switch(randomNumber){
    case 0: return ( `${eightBall}- it is certain` );
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

   }

   
/*function draw(){
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
*/