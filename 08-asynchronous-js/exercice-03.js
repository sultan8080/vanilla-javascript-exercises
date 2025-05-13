// Exercice 03 : Utiliser Promise.all pour gérer plusieurs promesses

const promesse1 = Promise.resolve("Résultat 1");
const promesse2 = Promise.resolve("Résultat 2");

Promise.all([promesse1, promesse2])
  .then((résultats) => {
    console.log("Tous les résultats :", résultats);
  });
