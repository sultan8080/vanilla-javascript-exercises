// Exercice 03 : Définir et appeler des méthodes dans une classe

class Voiture {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }

  afficherInfos() {
    console.log(`Voiture : ${this.marque} ${this.modele}, Année : ${this.annee}`);
  }
}

// Instanciation de deux objets Voiture
const voiture1 = new Voiture("Toyota", "Corolla", 2020);
const voiture2 = new Voiture("Renault", "Clio", 2018);

voiture1.afficherInfos();
voiture2.afficherInfos();
