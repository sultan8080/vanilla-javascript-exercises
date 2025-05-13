// Exercice 01 : Créer une classe et instancier un objet

class Animal {
  constructor(nom) {
    this.nom = nom;
  }
}

const chien = new Animal("Rex");
console.log(chien.nom);
