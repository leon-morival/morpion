/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // fichiers à la racine
    "./src/**/*.{html,js}", // fichiers dans le dossier "src" (ou autre dossier spécifique au projet)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
