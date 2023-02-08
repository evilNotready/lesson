const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtn = document.querySelectorAll(".choiceBtn")
let player
let computer
let rusult

choiceBtn.forEach(button => button.addEventListener("click",() => {
    player = button.textContent 
    computerTurn()
    result = checkWinner()
    playerText.textContent = `Человек: ${player}`
    computerText.textContent = `Комп: ${computer}`
    resultText.textContent = `${result}`
}))
function computerTurn() {
    const computerChoice = Math.floor(Math.random() * 3) + 1
      switch (computerChoice) {
        case 1: 
        computer = "Камень"
        break;
        case 2: 
        computer = "Ножницы"
        break;
        case 3: 
        computer = "Бумага"
        break;
      }
}
function checkWinner() {
    if (computer == player) {
        return "Ничья!"
    } else if(computer === "Камень") {
        if (player === "Бумага") {
            return "ТЫ ПОБЕДИЛ!!!"
        } else {
            return "ТЫ проиграл:(😎"
        }
    }
    else if(computer === "Бумага") {
        if (player === "Ножницы") {
            return "ТЫ ПОБЕДИЛ!!!"
        } else {
            return "ТЫ проиграл:(😎"
        }
    }
    else if(computer === "Ножницы") {
        if (player === "Камень") {
            return "ТЫ ПОБЕДИЛ!!!"
        } else {
            return "ТЫ проиграл:(😎"
        }
    }
}