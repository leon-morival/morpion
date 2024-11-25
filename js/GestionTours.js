// Ce code prend en compte qu'on 
let currentPlayer = "X";

// Fonction pour changer de joueur
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterne entre X et O
    console.log(`Changement de joueur : ${currentPlayer}`); // Log dans la console
}

// Sélectionner toutes les cellules
const cells = document.querySelectorAll(".cell");

// Ajouter un écouteur de clic à chaque cellule
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        // Si la cellule est vide, on peut y jouer
        if (cell.textContent === "") {
            cell.textContent = currentPlayer; // Place le symbole du joueur actuel
            switchPlayer(); // Change de joueur après un tour
        } else {
            console.log("Cellule déjà utilisée !");
        }
    });
});
