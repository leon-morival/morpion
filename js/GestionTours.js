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
function switchPlayer() {
  currentPlayer =
    currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>'
      ? '<i class="fa-solid fa-o fa-xl"></i>'
      : '<i class="fa-solid fa-x fa-xl"></i>';
}

function checkWin() {
  let currentPlayerMoves =
    currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>' ? player1 : player2;

  for (let solution of solutions) {
    if (solution.every((id) => currentPlayerMoves.includes(id.toString()))) {
      console.log(
        currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>'
          ? "Player 1 wins!"
          : "Player 2 wins!"
      );
      alert(
        currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>'
          ? "Player 1 wins!"
          : "Player 2 wins!"
      );
      resetGame();
      return true;
    }
  }
  return false;
}

function resetGame() {
  player1 = [];
  player2 = [];
  currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
      if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
        player1.push(cell.id);
      } else {
        player2.push(cell.id);
      }
      cell.innerHTML = currentPlayer;

      if (!checkWin()) {
        switchPlayer();
      }
    } else {
      console.log("Cellule déjà utilisée !");
    }
  });
});
