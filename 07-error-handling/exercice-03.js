/*
Challenge : Gérer différentes erreurs en JavaScript
Objectif : Créer une fonction calculer(x) qui calcule la racine carrée d'un nombre, tout en vérifiant plusieurs conditions :
 1. Le type du paramètre (x doit être un nombre). 2. La valeur du paramètre (x doit être positif).
 3. Une limite supérieure (x ne doit pas être trop grand (> 10,000)).
 */

function calculer(x) {
  try {
    // Vérification du type (x doit être un nombre)
    if (typeof x !== "number") {
      throw new TypeError("Erreur : Ce n'est pas un nombre !");
    }

    // Vérification de la plage (x doit être positif)
    if (x < 0) {
      throw new RangeError("Erreur : Le nombre doit être positif !");
    }

    // Vérification de la limite supérieure (x ne doit pas être trop grand)
    if (x > 10000) {
      throw new Error("Erreur : Le nombre est trop grand (max : 10,000) !");
    }

    // Si toutes les vérifications passent, retourner la racine carrée
    return Math.sqrt(x);
  } catch (err) {
    console.error(`${err.name} - ${err.message}`);
    return null;
  }
}

// Tests
console.log(calculer("texte"));
console.log(calculer(-5));
console.log(calculer(15000));
console.log(calculer(100));