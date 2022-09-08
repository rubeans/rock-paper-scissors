// WHAT TOP REQUESTED FOR ME TO DO

// GET THE ELEMENTS
let heading = document.querySelector("h1");
let paragraph = document.querySelector("p");

// INITIAL COUNT
let playerCount = 0
let computerCount = 0

// GET COMPUTER CHOICE
const getComputerChoice = () => {
    let letter = ["Rock", "Paper", "Scissors"]
    let choosenLetter = letter[Math.floor(Math.random() * letter.length)]
    return choosenLetter
}

// ROUNDS
const playRound = (playerSelection, computerSelection) => {
    // PLAYER CHOICE
    let firstLttrPlayer = playerSelection.slice(0, 1).toUpperCase()
    let restOfTheLttrPlayer = playerSelection.slice(1, playerSelection.length).toLowerCase()
    let playerChoice = firstLttrPlayer + restOfTheLttrPlayer

    // COMPUTER CHOICE
    let firstLttrComputer = computerSelection.slice(0, 1).toUpperCase()
    let restOfTheLttrComputer = computerSelection.slice(1, computerSelection.length).toLowerCase()
    let computerChoice = firstLttrComputer + restOfTheLttrComputer

    // LOGIC
    if (playerChoice === computerChoice && playerChoice === "Rock" && computerChoice === "Rock" || playerChoice === "Paper" && computerChoice === "Paper" || playerChoice === "Scissors" && computerChoice === "Scissors") {
        playerCount += 0
        computerCount += 0
        return "Draw!"
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        playerCount += 1
        computerCount += 0
        return "Nice choice, you win the round! " + playerChoice + " beats " + computerChoice + "."
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
        playerCount += 0
        computerCount += 1
        return "Bad choice, computer wins the round! " + computerChoice + " beats " + playerChoice + "."
    }
    else {
        return "This isn't an option. Please, choose between Rock, Paper or Scissors."
    }
}

// GAME CONTENT
const game = () => {
    //GET PLAYER CHOICE
    const getPlayerChoice = prompt("Please, choose between Rock, Paper or Scissors.")

    // DISPLAY THE QUESTION
    alert(playRound(getPlayerChoice, getComputerChoice()))

    // SHOW THE RESULT
    paragraph.innerText = "Score: " + playerCount + " - " + computerCount

    // SHOW WHO WINS
    if (playerCount > computerCount) {
        heading.innerText = "Congrats! You won the game."
    }
    else if (playerCount === computerCount) {
        heading.innerText = "What a tough game. It's a tie!"
    }
    else {
        heading.innerText = "Nice try! The computer was smarter this time."
    }
}

// START THE GAME
const startGame = () => {
    for (let i = 0; i < 5; i++) {
        game()
    }
}

// HIDE BUTTON
const hideStartButton = () => {
    document.querySelector(".startGame").style.visibility = "hidden"
}

// TRYING TO FIGURE OUT
const playAgain = () => {
    
}