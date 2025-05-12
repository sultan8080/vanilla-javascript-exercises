// Exercice 07 : Promesse qui se résout après un délai

const promesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Promesse tenue !");
    } else {
      reject("Promesse non tenue !");
    }
  }, 1000);
});

promesse
  .then((message) => console.log(message))
  .catch((error) => console.log( error));