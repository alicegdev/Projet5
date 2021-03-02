let espaceCitations = document.getElementById('espace-citations');

let cliquezPourCommencer = document.getElementById('cliquez_pour_commencer');

let containerCitations = document.querySelector('.col-md-12');

let boutonContinuer = document.getElementById('continuer');

let boutonArrêter = document.getElementById('arrêter');

/**
 * écouteur d'événement du bouton "Cliquez pour commencer"
 */
cliquezPourCommencer.addEventListener('click', () => {
  afficher();
});

boutonContinuer.addEventListener('click', () => {
    afficher();
  });

boutonArrêter.addEventListener('click', () => {
    containerCitations.style.display ="none";
} )

let proverbesConfuceens = new Generateur (["La sagesse du sage ", "La lueur des étoiles ", "La patience de la tortue ", "La fureur du tigre "], ["rend plus sage ", "transforme en colline ", "change en prince ", "sommeille dans "], ["même les plus fous.", "le plus vil des crapauds.", "la plus haute montagne.", "le doute le plus abyssal."]);
  
let burgerQuiz = new Generateur (["Qui est le plus vieux :  ", "Questionnaire de rapidité : ", "Qu'est-ce qui est le plus bruyant : ", "Qui est le plus fort en maths :  "], ["Yoda ou ", "Albator ou ", "vos voisins ou ", "une perceuse ou "], ["Louis XIV ? ", "Didier, le chien joué par Alain Chabat ? ", "la SNCF ? ", "Matt Pokora ? "]
  );


/**
 * affiche la boîte de dialogue, permet à l'utilisateur de choisir combien de citations il veut voir, ainsi que le générateur, puis affiche les citations dans le HTML
 */


 function afficher(){
    espaceCitations.innerHTML="";
    var fois = prompt("Combien de citations ou de questions souhaitez-vous voir ?");
    if (parseInt(fois) > 5) {
        alert('Veuillez entrer un nombre de fois égal ou inférieur à 5.');
    }
    else{
        let choix = prompt("Quelles citations souhaitez-vous lire ? Pour les faux proverbes confucéens, tapez 1. Pour les questions du Burger Quiz, tapez 2.");
            switch(parseInt(choix)) {
                case 1:
                    function ecrireDansLEspaceCitations(Generateur){
                        /**
                        * fait apparaître un encadré blanc, écrit les citations dedans, et fait apparaître des boutons qui permettent à l'utilisateur d'arrêter ou de continuer
                        */
                        for (let i = 0; i < fois; i++) {
                        containerCitations.style.display = "block";
                        containerCitations.style.marginLeft = "3rem";
                        boutonContinuer.style.margin = "auto";
                        boutonContinuer.style.marginTop = "1rem";
                        boutonArrêter.style.marginTop = "1rem";
                        espaceCitations.innerHTML += (Generateur.combinaisons()) + '<br />';
                        espaceCitations.innerHTML += "<br />";
                        }
                    }
                    ecrireDansLEspaceCitations(proverbesConfuceens);
                    break;

                case 2:
                    ecrireDansLEspaceCitations(burgerQuiz);
                    break;
                
                default:
                    alert("Veuillez entrer un choix valide.");
                    break;
            }
        
    }
} 
 

