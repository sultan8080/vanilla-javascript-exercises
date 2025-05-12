// Exercice 02 : Ajouter une méthode à un objet

const personne = {
  nom: "Vanilla",
  age: 30,
  ville: "Paris",
  sePrsenter() {
    return `Bonjour, je suis ${this.nom}, j'habite à ${this.ville}, J'ai ${this.age} ans`;
  }
};

console.log(personne.sePrsenter());
