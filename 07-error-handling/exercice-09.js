// Exercice 09 : Valider l'entrée utilisateur

function validEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateNomEmail(nom, email) {
  try {
    if (nom.trim() === "" || email.trim() === "") {
      console.log("Le champ ne peut pas être vide !");
    } else if (!validEmail(email)) {
      console.log("Email invalide");
    } else {
      console.log(`Bonjour ${nom}, votre email est ${email}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

validateNomEmail("Vanila", "vanila@example.com");
validateNomEmail("Vanila", "");
validateNomEmail("", "vanila@example.com");
validateNomEmail("Vanila", "vanilaexample.com");
