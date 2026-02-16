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
    -calcolo il km x prezzo e applico il 20% di sconto

ALTRIEMNTI SE l'eta del passeggiero è maggiore di 65

    -calcolo il km x prezzo e applico il 40% di sconto

ALTRIMENTI
    -calcolo il km x prezzo


*/


//DATA
//Seleziono il nodo  che contine l'input che chiede i KM da percorrere.
const km = document.getElementById('km');

//Seleziono il nodo  che contine l'input che chiede la fascia d'eta del passegiero.
const userAge = document.getElementById('age');

//Seleziono il node che contiener l'input che domanda il nome all'utente.
const userFullName = document.getElementById('fullname')

//Seleziono il nodo che contiene il form.
const formEl = document.querySelector('.train-tickets')

//Seleziono il nodo per stampare i KM da percorrere
const stampKm = document.querySelector('.user-km')

//Seleziono il nodo per stampare il l'eta in pagina
const stampAge = document.querySelector('.user-age')

//Seleziono il nodo per stamapre il prezzo finale
const stampTicketPrice = document.querySelector('.ticket-price')

//Seleziono il nodo per stampare il nome dell'utente
const stampUserName = document.querySelector('.user-fullname')

//Seleziono il nodo per darà dinamicità al bottono per l'acquisto
const payButton = document.querySelector('.btn-secondary')
console.log(payButton);






//LOGIC


//CREAIAMO L'EVENTO QUANDO IL FORM VIENE INVIATO
formEl.addEventListener('submit', function(e){ //EVENTO IN ASCOLTO DEL SUBMIT
    e.preventDefault()
    
    //Costo fisso del KM.
    const kmPrice = 0.21;
    
    //Calcolo il prezzo finale con con il valore delle'elemnto KM X il costo fisso del KM.
    let finalPrice = km.value * kmPrice;
    
    
    //SE l'eta del passeggiero è minore a 18
    if(userAge.value === 'MINORENNE') {
        
        //calcolo il km x prezzo e applico il 20% di sconto
        finalPrice = finalPrice * 0.80
        
        
        //ALTRIEMNTI SE l'eta del passeggiero è maggiore di 65          
    } else if (userAge.value === 'OVER-65') {
        
        //calcolo il km x prezzo e applico il 40% di sconto
        finalPrice = finalPrice * 0.60
        
        
        
        //ALTRIMENTI    
    }  else {
        //calcolo il km x prezzo
        finalPrice = finalPrice;
        
    }
    
    stampUserName.innerHTML = `${userFullName.value}`
    stampKm.innerHTML = `${km.value}` //Stampo i KM da percorrere in pagina
    
    stampAge.innerHTML = `${userAge.value}` //Stampo la fascia d'eta dell'utente in pagina
    
    stampTicketPrice.innerHTML = `${finalPrice.toFixed(2)}€` //Stampo il prezzo del biglietto in pagina
    
    payButton.className = `btn btn-primary mt-4` //cambio il colore del pulsante quando il form è stato inviato.

    //LOGS
    console.log(`Il biglietto è intestato a: ${stampUserName.value}`);
    console.log(`Distanza in KM: ${km.value}`);
    console.log(`Fascia d'età: ${userAge.value}`);
    console.log(`Il prezzo del biglietto è: ${finalPrice.toFixed(2)}€`);
})






