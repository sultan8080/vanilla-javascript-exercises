class Voiture {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }
}
const voiture1 = new Voiture("Toyota", "Corolla", 2020);
const voiture2 = new Voiture("Renault", "Clio", 2018);


console.log(voiture1);
console.log(voiture2);