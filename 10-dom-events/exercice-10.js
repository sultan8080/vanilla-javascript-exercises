// Exercice 10 : Gérer un clic sur n’importe quel <li> d’une liste

document.getElementById("maListe").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    document.getElementById("message").textContent =
      "Vous avez cliqué sur : " + event.target.textContent;
  }
});
