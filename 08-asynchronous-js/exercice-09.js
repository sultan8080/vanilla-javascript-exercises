// Exercice 09 : Utiliser fetch() pour récupérer des données

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((réponse) => réponse.json())
  .then((utilisateur) => console.log(utilisateur))
  .catch((err) => console.error("Erreur fetch :", err.message));
