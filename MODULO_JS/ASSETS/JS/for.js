//APPLICAZIONE AD UN ARRAY

let regioni = [
  'Abruzzo',
  'Basilicata',
  'Calabria',
  'Campania',
  'Emilia-Romagna',
  'Friuli-Venezia Giulia',
  'Lazio',
  'Liguria',
  'Lombardia',
  'Marche',
  'Molise',
  'Piemonte',
  'Puglia',
  'Sardegna',
  'Sicilia',
  'Toscana',
  'Trentino-Alto Adige',
  'Umbria',
  "Valle d'Aosta",
  'Veneto'
];

// let options = '';
// for (let i = 0; i < regioni.length; i++) {
//   const element = regioni[i];
//   options += `<option value="${element}">${element}</option>`;
// }
// console.log(options);

let result = 'le regioni italiane sono:';
for (let i = 0; i < regioni.length; i++) {
  //   const regione = regioni[i];
  //result = result + regione;
  result += regioni[i] + ' ';
  console.log(result);
}
console.log(result);

//APPLICAZIONE SLEGATA DAGLI ARRAY
//voglio stampare tutti i numeri da 1 a 10 compresi
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//voglio stampare tutti i numeri da 8 a 23 escluso
for (let i = 8; i < 23; i++) {
  console.log(i);
}

//pensiamo a un ciclo generico che ci permetta di stampare i numeri di un dato range
let da = 70;
let a = 80;
let numeri = [];
for (let i = da; i <= a; i++) {
  console.log(i);
  numeri[i - da] = i;
}
console.log(numeri);

//voglio simulare 3 minuti formati ciascuno da 60 secondi
let numMinuti = 3;
for (let min = 0; min < numMinuti; min++) {
  console.log('minuto = ' + min);
  for (let sec = 1; sec < 60; sec++) {
    console.log('sec ' + sec);
  }
}

//ESERCIZI
//1. Data una stringa e un numero N, stampa N volte la stringa
let stringa = 'che bello!';
let num = 5;
for (let i = 0; i < num; i++) {
  console.log(stringa);
}

//2. Scrivere un ciclo for che iteri da 0 a 20 compreso. Ad ogni iterazione verificherà se il numero è pari o dispari. Dopo il ciclo stampare a video le due stringhe seguenti: Numeri pari = 0 2 4… Numeri dispari = 1 3 5…
let pari = 'Numeri pari = ';
let dispari = 'Numeri dispari = ';
for (let i = 0; i <= 20; i++) {
  //   if (!(i % 2)) {//metodo santi
  if (i % 2 === 0) {
    //caso pari
    pari += i + ' ';
  } else {
    //caso dispari
    dispari += i + ' ';
  }
}
console.log(pari);
console.log(dispari);

//3. Scrivere un ciclo che stampi la tabellina del 7 : 7x1 = 7 (un console log per riga)
let base = '7';
// let base = prompt('scegli la base');
if ((typeof base == 'number' || typeof base == 'string') && +base) {
  for (let i = 1; i <= 10; i++) {
    // console.log(base + ' x ' + i + ' = ' + base * i);
    console.log(`${base} x ${i} = ${base * i}`);
  }
} else {
  //alert('inserisci un numero valido');
  console.log('inserisci una base valida');
}

let num1 = '2';
let num2 = 4;
console.log(+num1 + num2);

//4.Definire un array contenente 7 numeri e utilizzando un ciclo for stamparne la media aritmetica (es la media di 6,8,10 = (6+8+10) / 3 dove 3 è il numero di elementi dell'array)
numeri = [6, 4, 1, 9, 7, 5, 99];
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
  const numero = numeri[i];
  somma += numero;
}
let media = somma / numeri.length;
console.log('media = ' + media);
