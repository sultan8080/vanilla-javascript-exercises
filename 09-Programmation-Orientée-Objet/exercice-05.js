// Exercice 05 : Utiliser super pour appeler le constructeur parent

class AppareilElectronique {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }
  afficherInfos() {
    console.log(
      `Marque : ${this.marque}, Modele : ${this.modele}, Année : ${this.annee}`
    );
  }
}

class Ordinateur extends AppareilElectronique {
  constructor(marque, modele, annee, processeur, ram) {
    super(marque, modele, annee);
    this.processeur = processeur;
    this.ram = ram;
  }
  afficherInfos() {
    super.afficherInfos();
    console.log(`Processeur : ${this.processeur}, Ram : ${this.ram}`);
  }
}

class OrdinateurPortable extends Ordinateur {
  constructor(marque, modele, annee, processeur, ram, poids, autonomie) {
    super(marque, modele, annee, processeur, ram);
    this.poids = poids;
    this.autonomie = autonomie;
  }
  afficherInfos(){
    super.afficherInfos();
    console.log(`Poids : ${this.poids}, Autonomie : ${this.autonomie}`);
  }
}

const congélateur = new AppareilElectronique("Whirlpool", "FCDI", 2018);
const asus = new Ordinateur("Asus", "Zenbook", 2021, "Intel Core Ultra 7", "32 Go");
const macbook = new OrdinateurPortable("Apple", "MacBook Pro 16", 2024, "M2 Max", "32 Go", "2 kg", "18h");

congélateur.afficherInfos();
asus.afficherInfos();
macbook.afficherInfos();