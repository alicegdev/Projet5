let espaceCitations = document.getElementById('espace-citations');

let cliquezPourCommencer = document.getElementById('cliquez_pour_commencer');

/**
 * écouteur d'événement du bouton "Cliquez pour commencer"
 */
cliquezPourCommencer.addEventListener('click', () => {
  afficher();
});

let proverbesConfuceens = new Generateur (["La sagesse du sage ", "La lueur des étoiles ", "La patience de la tortue ", "La fureur du tigre "], ["rend plus sage ", "transforme en colline ", "change en prince ", "sommeille dans "], ["même les plus fous.", "le plus vil des crapauds.", "la plus haute montagne.", "le doute le plus abyssal."]);
  
let burgerQuiz = new Generateur (["Qui est le plus vieux :  ", "Questionnaire de rapidité : ", "Qu'est-ce qui est le plus bruyant : ", "Qui est le plus fort en maths :  "], ["Yoda ou ", "Albator ou ", "vos voisins ou ", "une perceuse ou "], ["Louis XIV ? ", "Didier, le chien joué par Alain Chabat ? ", "la SNCF ? ", "Matt Pokora ? "]
  );


/**
 * affiche la boîte de dialogue, permet à l'utilisateur de choisir combien de citations il veut voir, ainsi que le générateur, puis affiche les citations dans le HTML
 */
function afficher(){
    espaceCitations.innerHTML="";
    let fois = prompt("Combien de citations ou de questions souhaitez-vous voir ?");
    let choix = prompt("Quelles citations souhaitez-vous lire ? Pour les faux proverbes confucéens, tapez 1. Pour les questions du Burger Quiz, tapez 2.");

    if (fois > 5) {
        alert('Veuillez entrer un nombre de fois égal ou inférieur à 5.');
    }
    else{
    
        for (let i = 0; i<fois; i++) {
            switch(choix) {
                case "1":
                espaceCitations.innerHTML += (proverbesConfuceens.combinaisons()) + '<br />';
                    break;

                case "2":
                espaceCitations.innerHTML += (burgerQuiz.combinaisons()) + "<br />";
                    break;
                
                default:
                    break;
        }
        espaceCitations.innerHTML += "<br />";
    }
    } 
} 


