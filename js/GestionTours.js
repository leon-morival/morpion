const solutions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
let player1 = [];
let player2 = [];
let scorePlayer1 = 0;
let scorePlayer2 = 0;
function switchPlayer() {
  currentPlayer =
    currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>'
      ? '<i class="fa-solid fa-o fa-xl"></i>'
      : '<i class="fa-solid fa-x fa-xl"></i>';
}
const displayScore1 = document.getElementById("player1");
const displayScore2 = document.getElementById("player2");
displayScore1.textContent = 0;
displayScore2.textContent = 0;
// Check Win
function checkWin() {
  let currentPlayerMoves =
    currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>' ? player1 : player2;

  for (let solution of solutions) {
    if (solution.every((id) => currentPlayerMoves.includes(id.toString()))) {
      if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
        scorePlayer1 += 1;
        alert("player 1 à gagné");
        cleanGame();
      } else {
        scorePlayer2 += 1;
        alert("Player 2 à gagné");
        cleanGame();
      }
      displayScore1.textContent = scorePlayer1;
      displayScore2.textContent = scorePlayer2;
      return true;
    }
  }
  return false;
}
const cells = document.querySelectorAll(".cell");
// CleanGame
function cleanGame() {
  player1 = [];
  player2 = [];
  currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}
// ResetGame
function resetGame() {
  displayScore1.textContent = 0;
  displayScore2.textContent = 0;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  player1 = [];
  player2 = [];
  currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}
let cellCount = 0;
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
      if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
        player1.push(cell.id);
        cellCount += 1;
      } else {
        cellCount += 1;
        player2.push(cell.id);
      }
      cell.innerHTML = currentPlayer;
      if (cellCount == 9) {
        alert("Egalité");
        cleanGame();
      }
      if (!checkWin()) {
        switchPlayer();
      }
    } else {
      console.log("Cellule déjà utilisée !");
    }
  });
});
