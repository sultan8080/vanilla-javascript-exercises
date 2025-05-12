// Exercice 08 : Boucle sur les propriétés d’un objet

let voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2021
};

for (const key in voiture) {
 console.log(`${key} - ${voiture[key]}`);
}

