// Exercice 07 : Afficher la valeur d’un champ après clic

function afficherValeur() {
  let valeur = document.getElementById("champTexte").value;
  document.getElementById("affichage").textContent =
    "Vous avez écrit : " + valeur;
}
