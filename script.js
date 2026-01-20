console.log('Hello World!!!')

var humanScore = 0
var computerScore = 0

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

function getHumanChoice() {
    return window.prompt('Choose between "rock", "paper" and "scissors".')
}

function playRound(humanChoice,computerChoice) {
    humanChoice.toLowerCase()
    if (
        humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You win! ${humanChoice} beat ${computerChoice}.`)
            ++humanScore
            return
    } else if (humanChoice === computerChoice) {
        console.log(`Tie! You both have chosen ${humanChoice}.`)
        return 
    } else {
        console.log(`You Lose! ${computerChoice} beat ${humanChoice}.`)
        ++computerScore
        return 
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    console.log(`The game's over!`)

    if (humanScore > computerScore) {
        console.log(`Congratuations! You have won with ${humanScore} points against ${computerScore}.`)
        return
    } else if (humanScore === computerScore) {
        console.log(`No winner! You both have a score of ${humanScore}.`)
        return
    } else {
        console.log(`Too bad! You loose with a score of ${humanScore} points against ${computerScore}.`)
        return
    }
}

playGame()