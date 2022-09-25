// GET ELEMENT
const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const buttons = document.querySelectorAll(".btn")

// DECLARE THE VARIABLES
let player;
let computer;
let result;

// MAIN
buttons.forEach(button => button.addEventListener("click", () => {

    player = button.classList[0]
    // console.log(player)

    computerChoice()

    playerText.textContent = player

    computerText.textContent = computer

    resultText.textContent = checkWinner()

}))

// GET COMPUTER CHOICE
const computerChoice = () => {
    const randNum = Math.floor(Math.random() * 3) + 1

    switch (randNum) {
        case 1:
            computer = "rock"
            break;
        case 2:
            computer = "paper"
            break;
        case 3:
            computer = "scissor"
            break;
    }
}

// CHECK THE WINNER
const checkWinner = () => {
    if (player == computer) {
        return "Draw!"
    }
    else if (player == "rock" && computer == "scissor" || player == "paper" && computer == "rock" || player == "scissors" && computer == "raper") {
        return "You Win!"
    }
    else {
        return "You Lose!"
    }
}