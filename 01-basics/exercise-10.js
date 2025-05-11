// Exercice 10 : Afficher un message selon le jour de la semaine

let jour = "vendredi";

switch (jour) {
    case "lundi":
        console.log("Lundi : Début de la semaine.");
        break;
    case "mardi":
        console.log("Mardi : Deuxième jour de la semaine.");
        break;
    case "mercredi":
        console.log("Mercredi : Milieu de la semaine.");
        break;
    case "jeudi":
        console.log("Jeudi : Presque la fin.");
        break;
    case "vendredi":
        console.log("Vendredi : Dernier jour de travail.");
        break;
    case "samedi":
        console.log("Samedi : C'est le week-end !");
        break;
    case "dimanche":
        console.log("Dimanche : Repos bien mérité.");
        break;
    default:
        console.log("Jour non reconnu.");
        break;
}

console.log("Jour sélectionné :", jour);
