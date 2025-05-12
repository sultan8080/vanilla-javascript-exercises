// Exercice 07 : Parcours d’un tableau d’objets

let personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 }
];

for (let personne of personnes) {
 console.log(`${personne.nom} a ${personne.age} ans`);
}