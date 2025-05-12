// Exercice 06 : Objet imbriqué
// Crée un objet contenant un autre objet, et accède aux propriétés internes.

let utilisateur = {
  nom: "Vanila",
  adresse: {
    rue: "10 rue Victor Hugo",
    ville: "paris"
  }
};

console.log("L'adresse est : "+ utilisateur.adresse.rue+", "+ utilisateur.adresse.ville);