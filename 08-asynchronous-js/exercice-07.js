// Exercice 07 : Chaîner plusieurs promesses

function étape1() {
  return Promise.resolve("Étape 1 complétée");
}

function étape2(msg) {
  return Promise.resolve(`${msg}, puis Étape 2`);
}

étape1()
  .then(étape2)
  .then((résultat) => {
    console.log(résultat);
  });
