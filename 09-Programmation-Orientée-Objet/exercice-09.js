// Exercice 09 : Démonstration du polymorphisme

class Animal {
  parler() {
    console.log("L’animal fait un bruit.");
  }
}

class Chat extends Animal {
  parler() {
    console.log("Le chat miaule.");
  }
}

class Chien extends Animal {
  parler() {
    console.log("Le chien aboie.");
  }
}

const animaux = [new Animal(), new Chat(), new Chien()];
animaux.forEach(animal => animal.parler());
