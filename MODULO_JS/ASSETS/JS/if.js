//IF SEMPLICE
let nome = 'Santi';

if (nome == 'Santi' || nome == 'santi') {
  console.log('Fulvia rifletti prima di rispondere');
}

if (nome == 'Daniela' || nome == 'daniela') {
  console.log('usa anydesk');
}

//IF ELSE
let temperatura = 38;

//esempio senza else per gestire condizioni alternative: poco ottimizzato
if (temperatura >= 37) {
  console.log('hai la febbre');
}
if (temperatura < 37) {
  console.log('stai benone');
}

//esempio con else per gestire condizioni alternative: ottimizzato
if (temperatura >= 37) {
  console.log('hai la febbre');
} else {
  console.log('stai benone');
}

let strada = 'extraurbana';
if (strada == 'autostrada') {
  console.log('velocità massima 130 km/h');
} else {
  console.log('non puoi arrivare a 130 km/h');
}

//IF ELSE IF [ELSE]
if (strada == 'autostrada') {
  console.log('velocità massima 130 km/h');
} else if (strada == 'tangenziale') {
  console.log('velocità massima 90 km/h');
} else if (strada == 'extraurbana') {
  console.log('velocità massima 70 km/h');
} else if (strada == 'urbana') {
  console.log('velocità massima 50 km/h');
} else {
  console.log('caso non gestito');
}

//if annidati
temperatura = 39.2;
//Inizio if esterno
if (temperatura >= 37) {
  console.log('hai la febbre');
  //Inizio if interno
  if (temperatura <= 38) {
    console.log('prendi una tachipirina');
  } else if (temperatura > 38 && temperatura <= 39) {
    console.log('prendi due tachipirine e stai a letto');
  } else {
    //else dell'if interno
    console.log('chiama la guardia medica');
  }
  //fine if interno
} else {
  //else dell'if esterno
  console.log('stai benone');
}
//Fine if esterno

//ESERCIZI
//1. Dato un numero stampa sulla console se è positivo, negativo o zero.
//SOLUZIONE 1 TESTO SUBITO SE IL NUMERO E' VALIDO
let numero = 5;
if (!+numero) {
  console.log('numero non valido');
} else if (numero > 0) {
  console.log('positivo');
} else if (numero < 0) {
  console.log('negativo');
} else if (numero == 0) {
  console.log('zero');
}

//SOLUZIONE 2
let num = 7;
if (num > 0) {
  console.log('numero positivo');
} else if (num < 0) {
  console.log('numero negativo');
} else if (num === 0) {
  console.log('il numero è', num);
} else {
  console.log('non è un numero');
}

//SOLUZIONE  Non testa il caso del non numero
let numero1 = -50;
if (typeof numero1 === 'number' && numero1 > 0) {
  console.log('Il numero è positivo');
} else if (typeof numero1 === 'number' && numero1 < 0) {
  console.log('Il numero è negativo');
} else if (numero1 === 0) {
  //controlla che il dato sia numerico con il ===
  console.log('Il numero è zero');
} else {
  console.log('Il numero non è valido');
}

//SOLUZIONE 4 Non testa il caso del non numero
numero1 = -50;
if (numero1 > 0) {
  console.log('Il numero è positivo');
} else if (numero1 < 0) {
  console.log('Il numero è negativo');
} else {
  console.log('Il numero è zero');
}

//2. Data una variabile voto e stampa sulla console il  livello dello studente (A, B, C, D). A, parte da 90 punti (compresi), B ne richiede minimo 80 e C minimo 70 punti, D minimo 60. Il massimo possibile è 100

//SOLUZIONE 1 richiede un ordine preciso delle condizioni (partendo da 90 in giù)
let voto = '83';
let livello = 'Il tuo livello è ';
if (!+voto || voto < 0 || voto > 100) {
  livello = 'livello non valutabile';
} else if (voto >= 90) {
  livello += 'A';
} else if (voto >= 80) {
  livello += 'B';
} else if (voto >= 70) {
  livello += 'C';
} else if (voto >= 60) {
  livello += 'D';
} else {
  livello = 'Bocciato!!!!';
}
console.log(livello);

// SOLUZIONE 2 CON prompt e valutazione più puntuale dei voti
// let voto = prompt('Inserisci un voto: ');

if (voto >= 90) {
  console.log('Il voto è A');
} else if (voto >= 80 && voto < 90) {
  console.log('Il voto è B');
} else if (voto >= 70 && voto < 80) {
  console.log('Il voto è C');
} else if (voto >= 60 && voto < 70) {
  console.log('Il voto è D');
} else if (voto >= 0 && voto < 60) {
  console.log("L'esame non è stato passato");
} else {
  console.log('Si prega di inserire una votazione valida da 0 a 100.');
}

//3. Dichiara una variabile nome. Se nome è uguale a “Maria” o “Stefania” o “Sanem” stampare sulla console “donna”, se nome uguale a “Mario” o “Stefano” o “Fulvio” stampare sulla console “uomo”, in tutti gli altri casi “genere non rilevato”;

let risultato = '';
if (nome == 'Maria' || nome == 'Stefania' || nome == 'Sanem') {
  risultato = 'donna';
} else if (nome == 'Mario' || nome == 'Stefano' || nome == 'Fulvio') {
  risultato = 'uomo';
} else {
  risultato = 'genere non rilevato';
}

console.log(risultato);
