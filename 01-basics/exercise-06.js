// Exercice 06 : Afficher tous les éléments d'un tableau

let fruits = ["pomme", "banane", "orange", "mangue", "Citron"];

// Utilisation de la boucle FOR

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Utilisation de la méthode forEach()

fruits.forEach((value) => {
    console.log(value);
});

// Utilisation de la boucle for...of (avec la valeur)
for (let value of fruits) {
    console.log(value);
}


// Utilisation de la boucle for...in (avec l'index de tableau)
for (const key in fruits) {
console.log(fruits[key]);
}

// Utilisation de la méthode map()

fruits.map(value => {
    console.log(value);
})

// Utilisation de la boucle WHILE
let w = 0;
while (w < fruits.length) {
  console.log(fruits[w]);
  w++;
}

//Utilisation console.table()

console.table(fruits);