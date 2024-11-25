# Morpion

Un simple jeu de Morpion développé avec HTML, CSS, et JavaScript, conçu pour être interactif et responsive.

## Fonctionnalités

- **Gameplay classique** : Deux joueurs peuvent jouer au Morpion en alternant les tours.
- **Suivi des scores** : Les scores des joueurs sont mis à jour après chaque manche.
- **Réinitialisation facile** : Une option permet de réinitialiser la partie en cours ou de démarrer une nouvelle partie.

## Installation et Lancement

Pour exécuter ce projet localement, suivez les étapes ci-dessous :

### Prérequis
- **Node.js** doit être installé sur votre machine.

### Étapes d'installation

1. Clonez le projet sur votre machine :
   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

3. Générez les fichiers CSS nécessaires :
   ```bash
   npm run build:css
   ```

4. Lancez un serveur local pour tester le projet :
   ```bash
   npx live-server ./
   ```

5. Ouvrez votre navigateur sur l'adresse fournie par `live-server`.

## Structure du Projet

- **index.html** : Le fichier principal contenant la structure HTML du jeu.
- **/css/output.css** : Le fichier CSS généré pour styliser l'interface utilisateur.
- **/js/GestionTours.js** : Contient la logique principale du jeu, incluant le changement de tours, la vérification des victoires, et la réinitialisation.
- **README.md** : Ce fichier de documentation.

## Utilisation

1. Lancez le serveur local et ouvrez le projet dans un navigateur.
2. Cliquez sur une cellule pour jouer votre coup.
3. Le jeu gère automatiquement les tours et annonce le gagnant ou une égalité.
4. Utilisez le bouton "Nouvelle Partie" pour recommencer.

## Aperçu

Une grille 3x3 intuitive, facile à manipuler, avec des indicateurs pour chaque joueur et un tableau de scores.

## Licence

Ce projet est sous licence [MIT](LICENSE).
