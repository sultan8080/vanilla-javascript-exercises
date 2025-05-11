//Exercice 07 : Fonction de haut niveau (Higher-Order Function)
//Crée une fonction appliquer qui prend une fonction f et une valeur x, et retourne f(x).
function appliquer(f, x) {
  return f(x);
}
function doubler(n) {
  return n * 2;
}
console.log(appliquer(doubler, 5)); // 10

//Autre exemple de fonction haut niveau (Higher-Order Function)

const appliquerOperation = (operation, a, b) => operation(a, b);
const addition = (x, y) => x + y;
const multiplication = (x, y) => x * y;
console.log(appliquerOperation(addition, 5, 3));       // Affiche: 8
console.log(appliquerOperation(multiplication, 5, 3)); // Affiche: 15


// appliquerOperation is a higher-order function because it takes another function (operation) as an argumen