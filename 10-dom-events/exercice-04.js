function supprimerPremier() {
  let liste = document.getElementById("maListe");
  if (liste.children.length > 0) {
    liste.removeChild(liste.children[0]);
  }
}

/*
function supprimerPremier() {
  const premierLi = document.querySelector("li");
  premierLi.remove();
}
*/