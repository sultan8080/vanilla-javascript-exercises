function ajouterElement() {
  let nouvelElement = document.createElement("li");
  nouvelElement.textContent = "Nouvel élément ajouté !";
  document.getElementById("maListe").appendChild(nouvelElement);
}
