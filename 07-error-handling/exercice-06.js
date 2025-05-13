// Exercice 06 : Gérer une erreur dans une promesse

new Promise((resolve, reject) => {
  reject(new Error("Erreur dans la promesse"));
})
  .then(() => {
    console.log("Succès");
  })
  .catch((err) => {
    console.error("Erreur capturée :", err.message);
  });