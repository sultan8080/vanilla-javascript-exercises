// Exercice 05 : Ajouter un événement clic sur un bouton
document.getElementById("monBouton").addEventListener("click",  () => {
  document.getElementById("message").textContent = "Bouton cliqué !";
});


const afficheNom = () => {
document.getElementById("nom").textContent = "Je suis VANILA";
}