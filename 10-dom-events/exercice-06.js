// Exercice 06 : Changer le texte lorsqu'on survole une div
let maDiv = document.getElementById("maDiv");

maDiv.addEventListener("mouseover", () => {
  maDiv.textContent = "Tu es dessus !";
});

maDiv.addEventListener("mouseleave", () => {
  maDiv.textContent = "Survole-moi !";
});
