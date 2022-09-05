const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const allButtons = document.querySelectorAll(".btn")

for(let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", () =>{
        console.log("click")
    })
}