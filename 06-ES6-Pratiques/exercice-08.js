// Exercice 08 : Utiliser async/await

// Création de la Promesse
const promesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5; // 50% de chance de succès ou d'échec
    if (success) {
      resolve("✅ Promesse tenue !");
    } else {
      reject("❌ Promesse non tenue !");
    }
  }, 1000);
});

// Fonction asynchrone pour gérer la Promesse
async function verifierPromesse() {
  try {
    const message = await promesse; // Attend le résultat de la Promesse
    console.log(message); 
  } catch (error) {
    console.log(error);
  }
}

verifierPromesse();

