// Exercice 09 : Tableau à deux dimensions
let matrice = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let i of matrice) {
    i.forEach(v => {
        console.log(v);
    });
}

for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    console.log(matrice[i][j]);
  }
}