//  numero random da 1 a 6 per il giocatore
const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("Il giocatore ha tirato: " + dadoGiocatore);

// numero random da 1 a 6 per il computer
const dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log("Il computer ha tirato: " + dadoComputer);

// il vincitore è:
if (dadoGiocatore > dadoComputer) {
    console.log("Hai vinto tu!");
} else if (dadoGiocatore < dadoComputer) {
    console.log("Ha vinto il computer!");
} else {
    console.log("No way, un pareggio!");
}