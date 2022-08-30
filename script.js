const getComputerChoice = () => {
    let letter = ["Rock", "Paper", "Scissors"]
    let choosenLetter = letter[Math.floor(Math.random() * letter.length)]
    console.log(choosenLetter)
}