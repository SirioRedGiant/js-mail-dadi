# Mail

CREO una lista chiamata "listaInvitati" con dentro i nomi dei partecipanti.
CHIEDO all'utente (prompt): "Qual è la tua email?" e salva la risposta in "emailUtente".
CREO una variabile "trovato" e impostala su FALSO.

PER OGNI elemento nella lista "invitati":
    SE l'email dell'invitato corrente è UGUALE a "emailUtente":
        ALLORA imposta "trovato" su VERO.
        FERMA il ciclo (non serve cercare oltre).

ALLA FINE DEL CICLO:
    SE "trovato" è VERO:
        STAMPA "Benvenuto!"
    ALTRIMENTI:
        STAMPA "Non sei nella lista."



# Gioco dei Dadi

Genera un numero per il giocatore: Prendi un numero a caso tra 1 e 6 e salvalo come "punteggio del giocatore". Stampa questo numero sullo schermo.


Genera un numero per il computer: Prendi un altro numero a caso tra 1 e 6 e ricordatelo come "punteggio del computer". Stampa anche questo numero.


Confronta i risultati per decidere chi vince:

    SE il numero del giocatore è più alto di quello del computer: allora l'utente ha vinto.

    ALTRIMENTI, SE il numero del computer è più alto di quello del giocatore: allora ha vinto il computer.

    ALTRIMENTI (cioè se i numeri sono uguali): la partita è finita in pareggio.