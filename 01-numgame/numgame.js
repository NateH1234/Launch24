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

let MINNUM;
let MAXNUM;
let secret;
let lieChance;

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
}
function startGame(){ 
    loadGame()
    lblSetMin.style.display = "none"
    min.style.display = "none"
    brSetUp1.style.display = "none"
    lblSetMax.style.display = "none"
    max.style.display = "none"
    brSetUp2.style.display = "none"
    start.style.display = "none"
    brSetUp3.style.display = "none"
    lie.style.display = "none"
    lblSetLie.style.display = "none"
    guess.style.display = "inline"
    lblGuess.style.display = "inline"
    btnGuess.style.display = "inline"
}
function resetGame(){
    document.body.style.backgroundColor = "rgb(241, 115, 11)"
    report.innerHTML = "Report"
    reset.style.visibility = "hidden"
    lblSetMin.style.display = "inline"
    min.style.display = "inline"
    brSetUp1.style.display = "inline"
    lblSetMax.style.display = "inline"
    max.style.display = "inline"
    brSetUp2.style.display = "inline"
    start.style.display = "inline"
    brSetUp3.style.display = "inline"
    lie.style.display = "inline"
    lblSetLie.style.display = "inline"
    guess.style.display = "none"
    lblGuess.style.display = "none"
    btnGuess.style.display = "none"
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!
    if (myGuess == secret){
        report.innerHTML += `<br>${myGuess} is correct!`
        document.body.style.backgroundColor = "lightgreen"
        myConfetti({
            particleCount: 100,
            spread: 160
        })
        reset.style.visibility = "visible"
    }else if (myGuess < secret && lieChance <= Math.random() * 100 + 1 || myGuess > secret && lieChance >= Math.random() * 100 + 1){
        report.innerHTML += `<br>${myGuess} is too small!`
    }else{
        report.innerHTML += `<br>${myGuess} is too big!`
    }
}