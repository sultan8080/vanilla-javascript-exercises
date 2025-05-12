// Exercice 03 : Utiliser Object.create pour créer un objet hérité
const personne = {
  nom: "Vanilla",
  age: 30,
  ville: "Paris",
  sePrsenter() {
    return `Bonjour, je suis ${this.nom}, j'habite à ${this.ville}, J'ai ${this.age} ans`;
  }
};

const personne2 = Object.create(personne);
const personne3 = Object.create(personne);
personne2.nom = "amlokee"; personne2.age = 37; personne2.ville = "Wasington";
personne3.nom = "Nyla"; personne3.age = 40; personne3.ville = "Florida";

console.log(personne.sePrsenter());
console.log(personne2.sePrsenter());
console.log(personne3.sePrsenter());


