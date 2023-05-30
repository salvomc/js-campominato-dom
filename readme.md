PROBLEMA: Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

SOTTOPROBLEMA: CREARE UN ARRAY CON NUMERI CASUALI
1- Dichiaro un array vuoto chiamandolo arrayBombs
2- Creo una funzione fillArrayBombs che mi crei i numeri da inserire nell'array;
    2.1- Dichiaro una variabile che conterrà il numero generato;
    2.1- Dichiaro una variabile a cui do valore falso;
    2.2- WHILE il valore è della variabile è falso genera un numero casuale utilizzando Math.random;
    2.3- SE arrayBombs include questo numero generato imposta la variabile creata in precedenza a vero;
    2.4 Ritorno il numero generato;
3- Creo una funzione che riempe l'array con i valori
    3.1 Creo una variabile number;
    3.2 Creo un ciclo for che ripete le istruzioni per 16 volte;
    3.3 Richiamo la funzione fillArrayBombs e assegno il valore che torna alla variabile number;
    3.4 Inserisco questo numero nell'array tramite la funzione push;
    3.5 Ritorno l'array;

SOTTOPROBLEMA: Se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

1- ?SE la casella cliccata è associata ad un numero presente nell'arrayBombs, questa si colora di rosso e blocca il click delle altre  tramite una variabile gameOver; 
2- :ALTRIMENTI la casella si colora di blu ma il ti permetti di continuare a cliccare altre celle;

SOTTOPROBLEMA: La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1- Creo una variabile score e la incremento al click di ogni cella che non è una bomba;
2- ?SE la variabile score è uguale al numero delle celle - 16 mostro tramite un alert che hai vinto;