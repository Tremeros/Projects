document.addEventListener("DOMContentLoaded", function() {

let mainbutton = document.querySelector(".main-btn");
let scissorsBtn = document.querySelector(".scissors-btn");
let paperBtn = document.querySelector(".paper-btn");
let rockBtn = document.querySelector(".rock-btn");
let mainscreen = document.querySelector(".main-screen");
let gamePannel = document.querySelector(".game-pannel");
let playerPointsValue = document.querySelector(".player-points span");
let pcPointsValue = document.querySelector(".pc-points span");
let result = document.querySelector(".result span");
let endGame = document.querySelector(".end-game");
let endGameResult = document.querySelector(".end-game span");
let playerPoints = 0;
let pcPoints = 0;
let pcMoveArray = ["scissors", "paper", "rock"];

mainbutton.addEventListener("click", function(e) {
   e.preventDefault();
    mainscreen.classList.add("hide");
    gamePannel.classList.remove("hide");
    
})

function pcMove() {
    let random = Math.floor(Math.random() * 3);
    return pcMoveArray[random];
}

scissorsBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let pc = pcMove();
    result.innerText = "";
     
    if(pc == "paper") {
        playerPoints++;
        playerPointsValue.innerText = playerPoints;
        result.innerText = "Player won the round";
    } else if(pc == "scissors") {
       result.innerText = "Draw";
    } else {
        pcPoints++;
        pcPointsValue.innerText = pcPoints;
        result.innerText = "PC won the round";
    }
    if(playerPoints == 5) {
      endGame.classList.remove("hide");
      gamePannel.classList.add("hide");
      endGameResult.innerText = "Player";
    } else if(pcPoints == 5) {
        endGame.classList.remove("hide");
      gamePannel.classList.add("hide");
      endGameResult.innerText = "PC";
    }
})

paperBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let pc = pcMove();
    result.innerText = "";
     
    if(pc == "rock") {
        playerPoints++;
        playerPointsValue.innerText = playerPoints;
        result.innerText = "Player won the round";
    } else if(pc == "paper") {
       result.innerText = "Draw";
    } else {
        pcPoints++;
        pcPointsValue.innerText = pcPoints;
        result.innerText = "PC won the round";
    }
    if(playerPoints == 5) {
        endGame.classList.remove("hide");
        gamePannel.classList.add("hide");
        endGameResult.innerText = "Player";
      } else if(pcPoints == 5) {
          endGame.classList.remove("hide");
        gamePannel.classList.add("hide");
        endGameResult.innerText = "PC";
      }
})

rockBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let pc = pcMove();
    result.innerText = "";
     
    if(pc == "scissors") {
        playerPoints++;
        playerPointsValue.innerText = playerPoints;
        result.innerText = "Player won the round";
    } else if(pc == "rock") {
       result.innerText = "Draw";
    } else {
        pcPoints++;
        pcPointsValue.innerText = pcPoints;
        result.innerText = "PC won the round";
    }
    if(playerPoints == 5) {
        endGame.classList.remove("hide");
        gamePannel.classList.add("hide");
        endGameResult.innerText = "Player";
      } else if(pcPoints == 5) {
          endGame.classList.remove("hide");
        gamePannel.classList.add("hide");
        endGameResult.innerText = "PC";
      }
})




})

