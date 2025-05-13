// Exercice 06 : Illustration de la boucle d'événements

console.log("Début");
setTimeout(() => {
  console.log("Timeout exécuté");
}, 0);
Promise.resolve().then(() => {
  console.log("Promesse résolue");
});

console.log("Fin");
