const getComputerChoice = () => {
    let letter = ["Rock", "Paper", "Scissors"]
    let choosenLetter = letter[Math.floor(Math.random() * letter.length)]
    console.log(choosenLetter)
}

const playRound = (playerSelection, computerSelection) => {
    // player
    let firstLttrPlayer = playerSelection.slice(0, 1).toUpperCase()
    let restOfTheLttrPlayer = playerSelection.slice(1, playerSelection.length).toLowerCase()
    let playerChoice = firstLttrPlayer + restOfTheLttrPlayer
    // computer
    let firstLttrComputer = computerSelection.slice(0, 1).toUpperCase()
    let restOfTheLttrComputer = computerSelection.slice(1, computerSelection.length).toLowerCase()
    let computerChoice = firstLttrComputer + restOfTheLttrComputer

    if (playerChoice === computerChoice) {
        return "You cannot choose the same as the adversary"
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "Rock beats Scissors. You win!"
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "Paper beats Rock. You win!"
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "Scissors beats Paper. You win!"
    }
    else if (playerChoice && computerChoice !== "Rock" || playerChoice && computerChoice !== "Paper" || playerChoice && computerChoice !== "Scissors") {
        return "This isn't an option. Please choose between Rock, Paper or Scissors"
    }
    else {
        return computerChoice + " beats " + playerChoice + "." + " You lose!"
    }
}