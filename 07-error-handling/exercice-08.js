// Exercice 08 : Utiliser finally pour exécuter du code final

function testFinally() {
    try {
        console.log("Début du bloc try");
        throw new Error("Une erreur est survenue !");
    } catch (error) {
        console.log("Bloc catch : " + error.message);
    } finally {
        console.log("Bloc finally : Ce code sera toujours exécuté.");
    }
}

/*
Le bloc try exécute du code et génère une erreur.
Le bloc catch intercepte l'erreur et affiche un message.
Le bloc finally s'exécute dans tous les cas, garantissant que son contenu est toujours pris en compte.*/

testFinally();
