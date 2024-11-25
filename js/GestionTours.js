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

// Initialisation : le joueur actuel commence avec "X"
let currentPlayer = "X";

// Fonction pour changer de joueur avec popup
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterne entre X et O

    // Crée dynamiquement une popup
    const popup = document.createElement("div");
    popup.textContent = `Changement de joueur !`;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.color = "white";
    popup.style.fontSize = "18px";
    popup.style.borderRadius = "10px";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";
    popup.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";

    // Ajoute la popup au corps du document
    document.body.appendChild(popup);

    // Supprime la popup après 1s
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 1000);

    console.log(`Changement de joueur : ${currentPlayer}`); // Log dans la console
}
// Sélectionner toutes les cellules
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
function changeImg(id)
{
    forme=document.getElementById(id).getAttribute("forme");
    circle="fa-regular fa-circle";
    cross="fa-solid fa-x";

    if(forme==""){
        if(currentPlayer=="O"){
            document.getElementById(id).className=circle;
            document.getElementById(id).setAttribute("forme", "circle");
        }else{
            document.getElementById(id).className=cross;
            document.getElementById(id).setAttribute("forme","cross");
        }
        switchPlayer()
    }
}
