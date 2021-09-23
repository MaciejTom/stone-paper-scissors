// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const paper = document.querySelector('[data-option="papier"]');
const stone = document.querySelector('[data-option="kamień"]');
const scissors = document.querySelector('[data-option="nożyczki"]');

const play = document.querySelector(".start")

const arrayGame = ['papier', 'kamien', "nożyczki"];

const numbers = document.querySelector(".numbers span");

const wins = document.querySelector(".wins span");
const losses = document.querySelector(".losses span");
const draws = document.querySelector(".draws span");
 
const yC = document.querySelector('[data-summary="your-choice"]');
const aI = document.querySelector('[data-summary="ai-choice"]');
const winner = document.querySelector('[data-summary="who-win"]');

let myChoice;
let gamesAmount = 1;
let gamesWin = 1;
let gamesDraw = 1;
let gamesLost = 1;

paper.addEventListener("click", (e) => {
    e.target.classList.add("chosen")
    console.log("papier")
    myChoice = e.target.dataset.option;

    scissors.classList.remove("chosen");
   
    stone.classList.remove("chosen");
    
});


stone.addEventListener("click", (e) => {
    console.log("kamień")
    myChoice = e.target.dataset.option;
  
    e.target.classList.add("chosen")
    scissors.classList.remove("chosen")
    paper.classList.remove("chosen")
    

});

scissors.addEventListener("click", (e) => {
    console.log("nożyczki")
    myChoice = e.target.dataset.option;
    e.target.classList.add("chosen")
    paper.classList.remove("chosen")
    stone.classList.remove("chosen")
});


play.addEventListener("click", (e) => {

    const randomIndex = Math.floor(Math.random() * 3);

    const aiChoice = arrayGame[randomIndex];

    if (aiChoice === myChoice) {
        winner.textContent = "REMIS";
        winner.style.color = "grey";
        draws.textContent = `${gamesDraw++}`;
       

    } else if (aiChoice == "nożyczki" && myChoice == "papier" || myChoice == "nożyczki" && aiChoice == "kamień" || myChoice == "kamień" && aiChoice == "papier" ) {
        winner.textContent = "KOMPUTER";
        winner.style.color = "red";
        losses.textContent = `${gamesLost++}`;
 
    } else if (myChoice == undefined) {

       alert("Wybierz coś!!!")
       return

    } else {
        winner.textContent = "GRACZ";
        winner.style.color = "green";
        wins.textContent = `${gamesWin++}`;
        console.log(gamesWin)

    }
    yC.textContent = myChoice;
    aI.textContent = aiChoice;

    
    
    numbers.textContent = `${gamesAmount++}`;
});

// const choiceFunction = (e) => {
//     myChoice = e.target.dataset.option;
//     
// }