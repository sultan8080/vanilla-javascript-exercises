// Exercice 10 : Simuler une méthode abstraite

class Forme {
  dessiner() {
    throw new Error("Méthode abstraite non implémentée");
  }
}

class Cercle extends Forme {
  dessiner() {
    console.log("Dessin d’un cercle");
  }
}

const forme = new Cercle();
forme.dessiner();
