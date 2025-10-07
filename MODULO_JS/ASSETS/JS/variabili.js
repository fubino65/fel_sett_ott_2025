//DICHIARAZIONE
let primaVariabile;
console.log(primaVariabile);

//INIZIALIZZAZIONE (PRIMA ASSEGNAZIONE)
primaVariabile = 44; //tipo di dato number valore 44
console.log(primaVariabile);

//DICHIARAZIONE E INIZIALIZZAZIONE CONTESTUALI
let secondaVariabile = 'seconda variabile'; //tipo di dato string valore seconda variabile
console.log(secondaVariabile);

//DICHIARAZIONI E/O INIZIALIZZAZIONI MULTIPLE
let var1, var2; //dichiarazione multipla
console.log(var1);
console.log(var2);
var1 = 20;
var2 = true; //tipo di dato booleano con valore true
console.log(var1);
console.log(var2);

let var3 = 'giovanni',
  var4 = 1587; //dichiarazione e inizializzazione multiple
console.log(var3);
console.log(var4);

//RIASSEGNAZIONE (posso cambiare il valore ma anche il tipo di dato)
secondaVariabile = '44';
console.log(secondaVariabile);

//ASSEGNAZIONE PER VALORE (TIPI PRIMITIVI)
let terzaVariabile = secondaVariabile;
console.log(terzaVariabile);
secondaVariabile = 'fulvia';
console.log(terzaVariabile);
//Con i tipi primitivi quando valorizzo una variabile con un'altra, le assegno solo il valore dopo di che le due variabili rimangono indipendenti l'una dall'altra

//ESERCIZI
//DICHIARA LA VARIABILE NOME E ASSEGNALE IL VALORE GERONIMO DI TIPO STRINGA
let nome = 'geronimo';

//DICHIARA LA VARIABILE TRIMESTRE E ASSEGNALE IL VALORE 2 DI TIPO NUMBER
let trimestre = 2;

//RIASSEGNA LA VARIABILE TRIMESTRE ASSEGNANDOLE IL VALORE 3 DI TIPO STRINGA
trimestre = '3';

//DICHIARA LA VARIABILE STAGIONE. QUANTO VALE?
let stagione;
console.log(stagione);
