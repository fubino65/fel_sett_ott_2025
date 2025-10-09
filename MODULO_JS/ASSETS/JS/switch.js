let semaforo = 'verde';

switch (semaforo) {
  case 'rosso':
    console.log('FERMATI!!!!!!');
    break;
  case 'giallo':
    console.log('Passa con prudenza');
    break;
  case 'verde':
    console.log('Vai tranquillo');
    break;
  default:
    console.log('Il semaforo potrebbe essere guasto');
    break;
}

//UNIONE DI PIU' CASI OMETTENDO IL BREAK (è come se mettessi in or due o più case)
semaforo = 'giallo';
switch (semaforo) {
  case 'rosso':
  case 'giallo':
    console.log('FERMATI!!!!!!');
    break;
  case 'verde':
    console.log('Vai tranquillo');
    break;
  default:
    console.log('Il semaforo potrebbe essere guasto');
    break;
}

//COME METTERE I CASE IN || O IN &&
semaforo = 'rosso';
switch (
  true //entra nel primo caso true. Se mettessi false entrerebbe nel primo caso false
) {
  case semaforo == 'rosso' || semaforo == 'giallo':
    console.log('FERMATI!!!!!!');
    break;
  case semaforo == 'verde':
    console.log('Vai tranquillo');
    break;
  default:
    console.log('Il semaforo potrebbe essere guasto');
}

//ESERCIZI
// 1. Dichiarare la variabile giorno e testarla per i seguenti casi: 1 = Lunedì, 2 = Martedi…7 = domenica e stampare nella console;
let giornoSettimana = '4';
let msg = 'Oggi è ';
switch (+giornoSettimana) {
  case 1:
    msg += 'Lunedì';
    break;
  case 2:
    msg += 'Martedì';
    break;
  case 3:
    msg += 'Mercoledì';
    break;
  case 4:
    msg += 'Giovedì';
    break;
  case 5:
    msg += 'Venerdì';
    break;
  case 6:
  case 7:
    msg = 'Che bello il week end';
    break;
  default:
    msg = 'Sì è verificato un errore';
}
console.log(msg);

// 2. Dichiarare la variabile viaggiatore e mostrare nella console il prezzo del biglietto del treno che un viaggiatore dovrà pagare considerando che normalmente è di 2 euro tranne le seguenti eccezioni: i pensionati hanno uno sconto del 10 %, gli studenti del 15 % e i disoccupati del 25 %; output "Biglietto categoria tot euro"

// SOLUZIONE 1
let viaggiatore = 'studente';
const PREZZO_BIGLIETTO = 2;
let prezzoFinale = PREZZO_BIGLIETTO;

switch (viaggiatore) {
  case 'pensionato':
    prezzoFinale = PREZZO_BIGLIETTO * 0.9;
    break;
  case 'studente':
    prezzoFinale = PREZZO_BIGLIETTO * 0.85;
    break;
  case 'disoccupato':
    prezzoFinale = PREZZO_BIGLIETTO * 0.75;
    break;
  default:
    viaggiatore = 'standard';
}
console.log('biglietto  ' + viaggiatore + ' ' + prezzoFinale + ' €.');
// console.log(`Biglietto ${viaggiatore} ${prezzoFinale} €`);

// SOLUZIONE 2 con costanti per le varie riduzioni
viaggiatore = '';
const PENSIONATO_RIDUZIONE = 10;
const STUDENTE_RIDUZIONE = 15;
const DISOCCUPATO_RIDUZIONE = 25;
msg = `Biglietto ${viaggiatore} `;

// let prezzoFinale = PREZZO_BIGLIETTO;
switch (viaggiatore) {
  case 'pensionato':
    msg += PREZZO_BIGLIETTO - (PREZZO_BIGLIETTO * PENSIONATO_RIDUZIONE) / 100;
    break;
  case 'studente':
    msg += PREZZO_BIGLIETTO - (PREZZO_BIGLIETTO * STUDENTE_RIDUZIONE) / 100;
    break;
  case 'disoccupato':
    msg += PREZZO_BIGLIETTO - (PREZZO_BIGLIETTO * DISOCCUPATO_RIDUZIONE) / 100;
    break;
  default:
    msg = 'Biglietto standard ' + PREZZO_BIGLIETTO;
}

console.log(msg + ' €');

//SOLUZIONE 3 MODIFICA DIRETTAMENTE IL PREZZO DEL BIGLIETTO
viaggiatore = 'pensionato';
let prezzoBiglietto = 2;
switch (viaggiatore) {
  case 'pensionato':
    prezzoBiglietto *= 0.9;
    console.log(`Biglietto categoria pensionato: ${prezzoBiglietto} euro`);
    break;
  case 'studente':
    prezzoBiglietto *= 0.85;
    console.log(`Biglietto categoria studente: ${prezzoBiglietto} euro`);
    break;
  case 'disoccupato':
    prezzoBiglietto *= 0.75;
    console.log(`Biglietto categoria disoccupato: ${prezzoBiglietto} euro`);
    break;
  default:
    console.log(`Biglietto categoria normale: ${prezzoBiglietto} euro`);
}

// SOLUZIONE 4
// Prezzo base del biglietto
const prezzoBase = 2;

// Dichiarazione della variabile viaggiatore (scegli tra: 'normale', 'pensionato', 'studente', 'disoccupato')
viaggiatore = ''; // Puoi modificare il valore per testare altre categorie

// Variabile per lo sconto inizializzata a 0
let sconto = 0;

// Utilizzo dello switch per determinare lo sconto in base alla categoria
switch (viaggiatore) {
  case 'pensionato':
    sconto = 0.1; // 10% di sconto
    break;
  case 'studente':
    sconto = 0.15; // 15% di sconto
    break;
  case 'disoccupato':
    sconto = 0.25; // 25% di sconto
    break;
  default:
    viaggiatore = 'standard';
    sconto = 1; // Nessuno sconto per categoria 'normale' o non riconosciuta
    break;
}

console.log('Prezzo biglietto ' + viaggiatore + ' ' + prezzoBase * sconto + '€');

//3.	Valuta la variabile voto secondo il sistema anglosassone e stampa a video il significato considerando che A corrisponde a ottimo, B a distinto, C a discreto, D a sufficiente, E a insufficiente e F a disastroso.
let votoItaliano = 'distinto';
let votoEn = '';

switch (votoItaliano) {
  case 'ottimo':
    votoEn = 'A';
    break;
  case 'distinto':
    votoEn = 'B';
    break;
  case 'discreto':
    votoEn = 'C';
    break;
  case 'sufficiente':
    votoEn = 'D';
    break;
  case 'insufficiente':
    votoEn = 'E';
    break;
  case 'disastroso':
    votoEn = 'F';
    break;
  default:
    votoEn = 'voto non esistente';
    break;
}
console.log(votoEn);
