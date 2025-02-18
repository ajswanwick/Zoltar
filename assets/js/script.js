const button = document.getElementById('btn-ask');
button.addEventListener('click', zoltarMessage);

r

function zoltarMessage() {
  const noQuestionAsked = "Foolish Mortal, you didn't ask a question!";

  const questionInput = document.getElementById('question').value.trim(); // Trim to avoid just spaces

  if (questionInput === "") {
    document.getElementById('answer').innerText = noQuestionAsked;
  } else {
    const responses = [
      'It is certain', 'Maybe, maybe not', 'I doubt it very much', 
      'Try again if you dare!!', 'The outlook looks bleak for you',
      'Ha ha ha ha ha ha ha ha, NO!', 'It is looking good for you', 
      'My vision is blocked, I cannot tell', 'Cross my palm with silver and it will be true', 
      'Yes, you are fortunate', 'Yes, you are blessed'
    ];

    const randomChoice = Math.floor(Math.random() * responses.length);
    const message = `Zoltar Says: ${responses[randomChoice]}`;

    document.getElementById('answer').innerText = message;
    console.log("Question asked:", questionInput);
  }
}







  

