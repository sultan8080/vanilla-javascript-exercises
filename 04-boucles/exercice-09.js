// Exercice 09 : Somme des éléments d’un tableau

let notes = [12, 15, 13, 18, 55, 30];

// with reduce methode
let somme = notes.reduce((acc, val) => acc+val, 0);

// For loop
let totale = 0;
for (let i = 0; i < notes.length; i++){ 
    totale += notes[i];    
}
// for .. of
let resultatSomme = 0;
for (const value of notes) {
   resultatSomme += value;
}

console.log("Methode Reduce somme : "+somme);
console.log("Loop for totale : "+totale);
console.log("Loop for...of : "+resultatSomme);