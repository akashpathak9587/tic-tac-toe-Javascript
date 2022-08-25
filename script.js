let tileElement = document.querySelectorAll(".tile");
let playerXTurn = true;
let tileBox = ["", "", "", "", "", "", "", "", ""];
let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let resetElement = document.querySelector(".reset");
let won = false;
const resultDisplay = document.querySelector(".result");
let playerTurnElement = document.querySelector(".playerTurn");
tileElement.forEach((tile, i) => {
  tile.addEventListener("mousemove", () => {
    if (won == false) {
      if (playerXTurn) {
        if (tileBox[i] == "") {
          tile.classList.remove("active2");
          tile.classList.add("active");
        } else {
          tile.classList.remove("active");
          tile.classList.remove("active2");
        }
      } else {
        if (tileBox[i] == "") {
          tile.classList.remove("active");
          tile.classList.add("active2");
        } else {
          tile.classList.remove("active");
          tile.classList.remove("active2");
        }
      }
    }
  });
  tile.addEventListener("click", () => {
    if (won == false) {
      if (playerXTurn) {
        tile.innerHTML = "X";
        playerXTurn = false;
        tile.classList.remove("active");
        tile.classList.remove("active2");
        tileBox[i] = "X";
      } else {
        tile.innerHTML = "O";
        playerXTurn = true;
        tile.classList.remove("active2");
        tile.classList.remove("active");
        tileBox[i] = "O";
      }
      playTurn();
    }
    checkWin();
  });
});

function checkWin() {
  for (let i = 0; i < winCondition.length; i++) {
    let a = tileBox[winCondition[i][0]];
    let b = tileBox[winCondition[i][1]];
    let c = tileBox[winCondition[i][2]];
    if (a == "" || b == "" || c == "") {
      continue;
    }
    if (a == b && b == c) {
      won = true;
      resultPrint();
      break;
    }
  }
  for (let i = 0; i < tileBox.length; i++) {
    if (!tileBox.includes("")) {
      resultDisplay.innerHTML = "Game Draw";
    }
  }
}

function resultPrint() {
  if (playerXTurn) {
    resultDisplay.innerHTML = "Play O Won";
    tileElement.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("active2");
    });
  } else {
    resultDisplay.innerHTML = "Play X Won";
    tileElement.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("active2");
    });
  }
}

function playTurn() {
  if (playerXTurn) {
    playerTurnElement.innerHTML = "Player X's Turn";
  } else {
    playerTurnElement.innerHTML = "Player O's Turn";
  }
}

resetElement.addEventListener("click", () => {
  tileBox = ["", "", "", "", "", "", "", "", ""];
  tileElement.forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("active");
    element.classList.remove("active2");
  });
  won = false;
  resultDisplay.innerHTML = "";
});
