// Créer les tableaux avec des bouts de phrases et les stocker dans une constante chacun

let proverbesConfuceens = {
  'premierBoutDePhrase' : ["La sagesse du sage ", "La lueur des étoiles ", "La patience de la tortue ", "La fureur du tigre "],
  'deuxiemeBoutDePhrase' : ["rend plus sage ", "transforme en colline ", "change en prince ", "sommeille dans "],
  'troisiemeBoutDePhrase' : ["même les plus fous.", "le plus vil des crapeaux.", "la plus haute montagne.", "le doute le plus abyssal."]
} 

let burgerQuiz = {
  'premierBoutDePhrase' : ["Qui est le plus vieux :  ", "Questionnaire de rapidité : ", "Qu'est-ce qui est le plus bruyant : ", "Qui est le plus fort en maths :  "],
  'deuxiemeBoutDePhrase' : ["Yoda ou ", "Albator ou ", "vos voisins ou ", "une perceuse ou "],
  'troisiemeBoutDePhrase' : ["Louis XIV ? ", "Didier, le chien joué par Alain Chabat ?", "la SNCF ?", "Matt Pokora ?"]
} 

// Créer les combinaisons de phrases sous forme de fonction

function combinaisons(tableauA) {
  var randomPremierBoutDePhrase = tableauA.premierBoutDePhrase[Math.floor(Math.random() * tableauA.premierBoutDePhrase.length)];
  var randomDeuxiemeBoutDePhrase= tableauA.deuxiemeBoutDePhrase[Math.floor(Math.random() * tableauA.deuxiemeBoutDePhrase.length)];
  var randomTroisiemeBoutDePhrase = tableauA.troisiemeBoutDePhrase[Math.floor(Math.random() * tableauA.troisiemeBoutDePhrase.length)];
  return randomPremierBoutDePhrase + randomDeuxiemeBoutDePhrase + randomTroisiemeBoutDePhrase;
}

// Créer l'interface utilisateur


function nombreDeFoisProverbesConfuceens(){
  var fois = prompt("Combien de citations ou de questions souhaitez-vous voir ?");
  for(let i = 0; i<fois; i++) {
  alert(combinaisons(proverbesConfuceens));
 }
 var nombreDeFoisDeux = prompt("Souhaitez-vous voir d'autres citations ? Si oui, entrez le nombre de citations que vous souhaitez voir. Si non, cliquez sur Annuler.");
 for(let i = 0; i<nombreDeFoisDeux; i++) {
  alert(combinaisons(proverbesConfuceens));
 }
}

function nombreDeFoisBurgerQuiz(){
  fois = prompt("Combien de citations ou de questions souhaitez-vous voir ?");
  for(let i= 0; i<fois; i++) {
    alert(combinaisons(burgerQuiz));
  }
  nombreDeFoisDeux = prompt("Souhaitez-vous voir d'autres citations ? Si oui, entrez le nombre de citations que vous souhaitez voir. Si non, cliquez sur Annuler.");
  for(let i = 0; i<nombreDeFoisDeux; i++) {
    alert(combinaisons(burgerQuiz));
   }

}

burger_quiz.addEventListener('click', nombreDeFoisBurgerQuiz);

proverbes_confuceens.addEventListener('click', nombreDeFoisProverbesConfuceens);

/*Mes fonctions fonctionnent, plus qu'à les factoriser un peu mieux mais je vois pas comment o_O
La répétition du programme est à revoir

*/