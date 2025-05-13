// Exercice 10 : Combiner async/await et try-catch

async function chargerUtilisateur() {
  try {
    const réponse = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const données = await réponse.json();
    console.log("Utilisateur :", données);
  } catch (err) {
    console.error("Erreur attrapée :", err.message);
  }
}

chargerUtilisateur();
