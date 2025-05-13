// Exercice 08 : Gérer les erreurs dans du code async

async function traitementAvecErreur() {
  throw new Error("Une erreur est survenue !");
}

traitementAvecErreur()
  .catch((err) => console.error("Erreur capturée :", err.message));
