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

//3. Scrivere un ciclo che stampi la tabellina del 7 : 7x1 = 7
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

//4.Definire un array contenente 7 numeri e utilizzando un ciclo for stamparne la media aritmetica (es la media di 6,8,10 = (6+8+10) / 3 dove 3 è il numero di elementi dell'array)
numeri = [6, 4, 1, 9, 7, 5, 99];
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
  const numero = numeri[i];
  somma += numero;
}
let media = somma / numeri.length;
console.log('media = ' + media);

//5)Definire un array contenente i cognomi di 20 studenti.Gli studenti il cui cognome inizia con una lettera compresa fra A e J saranno assegnati al prof Rossi, gli altri al prof.Bianchi.Utilizzare un ciclo for e popolare un array per professore contenente i cognomi degli studenti assegnatigli.
//per estrarre la prima lettera di una stringa possiamo fare stringa[0]

//studenti tutti maiuscoli
let studenti = [
  'Roberti',
  'Ferrari',
  'esposito',
  'Jianchi',
  'Ricci',
  'Conti',
  'kusso',
  'Costa',
  'rizzo',
  'Fontana',
  'Moretti',
  'fabbri',
  'Sanna',
  'Neri',
  'Costantini',
  'Sorentino',
  'Ruggero',
  'Pagano',
  'Vitali',
  'Bellini'
];
let bianchi = [],
  rossi = [];
for (let i = 0; i < studenti.length; i++) {
  const studente = studenti[i];
  let primaLettera = studente[0];

  // if ((primaLettera >= 'A' && primaLettera <= 'J') || (primaLettera >= 'a' && primaLettera <= 'j')) {
  //if (primaLettera >= 'A' && primaLettera <= 'J') {
  if (primaLettera.toUpperCase() >= 'A' && primaLettera.toUpperCase() <= 'J') {
    rossi[rossi.length] = studente; //la lunghezza di un array corrisponde anche al primo indice "libero" che possiamo utilizzare
  } else {
    bianchi[bianchi.length] = studente;
  }
}
console.log(rossi);
console.log(bianchi);

//SOLUZIONE 2  CON INDICI DICHIARATI PRIMA DEL CICLO E INCREMENTATI NEL CICLO
let profRossi = [];
let profBianchi = [];

let indiceRossi = 0;
let indiceBianchi = 0;

for (let i = 0; i < studenti.length; i++) {
  let cognome = studenti[i];
  let primaLettera = cognome[0];

  if (primaLettera >= 'A' && primaLettera <= 'J') {
    profRossi[indiceRossi] = cognome;
    indiceRossi++;
  } else {
    profBianchi[indiceBianchi] = cognome;
    indiceBianchi++;
  }
}

for (let i = 0; i < studenti.length; i++) {
  let cognome = studenti[i];
  let primaLettera = cognome[0];

  if (primaLettera >= 'A' && primaLettera <= 'J') {
    profRossi[indiceRossi] = cognome;
    indiceRossi++;
  } else {
    profBianchi[indiceBianchi] = cognome;
    indiceBianchi++;
  }
}

console.log('Studenti del prof. Rossi:', profRossi);
console.log('Studenti del prof. Bianchi:', profBianchi);

////SOLUZIONE 3  CON INDICI DICHIARATI E INIZIALIZZATI NELLA PRIMA SEZIONE DEL FOR E INCREMENTATI NEL CICLO
profRossi = [];
profBianchi = [];

for (let i = 0, indiceRossi = 0, indiceBianchi = 0; i < studenti.length; i++) {
  let cognome = studenti[i];
  let primaLettera = cognome[0];

  if (primaLettera >= 'A' && primaLettera <= 'J') {
    profRossi[indiceRossi] = cognome;
    indiceRossi++;
  } else {
    profBianchi[indiceBianchi] = cognome;
    indiceBianchi++;
  }
}

console.log('Studenti del prof. Rossi:', profRossi);
console.log('Studenti del prof. Bianchi:', profBianchi);

//**********  FOR OF (SOLO PER ARRAY O OGGETTI ITERABILI) */
//ripeto l'esempio delle regioni con il ciclo for of
result = 'le regioni italiane sono:';
for (let regione of regioni) {
  result += regione + ' ';
  console.log(result);
}
console.log(result);

//voglio conoscere la somma dei nuneri del seguente array
numeri = [6, 4, 8, 1, 0, 55, 7];
somma = 0;
for (const numero of numeri) {
  somma += numero;
}
console.log(somma);

let frutti = ['mela', 'pera', 'uva', 'castagna', 'mandarino'];

//soluzione con for tradizionale
for (let i = 0; i < frutti.length; i++) {
  const element = frutti[i];
  console.log(element);
}

//soluzione con for of. Poichè il for of non rende disponibile l'indice se ne avessi bisogno posso dichiarare una variabile esterna (in questo caso counter) e usarla all'interno del ciclo ricordandosi di modificarla (++,--,...)
let counter = 1;
for (let elemento of frutti) {
  console.log(counter + ': ' + elemento);
  counter++;
}

//**********  FOR IN (SOLO PER OGGETTI) CICLA SU TUTTE LE PROPRIETA (COMPRESI I METODI) */
let lampadina = {
  accesa: false,
  colore: 'bianco',
  dimensioni: ['sm', 'l', 'xl'],
  led: true,
  accendi: function () {
    this.accesa = true;
  },
  spegni: function () {
    this.accesa = false;
  },
  getStato() {
    //approccio più veloce per scrivere un metodo (nomeMetodo(){} invece che nomeMetodo: function (){})
    console.log('La lampadina è ' + (lampadina.accesa ? ' accesa.' : ' spenta.'));
  }
};

for (let prop in lampadina) {
  if (typeof lampadina[prop] != 'function') {
    console.log(`${prop}: ${lampadina[prop]}`);
  }
}

//ESERCIZI
//1. data una stringa stampa ogni carattere della stessa (la stringa è equiparabile in lettura a un array di caratteri)
let parola = 'anagramma';
// parola = ["a", "n", "a", "g", ...]
for (const carattere of parola) {
  console.log(carattere);
}

//2. dato un array di numeri determinare il valore massimo

//voglio conoscere la somma dei numeri del seguente array
let max = 0;
numeri = [6, 4, 8, 1, 0, 55, 7];
for (const num of numeri) {
  if (num > max) {
    max = num;
  }
}
console.log(`Il valore massimo è ${max}`);

//3. data una stringa stamparla al contrario guida -> adiug
parola = 'periodo';
let stringaReversed = '';
for (let car of parola) {
  stringaReversed = car + stringaReversed;
  console.log(car);
}
console.log(`${parola} al contrario diventa ${stringaReversed}`);

//soluzione con il for classico
stringaReversed = '';
for (let index = parola.length - 1; index >= 0; index--) {
  const element = parola[index];
  stringaReversed += element;
  console.log(stringaReversed);
}
console.log(`${parola} al contrario diventa ${stringaReversed}`);

//COME USCIRE DA UN CICLO (VALE PER TUTTI I CICLI) -> BREAK
//dato un array di numeri stampa tutti i numeri a meno che vengano trovati i numeri 4 o 7. In questo caso stampiamo "errore";

numeri = [6, 5, 8, 1, 4, 55, 77];
result = '';
for (const numero of numeri) {
  if (numero == 4 || numero == 7) {
    result = 'errore';
    break;
  }
  result += numero + ' ';
}

console.log(result);

//dato un array di numeri stampa tutti i numeri tranne  4 o 7.

numeri = [6, 5, 8, 1, 4, 55, 7];
result = '';

for (const numero of numeri) {
  if (numero == 4 || numero == 7) {
    continue;
  }
  console.log(numero);
}

//sarebbe lo stesso scrivere il codice come segue

for (const numero of numeri) {
  if (numero != 4 && numero != 7) {
    console.log(numero);
  }
}
