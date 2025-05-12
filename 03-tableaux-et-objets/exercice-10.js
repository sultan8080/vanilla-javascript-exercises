//Trie un tableau de nombres dans l’ordre croissant ou decroissant

let nombres = [9, 3, 7, 1, 5];

let croissantNombre = nombres.slice().sort((a,b) => a-b);
let decroissantNombre = nombres.slice().sort((a,b) => b-a);

// The .slice() method in JavaScript creates a copy of part of an array without modifying the original array.
//The ...nombres syntax is called the spread operator (...). It is used to expand the elements of an array into a new structure.
// ...nombres, comy the orignal array nombres

let croissantNombre1 = [...nombres].sort((a,b) => a-b);
let decroissantNombre1 = [...nombres].sort((a,b) => b-a);

console.log(croissantNombre);
console.log(decroissantNombre);

console.log(croissantNombre1);
console.log(decroissantNombre1);