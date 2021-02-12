var espaceCitations = document.getElementById('espace-citations');
class Generateur {
    constructor(premierBoutDePhrase, deuxiemeBoutDePhrase, troisiemeBoutDePhrase) {
        this.premierBoutDePhrase = premierBoutDePhrase;
        this.deuxiemeBoutDePhrase = deuxiemeBoutDePhrase;
        this.troisiemeBoutDePhrase = troisiemeBoutDePhrase;
    }
    combinaisons(){
    let randomPremierBoutDePhrase = this.premierBoutDePhrase[Math.floor(Math.random() * this.premierBoutDePhrase.length)];
    let randomDeuxiemeBoutDePhrase= this.deuxiemeBoutDePhrase[Math.floor(Math.random() * this.deuxiemeBoutDePhrase.length)];
    let randomTroisiemeBoutDePhrase = this.troisiemeBoutDePhrase[Math.floor(Math.random() * this.troisiemeBoutDePhrase.length)];
    return espaceCitations.innerHTML = (randomPremierBoutDePhrase) + (randomDeuxiemeBoutDePhrase) + (randomTroisiemeBoutDePhrase);
    
    }
}

let proverbesConfuceens = new Generateur (["La sagesse du sage ", "La lueur des étoiles ", "La patience de la tortue ", "La fureur du tigre "], ["rend plus sage ", "transforme en colline ", "change en prince ", "sommeille dans "], ["même les plus fous.", "le plus vil des crapauds.", "la plus haute montagne.", "le doute le plus abyssal."]);
  
let burgerQuiz = new Generateur (["Qui est le plus vieux :  ", "Questionnaire de rapidité : ", "Qu'est-ce qui est le plus bruyant : ", "Qui est le plus fort en maths :  "], ["Yoda ou ", "Albator ou ", "vos voisins ou ", "une perceuse ou "], ["Louis XIV ? ", "Didier, le chien joué par Alain Chabat ? ", "la SNCF ? ", "Matt Pokora ? "]
  );

function afficher(){
    let fois = prompt("Combien de citations ou de questions souhaitez-vous voir ?");
    let choix = prompt("Quelles citations souhaitez-vous lire ? Pour les faux proverbes confucéens, tapez 1. Pour les questions du Burger Quiz, tapez 2.");
    for (let i = 0; i<fois; i++) {
        switch(choix) {
            case "1":
            espaceCitations.innerHTML += '</br></br>' + (proverbesConfuceens.combinaisons());
                break;

            case "2":
            espaceCitations.innerHTML += '</br></br>' + (burgerQuiz.combinaisons());
                break;

            default:
                alert('Veuillez entrer un choix valide');
    }
}

}

