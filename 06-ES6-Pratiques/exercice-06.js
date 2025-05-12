// Exercice 06 : Opérateurs rest et spread

//Rest Operator (...nombres)

const somme = (...nombres) => {
  return nombres.reduce((acc, val) => acc + val, 0);
};

console.log(somme(1, 2, 3));

// Spread Operator (...obj1)

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2);
