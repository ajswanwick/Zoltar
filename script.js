const  button = document.getElementById('btn');
button.addEventListener('click', zoltarMessage)
const textBox = document.getElementById('question').innerText


function zoltarMessage (){
  
  let zoltarMessage = ['it is certain', 'maybe, maybe not', 'I doubt it very much', 'Try again if you dare!!' , 'The outlook looks bleak for you',
    'ha ha ha ha ha ha ha ha, NO!', 'It is looking good for you', 'My vision is blocked i cannot tell', 'Cross my palm with silver and it will be true', 
    'yes you are fortunate', 'yes you are blessed'];
  
  const randomChoice = Math.floor(Math.random()*zoltarMessage.length);
  const response =  zoltarMessage[randomChoice];
  const message = `Zoltar Says:  ${response}`
  
   document.getElementById('answer').innerText  = message
  
 }








  

