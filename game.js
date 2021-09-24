const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    player: "",
    computer: "",
}

const signs = [...document.querySelectorAll("img")];

signs.forEach(sign => {

    sign.addEventListener("click", function gamerChoice() {

        removeYellowBorder();
        this.style.boxShadow = "yellow 0 0 0 4px";
        game.player = this.dataset.option;          

    });
});

const winner = document.querySelector('[data-summary="who-win"]');



document.querySelector(".start").addEventListener("click", (e) => {

    game.computer = computerChoice();


    if (!game.player) {

        alert("Musisz coś wybrać!") 
        return

    } else if (game.player == game.computer) {
        gameSummary.draws++;
        document.querySelector(".draws span").textContent = gameSummary.draws;
        winner.textContent = "REMIS";

    } else if (game.player == signs[2].dataset.option && game.computer == signs[0].dataset.option || game.player == signs[2].dataset.option && game.computer == signs[1].dataset.option  || game.player == signs[1].dataset.option && game.computer == signs[0].dataset.option) {
        gameSummary.wins++;
        document.querySelector(".wins span").textContent = gameSummary.wins;
        winner.textContent = "GRACZ";

    } else {
        gameSummary.losses++;
        document.querySelector(".losses span").textContent = gameSummary.losses;
        winner.textContent = "KOMPUTER";
    }
    
    

    document.querySelector('[data-summary="your-choice"]').textContent = game.player;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.computer;

    document.querySelector(".numbers span").textContent = `${++gameSummary.games}`;

    game.player = undefined;

    removeYellowBorder();

});


const removeYellowBorder = function() {

    signs.forEach(sign => sign.style.boxShadow = "");

}

const computerChoice = function() {
    return signs[Math.floor(Math.random() * 3)].dataset.option
}