// Exercice 10 : Compter les occurrences d’une valeur dans un tableau
let couleurs = ["rouge", "bleu", "rouge", "vert", "rouge", "jeune", "vert", "rouge", "vert"];

let compteurRouge = 0;
let compteurVert = 0;

for (let couleur of couleurs) {
  if (couleur === "rouge") compteurRouge++;
  if (couleur ==="vert") compteurVert++;
}

console.log("Occurrences de 'rouge' :", compteurRouge);
console.log("Occurrences de 'vert' :", compteurVert);