// Exercice 07 : Gérer une erreur dans une fonction async

async function fetchData() {
  try {
    let responseData = await fetch("https://api.......com/data");
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    let data = await response.json();
    console.log("Données récupérées :", data);
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
  }
}

fetchData();
