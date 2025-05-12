// Exercice 06 : Paramètres restants
/*
"Paramètres restants" refers to "Rest Parameters" in JavaScript.
Rest parameters allow a function to accept an indefinite number of arguments and group them into an array using the ... (spread) syntax.
*/


//Crée une fonction somme qui accepte un nombre quelconque d’arguments et retourne leur somme.

function somme(...nombres) {
    return nombres.reduce((total, n) => total +n, 0);
}

const sommeArrow = (...nombres)=> nombres.reduce((total, nombre) => total +nombre, 0);

console.log(somme(2, 5, 8));
console.log(somme(10, 20, 30, 40));
console.log(somme());

console.log(sommeArrow(10, 20, 30, 40));
