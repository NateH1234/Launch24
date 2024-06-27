const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

let oldPaddleLPos = 0;
let oldPaddleRPos = 0;
let newPaddleLPos = 0;
let newPaddleRPos = 0;
let paddleLDistance = 0;
let paddleRDistance = 0;

let ballDirection;

function resetGame() {
    clearInterval(intervalID);
    clearInterval(intervalIDLonger);
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;

    scoreL = 0;
    scoreR = 0;

    updateScore();
    resetPaddles();
    resetBall();
    nextTick();
    longerTick();
}

function resetPaddles() {
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "rgb(255, 75, 50)");
    paddleR = new Paddle(boardWidth - paddleWidth, 0, paddleLength, paddleWidth, "rgb(30,120,255)");
}

function resetBall() {
    //1 or 2
    ballDirection = Math.round(Math.random() * 10) / 5;
    //console.log(ballDirection);

    if(ballDirection > 1){
        ball = new Ball(boardWidth / 2, boardHeight / 2, 2, Math.round(Math.random() * 10), ballRadius, "gold");
    }else{
        ball = new Ball(boardWidth / 2, boardHeight / 2, -2, Math.round(Math.random() * 10), ballRadius, "gold");
    }
}

function clearBoard() {
    ctx.fillStyle = "rgb(55,55,60)";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }
            ball.bounceWall();
            if (ball.bouncePaddleL(paddleL)) score("right");
            if (ball.bouncePaddleR(paddleR)) score("left");
            ball.move();
            draw();
            nextTick();
        }, 10
        
    );
}

let intervalIDLonger;

function longerTick() {
    intervalIDLonger = setTimeout(
        () => {
            //Update the variables
            oldPaddleLPos = newPaddleLPos;
            oldPaddleRPos = newPaddleRPos;
            //Now that this is stored, we can change the new paddle pos variables to the actual paddle positions
            newPaddleLPos = paddleL.y;
            newPaddleRPos = paddleR.y;
            //Subtract to find the distance covered
            paddleLDistance = newPaddleLPos - oldPaddleLPos;
            paddleRDistance = newPaddleRPos - oldPaddleRPos;
            //console.log(paddleLDistance);
            //console.log(paddleRDistance);

            longerTick();
        }, 100
        
    );
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR++;

    updateScore();
    resetBall();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}