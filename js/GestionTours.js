// Initialiser le joueur actuel avec l'icône "X" (utilisation de Font Awesome)
let currentPlayer = '<i class="fa-solid fa-x fa-xl"></i>';
let player1 = []; // Tableau pour les cases jouées par le joueur 1 (X)
let player2 = []; // Tableau pour les cases jouées par le joueur 2 (O)

// Fonction pour changer de joueur
function switchPlayer() {
  // Alterner entre "X" (croix) et "O" (cercle) en utilisant les icônes Font Awesome
  currentPlayer =
    currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>'
      ? '<i class="fa-solid fa-o fa-xl"></i>'
      : '<i class="fa-solid fa-x fa-xl"></i>'; // Alterne entre X et O
}

// Sélectionner toutes les cellules
const cells = document.querySelectorAll(".cell");

// Ajouter un écouteur de clic à chaque cellule
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Si la cellule est vide, on peut y jouer
    if (cell.innerHTML === "") {
      // Ajouter l'ID de la cellule dans le tableau du joueur actuel
      if (currentPlayer === '<i class="fa-solid fa-x fa-xl"></i>') {
        player1.push(cell.id);
        console.log("Joueur 1 (X) joue : " + player1);
      } else {
        player2.push(cell.id);
      }
      cell.innerHTML = currentPlayer;

      switchPlayer();
    } else {
      console.log("Cellule déjà utilisée !");
    }
  });
});
