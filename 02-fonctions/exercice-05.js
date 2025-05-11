//Crée une fonction saluer qui prend un nom en paramètre et utilise "invité" comme valeur par défaut.

function saluer(nom = "invité") {
    return `Bonjour, ${nom} !`;
}
console.log(saluer("Vanila")); 
console.log(saluer());
