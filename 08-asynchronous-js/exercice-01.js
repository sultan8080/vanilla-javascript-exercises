// Exercice 01 : Utiliser une fonction de rappel (callback)
/*
Une fonction de rappel (callback) est une fonction passée en argument à une autre fonction, qui l'exécute à un moment donné.
Cela permet d'exécuter du code de manière asynchrone ou de personnaliser le comportement d'une fonction.
*/

// premier exemple
function greeting(nom, callbackFunction) {
  console.log(`Bonjour, ${nom}, `);
  callbackFunction();
}
function sayGoodbye() {
  console.log("Au revoir, Bonne journée !");
}
greeting("Vanila", sayGoodbye);

// deuxième exemple

function traitementAsync(callback) {
  console.log("Traitement en cours...");
  setTimeout(() => {
    callback("Traitement terminé !");
  }, 1000);
}

traitementAsync((message) => {
  console.log(message);
});