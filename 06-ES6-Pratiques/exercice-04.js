// Exercice 04 : Déstructuration

const fruits = ["pomme", "banane"];
const [fruit1, fruit2] = fruits;

const utilisateur = { nom: "Léa", pays: "France" };
const { nom, pays } = utilisateur;

console.log(fruit1, fruit2);
console.log(nom, pays);

console.log(utilisateur.nom);
console.log(fruits[0]);
