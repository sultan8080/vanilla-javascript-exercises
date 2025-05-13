// Exercice 04 : Utiliser l’héritage pour créer une sous-classe

class Vehicule {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }

  afficherInfos() {
    console.log(`Véhicule : ${this.marque} ${this.modele}, Année : ${this.annee}`);
  }
}

// Sous-classe pour les camions
class Camion extends Vehicule {
  constructor(marque, modele, annee, capacite) {
    super(marque, modele, annee);
    this.capacite = capacite;
  }

  afficherInfos() {
    super.afficherInfos();
    console.log(`Capacité de charge : ${this.capacite} tonnes`);
  }
}

const voiture = new Vehicule("Peugeot", "208", 2022);
const camion = new Camion("Volvo", "FH16", 2021, 30);

voiture.afficherInfos();
camion.afficherInfos();
