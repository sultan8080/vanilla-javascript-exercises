// Exercice 06 : Définir une méthode statique

class Calcul {
  static addition(a, b) {
    return a + b;
  }
}
console.log(Calcul.addition(3, 5));

/*
Une méthode statique est une méthode définie directement sur la classe et non sur ses instances. 
const calcul2 = new Calcul();
console.log(calcul2.addition(4,5));
Erreur ! Cette méthode ne peut être appelée sur une instance
*/