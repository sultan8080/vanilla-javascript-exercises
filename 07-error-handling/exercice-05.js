// Exercice 05 : Afficher la stack trace d'une erreur

try {
  throw new Error("Une erreur est survenue !");
} catch (err) {
  console.error("Message :", err.message);
  console.error("Stack :", err.stack);
}
