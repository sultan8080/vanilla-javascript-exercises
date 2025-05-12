// Exercice 05 : Paramètres par défaut

function saluer(nom = "visiteur") {
  console.log(`Bonjour, ${nom} !`);
}

saluer("Luc");
saluer();
