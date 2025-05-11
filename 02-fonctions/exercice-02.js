//Exercice 02 : Paramètres et retour
// Crée une fonction addition qui prend deux nombres en paramètres et retourne leur somme.

function addition(x, y) {
  const somme = x + y;
  return somme;
}

console.log(addition(10, 20));

//arrow funciton;

const addition2 = (x, y) => {
  return x + y;
};

console.log(addition2(50, 20));