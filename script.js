console.log("Hello World!");

let computerScore = 0;
let humanScore = 0;

function getHumanChoice() {
    let choice = prompt("Pierre, papier, ciseaux!");
    choice = choice.toLowerCase()

    if (choice == "pierre" || choice == "papier" || choice == "ciseaux") {
        return choice
    } else {
        return
    }
}

function getComputerChoice() {
    const choice = Math.random();

    if (choice <= 0.33) {
        return "pierre"
    } else if (choice <= 0.66) {
        return "papier"
    } else if (choice <= 1) {
        return "ciseaux"
    } else {
        return
    }
}

function playRound(humanChoice,computerChoice) {

    let win = "GG! " + computerChoice + " perd contre " + humanChoice + ".";
    let loose = "Perdu! " + computerChoice + " gagne contre " + humanChoice + ".";
    let tie = "Ex Aequo! deux " + humanChoice + ".";

    if (humanChoice == "pierre" && computerChoice == "ciseaux") {
        humanScore ++;
        return console.log(win);
    } else if (humanChoice == "papier" && computerChoice == "pierre") {
        humanScore ++;
        return console.log(win);
    } else if (humanChoice == "ciseaux" && computerChoice == "papier") {
        humanScore ++;
        return console.log(win);
    } else if (humanChoice == computerChoice) {
        return console.log(tie);
    } else {
        computerScore ++;
        return console.log(loose);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSolution = getHumanChoice();
        let computerSolution = getComputerChoice();

        playRound(humanSolution,computerSolution);
    }
    console.log("GG! Score final: VOUS = " + humanScore + " vs MACHINE = " + computerScore);
}

playGame();