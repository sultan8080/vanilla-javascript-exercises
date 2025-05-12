// Crée un objet et utilise for...in pour afficher ses propriétés.

let personne = {
  nom: "Vanilla",
  age: 30,
  ville: "Paris"
};

for (const key in personne) {
console.log(key + " : " + personne[key]);
}