// Exercice 09 : Classe avec constructeur et méthode

class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    afficherDetails (){
            console.log(`Marque : ${this.marque}, Modèle : ${this.modele}, Année : ${this.annee}`);
    }
}

const maVoiture = new Voiture("HONDA", "CIVIC", 2001);

maVoiture.afficherDetails();