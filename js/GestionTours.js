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
