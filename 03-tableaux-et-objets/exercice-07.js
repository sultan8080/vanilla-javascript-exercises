// Crée un tableau de plusieurs objets et affiche une propriété de chaque.
let utilisateurs = [
  { nom: "Claire", age: 28 },
  { nom: "David", age: 35 },
  { nom: "Eva", age: 22 },
];

utilisateurs.forEach(user => {
    console.log ("L'age de "+user.nom +" est : "+ user.age);
})

// duexième methode
for (let i = 0; i < utilisateurs.length; i++) {
  for (const key in utilisateurs[i]) {
    console.log(`${key}: ${utilisateurs[i][key]}`);
  }
}
