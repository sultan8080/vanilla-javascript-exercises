// Exercice 04 : Démonstration de Lancer des erreurs selon condition

function verifierAge(age) {
  if (age < 0) throw new Error("L'âge ne peut pas être négatif.");
  if (age < 18) throw new Error("Mineur non autorisé.");
  return "Accès autorisé";
}

try {
  console.log(verifierAge(16));
} catch (err) {
  console.error(err.message);
}
