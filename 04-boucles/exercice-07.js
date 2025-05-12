// Exercice 07 : Parcours d’un tableau d’objets

let personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
];

for (let personne of personnes) {
  console.log(`${personne.nom} a ${personne.age} ans`);
}

//different way
/*
for (let personne of personnes) { // Iterates over each object in the array
    console.log("Person Details:");
    
    for (let key in personne) { // Iterates over properties in the object
        console.log(`${key}: ${personne[key]}`);
    }
    
    console.log("\n"); // Adds a line break for readability
}
*/
