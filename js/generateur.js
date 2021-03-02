/**
 * Représente un générateur de citations.
 * @constructor : les trois bouts de phrases qui seront mélangés
 * @method : cette fonction retourne une combinaison des trois bouts de phrase de manière aléatoire
 */

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
    let result = (randomPremierBoutDePhrase) + (randomDeuxiemeBoutDePhrase) + (randomTroisiemeBoutDePhrase);
    return result;
    
    }
}

