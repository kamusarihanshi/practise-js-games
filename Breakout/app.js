const grid = document.querySelector('.grid');
constscoreball = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 100;
const ballDiameter=20
const boardWidth=600
const boardHeight=300
const xDirection=2
const yDirection=2

const userStart = [230, 10];
let currentPosition = userStart;

// Create Block class
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
        this.topLeft = [xAxis, yAxis + blockHeight];
    }
}

// All blocks
let blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(230, 180),
    new Block(340, 180),
    new Block(120, 180),
    new Block(230, 150),
];

// Draw all blocks
function addblock() {
    for (var i = 0; i < blocks.length; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}
addblock();

// Create and draw user
const user = document.createElement('div');
user.classList.add('user');
grid.appendChild(user);
drawUser();

function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

// Move user
function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] >0){
            currentPosition[0] -= 10;
            drawUser();
            }
            break;
        case 'ArrowRight':
           if (currentPosition[0] <boardWidth-blockWidth){
            currentPosition[0] += 10;
            drawUser();
            }
            break;
           
       
    }
}
  
document.addEventListener('keydown', moveUser);

// draw ball

let ballStart=[230,30]
let ballCurrentPosition = ballStart
let ballSpeed = [2, 4];

let ball = document.createElement('div');
ball.classList.add('ball');
grid.appendChild(ball);
drawBall();

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

// move ball
function moveBall() {
    ballCurrentPosition[0] +=xDirection 
    ballCurrentPosition[1] += yDirection
    drawBall();
    collisionCheck()







}

timerId=setInterval(moveBall, 100);

// collision detection
function collisionCheck(){
    if (ballCurrentPosition[0] >= (boardWidth-ballDiameter) || ballCurrentPosition[1] >= (boardHeight-ballDiameter) || ballCurrentPosition[0] <= 0){
        
        changeDirection()
    }
    if(ballCurrentPosition[1]<= 0){
        clearInterval(timerId)
        scoreDisplay.innerText='you lose sucker'
        document.removeEventListener('keydown', moveUser)
    }

}
function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
      yDirection = -2
      return
    }
    if (xDirection === 2 && yDirection === -2) {
      xDirection = -2
      return
    }
    if (xDirection === -2 && yDirection === -2) {
      yDirection = 2
      return
    }
    if (xDirection === -2 && yDirection === 2) {
      xDirection = 2
      return
    }
  }
  changeDirection()