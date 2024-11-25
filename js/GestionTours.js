// Variables
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
let cellCount = 0;
const cells = document.querySelectorAll(".cell");
const displayScore1 = document.getElementById("player1");
const displayScore2 = document.getElementById("player2");
displayScore1.textContent = 0;
displayScore2.textContent = 0;

// Fonctions
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
      // Utiliser setTimeout pour retarder l'alerte et permettre le rendu
      setTimeout(() => {
        if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
          scorePlayer1 += 1;
          alert("Player 1 a gagné !");
        } else {
          scorePlayer2 += 1;
          alert("Player 2 a gagné !");
        }

        displayScore1.textContent = scorePlayer1;
        displayScore2.textContent = scorePlayer2;

        // Nettoyer le jeu après avoir annoncé le gagnant
        cleanGame();
      }, 100); // Retard de 100 ms

      return true;
    }
  }
  return false;
}

function cleanGame(reset = false) {
  if (reset == true) {
    displayScore1.textContent = 0;
    displayScore2.textContent = 0;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
  player1 = [];
  player2 = [];
  currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  cellCount = 0;
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(`Cellule cliquée : ${cell.id}, contenu : ${cell.innerHTML}`);

    if (cell.innerHTML === "") {
      console.log(
        `Placement du joueur ${currentPlayer} dans la cellule ${cell.id}`
      );

      if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
        player1.push(cell.id);
        cellCount += 1;
      } else {
        player2.push(cell.id);
        cellCount += 1;
      }

      cell.innerHTML = currentPlayer;

      setTimeout(() => {
        if (checkWin()) {
          return;
        }
        if (cellCount === 9) {
          alert("Égalité !");
          cleanGame();
        } else {
          switchPlayer();
        }
      }, 50);
    } else {
      console.log("Cellule déjà utilisée !");
    }
  });
});