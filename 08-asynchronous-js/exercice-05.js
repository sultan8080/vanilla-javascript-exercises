// Exercice 05 : Utiliser setTimeout et setInterval

let count = 0;

const intervalle = setInterval(() => {
  count++;
  console.log("Compteur :", count);
}, 1000);

setTimeout(() => {
  clearInterval(intervalle);
  console.log("Le compteur est arrêté.");
}, 5000);

//Making a watch

let heures = 0;
let minutes = 0;
let secondes = 0;

function mettreAJourHorlogeManuelle() {
  secondes++;

  if (secondes === 60) {
    secondes = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    heures++;
  }
  if (heures === 24) {
    heures = 0;
  }

  console.log(`${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`);
}

// Démarrer l'horloge
const intervalleHorloge = setInterval(mettreAJourHorlogeManuelle, 1000);

// Optionnel : Arrêter l'horloge après un certain temps
setTimeout(() => {
  clearInterval(intervalleHorloge);
  console.log("L'horloge est arrêtée.");
}, 60000); // S'arrête après 1 minute

