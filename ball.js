const  button = document.getElementById('btn');

button.addEventListener('click', shakeBall)


function shakeBall(){ 
  const eightBall = 'Zoltar Says:'
  let randomNumber = Math.floor(Math.random() *8)
 
  //console.log(`${eightBall} your number is: ${randomNumber}`)
 
 

  switch(randomNumber){
    case 0: return document.getElementById('answer').innerText = ( `${eightBall}- it is certain` );
    
    case 1: return  document.getElementById('answer').innerText = (`${eightBall}- it is decidedely so`);
    
    case 2: return document.getElementById('answer').innerText = (`${eightBall}-: Try again`);
  
    case 3: return document.getElementById('answer').innerText = (`${eightBall}- Cannot predict now`);
   
    case 4: return document.getElementById('answer').innerText =(`${eightBall}- Do not count on it`);
    
    case 5: return document.getElementById('answer').innerText = (`${eightBall}- My sources say no`);
   
    case 6: return document.getElementById('answer').innerText =(`${eightBall} outlook not so good`);
    
    case 7: return document.getElementById('answer').innerText =(`${eightBall} signs point to yes`);
    
  
  
}

   }

   //let question = document.getElementById('question')
   //let answer = document.getElementById('answer')



  

