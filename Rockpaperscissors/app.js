const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
 let userChoice
 let computerChoice
 let result

possibleChoices.forEach(choice => choice.addEventListener('click', (e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
    
}));

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random() * possibleChoices.length); 
   console.log(randomNumber)
   if (randomNumber === 0) {
    computerChoice = 'rock'
    

   }
   else if (randomNumber === 1) {
    computerChoice = 'paper'
   }
   else {
    computerChoice = 'scissors'
   }
   computerChoiceDisplay.innerHTML = computerChoice

    

}
function getResults(){
    if (computerChoice===userChoice) {
        result='It\'s a tie!'
    }
    else if ((computerChoice==='rock' && userChoice==='paper') || (computerChoice==='paper' && userChoice==='scissor') || (computerChoice==='scissors' && userChoice==='rock')) {
        result='You win!'
    }
    else {
        result='You lose!'
    }
    resultDisplay.innerHTML = result

}