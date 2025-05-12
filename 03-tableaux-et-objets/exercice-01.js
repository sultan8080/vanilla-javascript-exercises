// Utilise une boucle for pour afficher chaque élément d’un tableau.

let fruits = ["pomme", "banane", "orange", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// using while
let k = 0;
while (k<fruits.length) {
  console.log(fruits[k]);
  k++
}

//using forEeach
fruits.forEach(value => {
    console.log(value);
});