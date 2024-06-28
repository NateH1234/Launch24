const guess = document.getElementById("guess");
const report = document.getElementById("report");
const reset = document.getElementById("reset");
const lblSetMin = document.getElementById("lblSetMin");
const min = document.getElementById("min");
const brSetUp1 = document.getElementById("brSetUp1");
const lblSetMax = document.getElementById("lblSetMax");
const max = document.getElementById("max");
const brSetUp2 = document.getElementById("brSetUp2");
const start = document.getElementById("start");
const lblGuess = document.getElementById("lblGuess");
const btnGuess = document.getElementById("btnGuess");
const lie = document.getElementById("lie");
const lblSetLie = document.getElementById("lblSetLie");
const brSetUp3 = document.getElementById("brSetUp3");
const lblSetMurderNumbers = document.getElementById("lblSetMurderNumbers");
const murderNumbers = document.getElementById("murderNumbers");
const brSetUp4 = document.getElementById("brSetUp4");
let MINNUM;
let MAXNUM;
let secret;
let lieChance;
let murderNum1 = -10;
let murderNum2 = -10;
let murderNum3 = -10;
let murderNum4 = -10;
let murderNum5 = -10;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    MINNUM = parseInt(min.value)
    MAXNUM = parseInt(max.value)
    guess.min = MINNUM;
    guess.max = MAXNUM;
    secret = Math.random();
    let range = MAXNUM - MINNUM + 1;
    secret *= range;
    secret += MINNUM;
    secret = Math.floor(secret);
    lieChance = parseInt(lie.value)
    switch (parseInt(murderNumbers.value)){
        case 5:
            do{
                murderNum5 = Math.random();
                murderNum5 *= range;
                murderNum5 += MINNUM;
                murderNum5 = Math.floor(murderNum5);
            }while(murderNum5 == secret);
            do{
                murderNum4 = Math.random();
                murderNum4 *= range;
                murderNum4 += MINNUM;
                murderNum4 = Math.floor(murderNum4);
            }while(murderNum4 == secret || murderNum4 == murderNum5);
            do{
                murderNum3 = Math.random();
                murderNum3 *= range;
                murderNum3 += MINNUM;
                murderNum3 = Math.floor(murderNum3);
            }while(murderNum3 == secret || murderNum3 == murderNum4 || murderNum3 == murderNum5);
            do{
                murderNum2 = Math.random();
                murderNum2 *= range;
                murderNum2 += MINNUM;
                murderNum2 = Math.floor(murderNum2);
            }while(murderNum2 == secret || murderNum2 == murderNum3 || murderNum2 == murderNum4 || murderNum2 == murderNum5);
            do{
                murderNum1 = Math.random();
                murderNum1 *= range;
                murderNum1 += MINNUM;
                murderNum1 = Math.floor(murderNum1);
            }while(murderNum1 == secret || murderNum1 == murderNum2 || murderNum1 == murderNum3 || murderNum1 == murderNum4 || murderNum1 == murderNum5);
            break;
        case 4:
            do{
                murderNum4 = Math.random();
                murderNum4 *= range;
                murderNum4 += MINNUM;
                murderNum4 = Math.floor(murderNum4);
            }while(murderNum4 == secret || murderNum4 == murderNum5);
            do{
                murderNum3 = Math.random();
                murderNum3 *= range;
                murderNum3 += MINNUM;
                murderNum3 = Math.floor(murderNum3);
            }while(murderNum3 == secret || murderNum3 == murderNum4 || murderNum3 == murderNum5);
            do{
                murderNum2 = Math.random();
                murderNum2 *= range;
                murderNum2 += MINNUM;
                murderNum2 = Math.floor(murderNum2);
            }while(murderNum2 == secret || murderNum2 == murderNum3 || murderNum2 == murderNum4 || murderNum2 == murderNum5);
            do{
                murderNum1 = Math.random();
                murderNum1 *= range;
                murderNum1 += MINNUM;
                murderNum1 = Math.floor(murderNum1);
            }while(murderNum1 == secret || murderNum1 == murderNum2 || murderNum1 == murderNum3 || murderNum1 == murderNum4 || murderNum1 == murderNum5);
            break;
        case 3:
            do{
                murderNum3 = Math.random();
                murderNum3 *= range;
                murderNum3 += MINNUM;
                murderNum3 = Math.floor(murderNum3);
            }while(murderNum3 == secret || murderNum3 == murderNum4 || murderNum3 == murderNum5);
            do{
                murderNum2 = Math.random();
                murderNum2 *= range;
                murderNum2 += MINNUM;
                murderNum2 = Math.floor(murderNum2);
            }while(murderNum2 == secret || murderNum2 == murderNum3 || murderNum2 == murderNum4 || murderNum2 == murderNum5);
            do{
                murderNum1 = Math.random();
                murderNum1 *= range;
                murderNum1 += MINNUM;
                murderNum1 = Math.floor(murderNum1);
            }while(murderNum1 == secret || murderNum1 == murderNum2 || murderNum1 == murderNum3 || murderNum1 == murderNum4 || murderNum1 == murderNum5);
            break;
        case 2:
            do{
                murderNum2 = Math.random();
                murderNum2 *= range;
                murderNum2 += MINNUM;
                murderNum2 = Math.floor(murderNum2);
            }while(murderNum2 == secret || murderNum2 == murderNum3 || murderNum2 == murderNum4 || murderNum2 == murderNum5);
            do{
                murderNum1 = Math.random();
                murderNum1 *= range;
                murderNum1 += MINNUM;
                murderNum1 = Math.floor(murderNum1);
            }while(murderNum1 == secret || murderNum1 == murderNum2 || murderNum1 == murderNum3 || murderNum1 == murderNum4 || murderNum1 == murderNum5);
            break;
        case 1:
            do{
                murderNum1 = Math.random();
                murderNum1 *= range;
                murderNum1 += MINNUM;
                murderNum1 = Math.floor(murderNum1);
            }while(murderNum1 == secret || murderNum1 == murderNum2 || murderNum1 == murderNum3 || murderNum1 == murderNum4 || murderNum1 == murderNum5);
            break;
    }
}
function startGame(){ 
    loadGame();
    lblSetMin.style.display = "none";
    min.style.display = "none";
    brSetUp1.style.display = "none";
    lblSetMax.style.display = "none";
    max.style.display = "none";
    brSetUp2.style.display = "none";
    start.style.display = "none";
    brSetUp3.style.display = "none";
    lie.style.display = "none";
    lblSetLie.style.display = "none";
    brSetUp4.style.display = "none";
    murderNumbers.style.display = "none";
    lblSetMurderNumbers.style.display = "none";
    guess.style.display = "inline";
    lblGuess.style.display = "inline";
    btnGuess.style.display = "inline";
}
function resetGame(){
    document.body.style.backgroundColor = "rgb(241, 115, 11)";
    report.innerHTML = "Report";
    reset.style.visibility = "hidden";
    lblSetMin.style.display = "inline";
    min.style.display = "inline";
    brSetUp1.style.display = "inline";
    lblSetMax.style.display = "inline";
    max.style.display = "inline";
    brSetUp2.style.display = "inline";
    start.style.display = "inline";
    brSetUp3.style.display = "inline";
    lie.style.display = "inline";
    lblSetLie.style.display = "inline";
    brSetUp4.style.display = "inline";
    murderNumbers.style.display = "inline";
    lblSetMurderNumbers.style.display = "inline";
    guess.style.display = "none";
    lblGuess.style.display = "none";
    btnGuess.style.display = "none";
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!
    if (myGuess == secret){
        report.innerHTML += `<br>${myGuess} is correct!`;
        document.body.style.backgroundColor = "lightgreen";
        myConfetti({
            particleCount: 100,
            spread: 160
        })
        reset.style.visibility = "visible";
    }else if(myGuess == murderNum1 || myGuess == murderNum2 || myGuess == murderNum3 || myGuess == murderNum4 || myGuess == murderNum5){
        report.innerHTML += `<br>${myGuess} is a MURDER NUMBER! YOU LOSE!`;
        document.body.style.backgroundColor = "red";
        reset.style.visibility = "visible";
    }else{
switch (Math.floor(Math.random() * 4)){
    case 0:
    case 1:
    case 2:
        if (myGuess < secret && lieChance <= Math.random() * 100 || myGuess > secret && lieChance >= Math.random() * 100){
            report.innerHTML += `<br>${myGuess} is too small!`;
        }else{
            report.innerHTML += `<br>${myGuess} is too big!`;
        }
    break;
    case 3:
        let range = Math.floor((MAXNUM - MINNUM)/20);
        if (range == 0) range = 1;
        if (Math.abs(secret - myGuess) <= range && lieChance <= Math.random() * 100 || Math.abs(secret - myGuess) > range && lieChance >= Math.random() * 100){
            report.innerHTML += `<br>${myGuess} is within ${range} of the secret number!`;
        }else{
            report.innerHTML += `<br>${myGuess} is NOT within ${range} of the secret number!`;
        }
    break;
}
    if (Math.abs(myGuess - murderNum1) <= Math.floor((MAXNUM - MINNUM)/20) || Math.abs(myGuess - murderNum2) <= Math.floor((MAXNUM - MINNUM)/20) || Math.abs(myGuess - murderNum3) <= Math.floor((MAXNUM - MINNUM)/20) || Math.abs(myGuess - murderNum4) <= Math.floor((MAXNUM - MINNUM)/20) || Math.abs(myGuess - murderNum5) <= Math.floor((MAXNUM - MINNUM)/20)){
        report.innerHTML += `<br>There is at least one murder number within ${Math.floor((MAXNUM - MINNUM)/20)}, be careful!`;
    }else{
        if (Math.floor((MAXNUM - MINNUM)/20) == 0){
            report.innerHTML += `<br>The amount of numbers is too small to be able to see murder numbers!`
        }else{
            report.innerHTML += `<br>There are no murder numbers within ${Math.floor((MAXNUM - MINNUM)/20)}, you are safe around here`;
        }
    
    }
    }
}