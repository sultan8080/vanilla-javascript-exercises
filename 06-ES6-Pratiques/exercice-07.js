// Exercice 07 : Promesse qui se résout après un délai
// Exercice 07 : Promesse qui se résout après un délai

const promesse = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesse tenue !");
  }, 1000);
});

promesse.then((message) => console.log(message));
