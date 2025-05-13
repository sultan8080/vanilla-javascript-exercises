// Exercice 08 : Masquer des propriétés privées avec des closures

function CompteBancaire(soldeInitial) {
  // Déclaration d'une variable privée `solde`, qui sera protégée par la closure
  let solde = soldeInitial;

// La closure commence ici : les fonctions internes conservent l'accès à `solde`
// Retourne un objet contenant trois méthodes pour gérer le compte bancaire
  return {
    // Méthode `deposer`, `retirer`, `afficherSold` avec Fonction fléchée
    deposer: (montant) => solde += montant,
    retirer: (montant) => solde -= montant,
    afficherSolde: () => console.log(`Solde : ${solde} €`)
  };
}

const compte = CompteBancaire(100);
compte.deposer(50);
compte.afficherSolde();
