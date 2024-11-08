const  button = document.getElementById('btn');

button.addEventListener('click', shakeBall)


function shakeBall(){ 
  const eightBall = 'Zoltar Says:'
  let randomNumber = Math.floor(Math.random() *8)
 
  //console.log(`${eightBall} your number is: ${randomNumber}`)
 
 

  switch(randomNumber){
    case 0: return document.getElementById('answer').innerText = ( `${eightBall}: it is certain` );
    
    case 1: return  document.getElementById('answer').innerText = (`${eightBall}: I Doubt It very much`);
    
    case 2: return document.getElementById('answer').innerText = (`${eightBall}: Try again, If you Dare`);
  
    case 3: return document.getElementById('answer').innerText = (`${eightBall} Vision Hazy, I cannot Tell`);
   
    case 4: return document.getElementById('answer').innerText =(`${eightBall} Maybe, Maybe Not!`);
    
    case 5: return document.getElementById('answer').innerText = (`${eightBall} Yes, You are a lucky one`);
   
    case 6: return document.getElementById('answer').innerText =(`${eightBall} It's not Looking good for you`);
    
    case 7: return document.getElementById('answer').innerText =(`${eightBall} Ha ha ha ha ha ha ha, NO! `);
    
  
  
}

   }

   //let question = document.getElementById('question')
   //let answer = document.getElementById('answer')



  

