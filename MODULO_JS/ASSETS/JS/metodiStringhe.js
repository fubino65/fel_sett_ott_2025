//
//INDEXOF
const GONNA = '4567';
const PANTALONI = '4568';
const INDICE_CAPO = 3;
let stringa = 'abc4567blf4567j';
//ho bisogno di verificare se esiste la sottostringa 456 e se si trova all'indice 3
let pos = stringa.indexOf(GONNA);
console.log(pos); //indice della sottostringa all'interno della stringa
//partendo dal presupposto che 4567 in posizione 3 indica gonna e che le due lettere successive indicano il colore capiamo se il prodotto è una gonna e di che colore è
let capo = '';
if (stringa.indexOf(GONNA) == INDICE_CAPO) {
  capo = 'gonna';
} else if (stringa.indexOf(PANTALONI) == INDICE_CAPO) {
  capo = 'pantaloni';
}

console.log(stringa.indexOf('pippo')); //se la sottostringa non esiste restituisce -1

let frase = 'oggi non piove, domani piove, dopodomani non piove, poi non piove più';
//voglio sapere quante volte c'è la parola piove nella frase
let i1 = frase.indexOf('piove');
console.log(i1); //so che c'è un'occorrenza di piove all'indice 9
let i2 = frase.indexOf('piove', i1 + 1);
console.log(i2); //so che c'è una seconda occorrenza di piove all'indice 23
let i3 = frase.indexOf('piove', i2 + 1);
console.log(i3); //so che c'è una terza occorrenza di piove all'indice 45
let i4 = frase.indexOf('piove', i3 + 1);
console.log(i4); //so che c'è una quarta occorrenza di piove all'indice 60
let i5 = frase.indexOf('piove', i4 + 1);
console.log(i5); //non esiste un'altra occorrenza di piove. In totale sono 4

//quante occorrenze di una sottostringa ci sono in una stringa?
frase = 'oggi non piove, domani piove, dopodomani non piove, poi non nevica più';
sottostringa = 'ciao';
count = 0;
index = 0;

while ((index = frase.indexOf(sottostringa, index)) !== -1) {
  count++;
  index += sottostringa.length;
}
console.log(count);

//SLICE (primo indice incluso, secondo escluso)
let colore = stringa.slice(INDICE_CAPO + GONNA.length, INDICE_CAPO + GONNA.length + 2);

stringa = 'voglio andare a far merenda adesso';
//voglio estrarre la sottostr. voglio andare
console.log(stringa.slice(0, 13));
//voglio estrarre la sottostr merenda
let sottostr = 'merenda';
console.log(stringa.slice(-sottostr.length));
console.log(stringa.slice(stringa.indexOf(sottostr), stringa.indexOf(sottostr) + sottostr.length));

//REPLACE (solo prima occorrenza - case sensitive)
stringa = 'Voglio vivere in australia ma non potrò vivere in Australia';
console.log(stringa.replace('Australia', 'Spagna'));
console.log(stringa);
console.log(stringa.replace(/austRAlia/gi, 'Francia'));

//REPLACEALL (tutte le occorrenze - case sensitive)
console.log(stringa.replaceAll('Australia', 'Spagna'));
console.log(stringa.replaceAll(/austRAlia/gi, 'Francia'));

//TRIM
stringa = '    Ciao      ';
console.log(stringa);
console.log(stringa.length);
console.log(stringa.trim());
console.log(stringa);
//stringa = stringa.trim();
//console.log(stringa);

//TRIMEND/TRIMSTART
console.log(stringa.trimStart());
console.log(stringa.trimEnd());

//TOUPPERCASE/TOLOWERCASE
console.log(stringa.toUpperCase().trim());
console.log(stringa.trim().toUpperCase());
console.log(stringa);

//SPLIT
stringa = 'ciao, mi chiamo Maria, sono      povera';
console.log(stringa.split(','));
console.log(stringa.split(' '));
