const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Игрок: ${player}`;
    computerText.textContent = `Компьюте: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "КАМЕНЬ";
        break;
      case 2:
        computer = "БУМАГА";
        break;
      case 3:
        computer = "НОЖНИЦЫ";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Перестань мысли читать";
    }
    else if(computer == "КАМЕНЬ"){
      return (player == "БУМАГА") ? "Победил все таки..." : "Очередной проигрыш"
    }
    else if(computer == "БУМАГА"){
      return (player == "НОЖНИЦЫ") ? "Надо же.. победил" : "Ты проиграл"
    }
    else if(computer == "НОЖНИЦЫ"){
      return (player == "КАМЕНЬ") ? "Выиграл" : "Проиграл"
    }
}
