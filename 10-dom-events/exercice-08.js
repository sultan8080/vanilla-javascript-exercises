// Exercice 08 : Mettre à jour dynamiquement un compteur

let compteur = 0;
function incrementer() {
  compteur++;
  document.getElementById("compteur").textContent = compteur;
}
