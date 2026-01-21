console.log('Hello World!!!')

var humanScore = 0
var computerScore = 0

const buttons = document.querySelectorAll("button");
const result = document.querySelector('#result');
const score = document.querySelector('#score');

console.log(result.textContent)
score.textContent = `Score : 0 - 0`
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    if (humanScore < 5 && computerScore < 5) {
        playRound(button.id, getComputerChoice())
    }    
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
            ++humanScore
            if (humanScore != 5) {
                result.textContent = `You win! ${humanChoice} beat ${computerChoice}.`
            } else {
                result.textContent = `The Game's over! You have won the Game`
            }
            score.textContent = `Score : ${humanScore} - ${computerScore}`
            return
        } else if (humanChoice === computerChoice) {
            result.textContent = `Tie! You both have chosen ${humanChoice}.`
            return 
        } else {
            ++computerScore
            if (computerScore != 5) {
                result.textContent = `You Lose! ${computerChoice} beat ${humanChoice}.` 
            } else {
                result.textContent = `The Game's over! You lost the game`
            }
            score.textContent = `Score : ${humanScore} - ${computerScore}`
            return 
        }
}