// Exercice 04 : Utilisation de break et continue
/*
Tu dois trouver tous les nombres impairs entre 1 et 20. Mais si tu rencontres le nombre 15,
tu dois arrêter la boucle complètement.
*/

for (let i = 1; i <= 20; i++) {
  if (i === 15) break;
  if (i % 2 != 0) continue;

  console.log(i);
}
