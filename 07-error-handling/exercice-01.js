// Exercice 01 : Utiliser try-catch pour intercepter une erreur
/*
Challenge : Vérification d’un mot de passe
Objectif : Créer une fonction verifierMotDePasse(motDePasse) qui :
Vérifie si le mot de passe est valide (doit contenir au moins 8 caractères, au moins une majuscule, au moins un chiffre
Utilise try...catch pour gérer les erreurs si le mot de passe est trop court.
Retourne "Mot de passe valide" si la validation est réussie, sinon affiche un message d’erreur
*/
const verifierMotDePasse = (mdp) => {
  try {
    if (mdp.length < 8) {
      throw new Error("Le mot de passe doit contenir au moins 8 caractères !");
    }
    if (!/[A-Z]/.test(mdp)) {
      throw new Error("Le mot de passe doit contenir au moins une majuscule !");
    }
    if (!/[0-9]/.test(mdp)) {
      throw new Error("Le mot de passe doit contenir au moins un chiffre !");
    }
    console.log("Mot de passe valide !");
  } catch (error) {
    console.error(error.message);
  }
};


verifierMotDePasse("abc");   
verifierMotDePasse("abcdefgh");     
verifierMotDePasse("Abcdefgh");     
verifierMotDePasse("Abcdefg8");  
