// la lista degli invitati (Array)
const listaInvitati = ["gianluca@gmail.com", "ermenegildo@libero.it", "tizio@outlook.it", "caio@gmail.com", "mi-consenta@gmail.com"];

// l'email all'utente
const emailUtente = prompt("Inserisci la tua email per accedere alla festa:");


//  cicla ogni singolo elemento

let trovata = false;


for (let i = 0; i < listaInvitati.length; i++) {
    // Confrontiamo l'email inserita con quella in posizione i
    if (emailUtente === listaInvitati[i]) {
        trovata = true;
        break; // Trovata l'email, può smettere di ciclare
    }
}

// Messaggio finale
if (trovata) {
    console.log("Benvenuto/a! Ti aspettavamo.");
} else {
    console.log("Spiacente, il tuo nome non è fra gli invitati. Niente D&D per te!");
}