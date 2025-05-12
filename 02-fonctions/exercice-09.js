//Exercice 09 : Fermeture (Closure)
//Crée une fonction compteur qui retourne une fonction interne incrémentant un nombre à chaque appel.

//Crée une fonction compteur qui retourne une fonction interne incrémentant un nombre à chaque appel.
const compteur = () => {
  let nombre = 0;
  return () => {
    nombre++;
    return nombre;
  };
};

const monCompteur = compteur(); 
console.log(monCompteur());
console.log(monCompteur()); 
console.log(monCompteur());