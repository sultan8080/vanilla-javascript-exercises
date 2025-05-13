// Exercice 04 : Utiliser async/await pour récupérer des données depuis une API

async function obtenirDonnees() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Erreur lors de la récupération des données :", error);
    }
}

obtenirDonnees();

