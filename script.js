console.log('Hello World!!!')

var humanScore = 0
var computerScore = 0

const buttons = document.querySelectorAll("button");
const result = document.querySelector('#result');
console.log(result.textContent)


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    playRound(button.id, getComputerChoice())
  });
});


function getComputerChoice() {
    const a = Math.random()
    if (a <= 0.33) {
        return 'rock'
    } else if (a > 0.33 && a <= 0.66) {
        return 'paper'   
    } else {
        return 'scissors'
    }
}

function playRound(humanChoice,computerChoice) {
    humanChoice.toLowerCase()
    if (
        humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            result.textContent = `You win! ${humanChoice} beat ${computerChoice}.`
            console.log(`You win! ${humanChoice} beat ${computerChoice}.`)
            ++humanScore
            return
    } else if (humanChoice === computerChoice) {
        result.textContent = `Tie! You both have chosen ${humanChoice}.`
        console.log(`Tie! You both have chosen ${humanChoice}.`)
        return 
    } else {
        result.textContent = `You Lose! ${computerChoice} beat ${humanChoice}.`
        console.log(`You Lose! ${computerChoice} beat ${humanChoice}.`)
        ++computerScore
        return 
    }
}

