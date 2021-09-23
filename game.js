// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const paper = document.querySelector('[data-option="papier"]');
const stone = document.querySelector('[data-option="kamień"]');
const scissors = document.querySelector('[data-option="nożyczki"]');

const play = document.querySelector(".start")

const arrayGame = ['papier', 'kamien', "nożyczki"];

const numbers = document.querySelector("numbers");
const wins = document.querySelector("wins");
const losses = document.querySelector("losses");
const draws = document.querySelector("draws");

const yC = document.querySelector('[data-summary="your-choice"]');
const aI = document.querySelector('[data-summary="ai-choice"]');
const winner = document.querySelector('[data-summary="who-win"]');

let myChoice;

paper.addEventListener("click", (e) => {
    e.target.style.border = "yellow solid 3px";
    console.log("papier")
    myChoice = e.target.dataset.option;
    
});


stone.addEventListener("click", (e) => {
    console.log("kamień")
    myChoice = e.target.dataset.option;
});


scissors.addEventListener("click", (e) => {
    console.log("nożyczki")
    myChoice = e.target.dataset.option;
});


play.addEventListener("click", (e) => {

    const randomIndex = Math.floor(Math.random() * 4);
    const aiChoice = arrayGame[randomIndex];

    if (aiChoice === myChoice) {
        alert("REMIS")
    } else if (aiChoice == "nożyczki" && myChoice == "papier" || myChoice == "nożyczki" && aiChoice == "kamień" || myChoice == "kamień" && aiChoice == "papier" ) {
            alert(`Przegrana ${aiChoice}`)
    }
  
})

// const choiceFunction = (e) => {
//     myChoice = e.target.dataset.option;
//     
// }