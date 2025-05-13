// Exercice 07 : Créer des getters et setters
//Créer une classe CompteBancaire qui permet de gérer un compte bancaire avec un solde sécurisé, en utilisant des getters et setters.

class CompteBancaire {
  constructor(nom, solde) {
    this.nom = nom;
    this._solde = solde;
    // On utilise _solde pour indiquer qu'il passe par le getter/setter
  }

  get solde() {
    return `${this._solde}€`;
  }
  set solde(montant) {
    if (montant >= 0) {
      this._solde = montant;
    } else{
        console.log("Le solde ne peut pas être négarif")
    }
  }
}
const compte1 = new CompteBancaire("Vanila", 500);

console.log(compte1.solde);
compte1.solde = 1000;
console.log(compte1._solde);
compte1.solde = -100;

