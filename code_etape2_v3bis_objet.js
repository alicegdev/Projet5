// Créer les objets

class Generateur {
    constructor(premierBoutDePhrase, deuxiemeBoutDePhrase, troisiemeBoutDePhrase) {
        this.premierBoutDePhrase = premierBoutDePhrase;
        this.deuxiemeBoutDePhrase = deuxiemeBoutDePhrase;
        this.troisiemeBoutDePhrase = troisiemeBoutDePhrase;
    }
}

let proverbesConfuceens = new Generateur (["La sagesse du sage ", "La lueur des étoiles ", "La patience de la tortue ", "La fureur du tigre "], ["rend plus sage ", "transforme en colline ", "change en prince ", "sommeille dans "], ["même les plus fous.", "le plus vil des crapeaux.", "la plus haute montagne.", "le doute le plus abyssal."]);
  
let burgerQuiz = new Generateur (["Qui est le plus vieux :  ", "Questionnaire de rapidité : ", "Qu'est-ce qui est le plus bruyant : ", "Qui est le plus fort en maths :  "], ["Yoda ou ", "Albator ou ", "vos voisins ou ", "une perceuse ou "], ["Louis XIV ? ", "Didier, le chien joué par Alain Chabat ?", "la SNCF ?", "Matt Pokora ?"]
  );
  
  function combinaisons(Generateur) {
    var randomPremierBoutDePhrase = Generateur.premierBoutDePhrase[Math.floor(Math.random() * Generateur.premierBoutDePhrase.length)];
    var randomDeuxiemeBoutDePhrase= Generateur.deuxiemeBoutDePhrase[Math.floor(Math.random() * Generateur.deuxiemeBoutDePhrase.length)];
    var randomTroisiemeBoutDePhrase = Generateur.troisiemeBoutDePhrase[Math.floor(Math.random() * Generateur.troisiemeBoutDePhrase.length)];
    return randomPremierBoutDePhrase + randomDeuxiemeBoutDePhrase + randomTroisiemeBoutDePhrase;
  }
  // Créer les combinaisons de phrases sous forme de fonction
  
  function commencer() {
      let fois = prompt("Combien de citations ou de questions souhaitez-vous voir ?");
      var choix = prompt("Quelles citations souhaitez-vous lire ? Pour les faux proverbes confucéens, tapez 1. Pour les questions du Burger Quiz, tapez 2.");
      for (let i = 0; i<fois; i++) {
          switch(choix) {
              case "1":
                  alert(combinaisons(proverbesConfuceens));
                  break;
  
              case "2":
                  alert(combinaisons(burgerQuiz));
                  break;
  
              default:
                  alert('Veuillez entrer un choix valide');
          }
      }
  }
  
  function demandeRepetitions() {
      let onRepart = confirm("Souhaitez-vous voir d'autres citations ? Si oui, cliquez sur OK. Si non, cliquez sur Annuler.");
      if (onRepart =true) {
          commencer();
      } else {
          return;
       //Redemander une fois à la fin avec une récursivité ?
      }
  }
  
  // Créer la première boîte de dialogue
  
  commencer();
  demandeRepetitions();
  