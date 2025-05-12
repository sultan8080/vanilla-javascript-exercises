// Exercice 02 : Lancer une erreur personnalisée

function verifierNom(nom) {
  if (!nom) {
    throw new Error("Le nom ne peut pas être vide !");
  }
  return `Bonjour ${nom}`;
}

try {
  console.log(verifierNom(""));
} catch (e) {
  console.error(e.message);
}
