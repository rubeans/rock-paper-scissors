// WHAT TOP REQUESTED FOR ME TO DO
// const getComputerChoice = () => {
//     let letter = ["Rock", "Paper", "Scissors"]
//     let choosenLetter = letter[Math.floor(Math.random() * letter.length)]
//     return choosenLetter
// }

// const playRound = (playerSelection, computerSelection) => {
//     // player
//     let firstLttrPlayer = playerSelection.slice(0, 1).toUpperCase()
//     let restOfTheLttrPlayer = playerSelection.slice(1, playerSelection.length).toLowerCase()
//     let playerChoice = firstLttrPlayer + restOfTheLttrPlayer

//     // computer
//     let firstLttrComputer = computerSelection.slice(0, 1).toUpperCase()
//     let restOfTheLttrComputer = computerSelection.slice(1, computerSelection.length).toLowerCase()
//     let computerChoice = firstLttrComputer + restOfTheLttrComputer

//     // logic
//     if (playerChoice === computerChoice && playerChoice === "Rock" && computerChoice === "Rock" || playerChoice === "Paper" && computerChoice === "Paper" || playerChoice === "Scissors" && computerChoice === "Scissors") {
//         return "Draw!"
//     }
//     else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
//         return "You win! " + playerChoice + " beats " + computerChoice + "."
//     }
//     else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
//         return "You lose! " + computerChoice + " beats " + playerChoice + "."
//     }
//     else {
//         return "This isn't an option. Please, choose between Rock, Paper or Scissors"
//     }
// }

// const game = () => {
//     const getPlayerChoice = prompt("Please, choose between Rock, Paper or Scissors.")
//     alert(playRound(getPlayerChoice, getComputerChoice()))
// }

// game()