// Exercice 02 : Créer une promesse qui résout ou rejette selon une condition
function verifierNombre(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`Succès ! ${num} est supérieur à 10.`);
        } else {
            reject(`Échec ! ${num} est trop petit.`);
        }
    });
}

// Utilisation de la promesse
verifierNombre(15)
    .then((message) => console.log(message)) 
    .catch((erreur) => console.log(erreur));  

verifierNombre(5)
    .then((message) => console.log(message))
    .catch((erreur) => console.log(erreur));
