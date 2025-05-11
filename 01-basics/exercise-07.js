let personne = {
  nom: "Vanilla",
  age: 44,
  pays: "France"
};

console.log(personne.nom + " a " + personne.age + " ans et habite à " + personne.pays);


// Boucle for...in

for (const key in personne) {
console.log(key +" "+ personne[key]);
}

//Object.keys() + forEach()
Object.keys(personne).forEach(clé => {
  console.log(clé + " : " + personne[clé]);
});

//Object.entries() + forEach()
Object.entries(personne).forEach(([clé, valeur]) => {
  console.log(clé + " : " + valeur);
});


console.table(personne);

//Destructuration
let { nom, age, pays } = personne;
console.log(nom, age, pays);
