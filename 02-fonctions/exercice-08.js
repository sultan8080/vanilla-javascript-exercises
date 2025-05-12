//Exercice 08 : Récursivité
// Crée une fonction récursive factorielle qui calcule la factorielle d’un nombre.
// La factorielle de 0 et 1 est toujours 1

const factorielle = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorielle(n - 1); // Appel récursif
};

console.log(factorielle(5)); 
console.log(factorielle(0)); 
console.log(factorielle(7)); 

// affiche normalement 120, 1, 5040