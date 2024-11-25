function resetGame() {
    for (let cellNumber = 1; cellNumber <= 9; cellNumber++) {
        const cell = document.getElementById(`divImg${cellNumber}`);
        cell.className = ""; // Supprime les icônes
        cell.setAttribute("forme", ""); // Supprime les formes
    }
    currentPlayer = "X";
}