console.log("Hello World!");


function getHumanChoice() {
    let choice = prompt("Pierre, papier, ciseaux!");
    choice = choice.toLowerCase()

    if (choice == "pierre" || choice == "papier" || choice == "ciseaux") {
        return choice
    } else {
        return
    }
}

let humanChoice = getHumanChoice();
console.log(humanChoice);



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

let computerChoice = getComputerChoice();
console.log(computerChoice);