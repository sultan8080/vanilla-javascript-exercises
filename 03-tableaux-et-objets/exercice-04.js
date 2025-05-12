//Utilise find() pour trouver le premier nombre pair dans un tableau.
let nombres = [1, 7, 9, 4, 11];

let premierPair = nombres.find(n =>    n%2 === 0 );

console.log(premierPair);

// Afficher tous les pairs et umpairs numéro d'un tableau
let nombres2 = [1, 7, 9, 4, 11, 6, 15, 2, 44, 65, 50];

let pairs = nombres2.filter(n => n % 2 === 0);
let impairs = nombres2.filter(n => n % 2 !== 0);

console.log("Nombres pairs:", pairs);
console.log("Nombres impairs:", impairs);
