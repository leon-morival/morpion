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
  
  const displayScore1 = document.getElementById("player1");
  const displayScore2 = document.getElementById("player2");
  displayScore1.textContent = 0;
  displayScore2.textContent = 0;
  
  // Change le joueur
  function switchPlayer() {
    currentPlayer =
      currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>'
        ? '<i class="fa-solid fa-o fa-xl"></i>'
        : '<i class="fa-solid fa-x fa-xl"></i>';
  }
  
  // Vérifie si un joueur a gagné
  function checkWin() {
    let currentPlayerMoves =
      currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>' ? player1 : player2;
  
    for (let solution of solutions) {
      if (solution.every((id) => currentPlayerMoves.includes(id.toString()))) {
        // Utiliser setTimeout pour permettre le rendu de la dernière forme
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
  
          cleanGame(); // Réinitialise la grille après la victoire
        }, 100); // Légère attente pour permettre le rendu
  
        return true;
      }
    }
    return false;
  }
  
  // Nettoyer la grille pour une nouvelle partie
  function cleanGame() {
    player1 = [];
    player2 = [];
    currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
    cells.forEach((cell) => {
      cell.innerHTML = ""; // Supprime le contenu HTML de chaque cellule
      cell.removeAttribute("forme"); // Supprime les attributs associés
    });
    cellCount = 0; // Réinitialise le compteur des coups joués
  }
  
  // Réinitialiser le jeu entier (scores et grille)
  function resetGame() {
    displayScore1.textContent = 0;
    displayScore2.textContent = 0;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    cleanGame();
  }
  
  let cellCount = 0;
  const cells = document.querySelectorAll(".cell");
  
  // Gestion des clics sur les cellules
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.innerHTML === "") {
        if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
          player1.push(cell.id);
          cellCount += 1;
        } else {
          player2.push(cell.id);
          cellCount += 1;
        }
  
        cell.innerHTML = currentPlayer; // Place la forme dans la cellule
  
        // Attendre que le rendu soit fait avant de vérifier la victoire
        setTimeout(() => {
          if (checkWin()) {
            return; // Arrête la logique si un joueur a gagné
          }
  
          if (cellCount === 9) {
            alert("Égalité !");
            cleanGame();
          } else {
            switchPlayer();
          }
        }, 50); // Légère attente pour le rendu
      } else {
        console.log("Cellule déjà utilisée !");
      }
    });
  });
  