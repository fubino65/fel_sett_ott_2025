//DICHIARAZIONE
let fiori = []; //array vuoto
let frutti = new Array(); //array vuoto

//ASSEGNAZIONE/INIZIALIZZAZIONE
fiori[0] = 'rosa';
fiori[1] = 'peonia';
//viene creato fiori[2] ma è vuoto
fiori[3] = 'margherita';

console.log(fiori.length);

//DICHIARAZIONE E VALORIZZAZIONE CONTESTUALI
let animali = ['cane', 'gatto', 'pecora'];
console.log(animali.length);
animali[3] = 'cavallo';
console.log(animali.length);
console.log(animali[3]);

//LETTURA DEI VALORI
console.log(fiori[3]);
console.log(fiori[2]);

//AGGIUNTA DI VALORI
fiori[4] = 'orchidea';
console.log(fiori.length);

//RIASSEGNAZIONE DI VALORI
//assegno un valore all'indice 2 di fiori che era stato creato ma era vuoto
fiori[2] = 'geranio';
console.log(fiori.length);
animali[3] = 'pappagallo';
console.log(animali[3]);

const regioni = [
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

console.log(regioni.length);

//immaginiamo di dover valorizzare una select di un form html
let options = `<option value="${regioni[0]}>"${regioni[0]}</option>
<option value="${regioni[1]}">${regioni[1]}</option>
<option value="${regioni[2]}">${regioni[2]}</option>
.....
`;
