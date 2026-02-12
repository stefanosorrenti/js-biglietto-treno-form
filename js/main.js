//TRACCIA

/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

*/

//HUMAN CODE
/*Cosa deve fare il software?

-deve chiedere il numero di km da percorrere
-deve chiedere l'età del passeggiero
SE l'eta del passeggiero è minore a 18
    -calcolo il km x prezzo 
    -applico il 20 percento
ALTRIEMNTI SE l'eta del passeggiero è maggiore di 65
    -calcolo il km x prezzo 
    -applico il 40 percento

ALTRIMENTI
    -calcolo il km x prezzo


*/


//DATA
//Seleziono il nodo  che contine l'input che chiede i KM da percorrere
const km = document.getElementById('km');

//Seleziono il nodo  che contine l'input che chiede l'eta dell'utente.
const userAge = document.getElementById('age');

//Costo fisso del KM
const kmPrice = 0.21;

//Calcol il prezzo finale con con il valore delle'elemnto KM X il costo fisso del KM
const finalPrice = km.value * kmPrice
console.log(finalPrice);
