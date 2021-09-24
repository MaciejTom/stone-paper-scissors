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
    }
    const gameResult = whoWin(game.player, game.computer);

    publishResult(game.player, game.computer, gameResult);

    document.querySelector('[data-summary="your-choice"]').textContent = game.player;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.computer;

    document.querySelector(".numbers span").textContent = `${++gameSummary.games}`;

    game.player = undefined;

    removeYellowBorder();

});

console.log("asdasd")
const removeYellowBorder = function () {

    signs.forEach(sign => sign.style.boxShadow = "");

}

const computerChoice = function () {
    return signs[Math.floor(Math.random() * 3)].dataset.option
}

const whoWin = function (player, computer) {

    if (game.player == game.computer) {
        return "draw";

    } else if ((game.player === "papier" && game.computer === "kamień") || (game.player === "kamień" && game.computer === "nożyczki") || (game.player === "nożyczki" && game.computer === "papier")) {
        return "win";


    } else {
        return "loss";
    }
}

const publishResult = function (player, computer, result) {

    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = computer;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result == "draw") {

        document.querySelector(".draws span").textContent = ++gameSummary.draws;
        winner.textContent = "REMIS";
        winner.style.color = "gray";

    } else if (result == "win") {
        document.querySelector(".wins span").textContent = ++gameSummary.wins;
        winner.textContent = "WYGRANA!!!";
        winner.style.color = "green";
    } else {
        document.querySelector(".wins span").textContent = ++gameSummary.losses;
        winner.textContent = "KOMPUTER";
        winner.style.color = "red";
    }

}