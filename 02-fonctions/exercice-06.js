

//Crée une fonction somme qui accepte un nombre quelconque d’arguments et retourne leur somme.

function somme(...nombres) {
    return nombres.reduce((total, n) => total +n, 0);
}

const sommeArrow = (...nombres)=> nombres.reduce((total, nombre) => total +nombre, 0);

console.log(somme(2, 5, 8));
console.log(somme(10, 20, 30, 40));
console.log(somme());

console.log(sommeArrow(10, 20, 30, 40));
