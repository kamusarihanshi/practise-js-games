const squares=document.querySelectorAll('.square');
const timeLeft=document.querySelector('#time');
const scoreDisplay=document.querySelector('#score');
const mole = document.querySelector('.mole');
let hitPosition;
let result=0;
let currentTime=60;

// get the random square and add class mole that moves with it
function randomSquare(){
    squares.forEach((square)=>{
        square.classList.remove('mole');
    })
    const randomSquare=Math.floor(Math.random()*9);
    
    squares[randomSquare].classList.add('mole');
    hitPosition=randomSquare.id

  
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++
        scoreDisplay.textContent = result
        hitPosition = null
      }
    })
}

)}
// timer that moves the square around the screen every 500  
function moveMole(){
    timerId=null;
    timerId=setInterval(randomSquare,500)
}
moveMole()



// timer that counts down
function countDown(){
    currentTime --
    timeLeft.textContent=currentTime;
    if(currentTime===0){
        clearInterval(timerId);
        alert('Game Over! Your Score is '+score);
    }

}
let countTimerId= setInterval(countDown, 1000)