// Exercice 08 : Empêcher la modification d’un objet

const config = {
  theme: "clair"
};

Object.freeze(config);

config.theme = "sombre"; 

console.log(config);
