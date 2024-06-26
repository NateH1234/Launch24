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

let MINNUM = 0;
let MAXNUM = 100;
let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.min = MINNUM;
    guess.max = MAXNUM;

    secret = Math.random();
    let range = MAXNUM - MINNUM + 1;
    secret *= range;
    secret += MINNUM;
    secret = Math.floor(secret);
}
function startGame(){
    lblSetMin.style.display = "none"
    min.style.display = "none"
    brSetUp1.style.display = "none"
    lblSetMax.style.display = "none"
    max.style.display = "none"
    brSetUp2.style.display = "none"
    start.style.display = "none"

}
function resetGame(){
    document.body.style.backgroundColor = "rgb(241, 115, 11)"
    report.innerHTML = "Report"
    reset.style.visibility = "hidden"
    loadGame()
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
    }else if (myGuess < secret){
        report.innerHTML += `<br>${myGuess} is too small!`
    }else{
        report.innerHTML += `<br>${myGuess} is too big!`
    }
}