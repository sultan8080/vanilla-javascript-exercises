// Exercice 10 : Gestion globale d’erreurs (dans Node.js)

process.on("uncaughtException", (err) => {
  console.error("Erreur globale non interceptée :", err.message);
});

// Déclenche une erreur non interceptée
nonExistant(); // Fonction qui n’existe pas
