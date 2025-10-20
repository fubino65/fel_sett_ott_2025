let casa = {
  tipologia: 'villa',
  superficie: 150,
  vani: 5,
  bagni: 2,
  box: true,
  descrivi: function () {
    return `Tipologia: ${this.tipologia}, superficie: ${this.superficie}mq, numero vani: ${this.vani}, numero bagni: ${
      this.bagni
    }, box: ${this.box ? 'sì' : 'no'}`;
  }
};

console.log(casa.descrivi());

//MODIFICA
casa.tipologia = 'super attico';
casa['tipologia'] = 'attico';
let prop = 'vani';
casa[prop] = 4; //qui la bracket notation è indispensabile perchè il nome della proprietà è contenuto in una variabile
console.log(casa.descrivi());

console.log(casa.tetto); //quando una proprietà non esiste ritorna undefined
console.log(casa.camino);

//AGGIUNTA DI UNA PROPRIETA' dopo che l'oggetto è già stato creato e magari anche utilizzato
casa.camino = false;
console.log(casa.camino);

//ELIMINAZIONE DI UNA PROPRIETA' dopo che l'oggetto è già stato creato e magari anche utilizzato
delete casa.camino;
console.log(casa.camino);

//CREAZIONE DI UN NUOVO OGGETTO DA UNO ESISTENTE

//APPROCCIO SBAGLIATISSIMO
let casa2 = casa; //assegnazione per riferimento (entrambi puntano alla stessa area di memoria) VALE PER TUTTO CIO' CHE NON E' TIPO PRIMITIVO
casa2.superficie = 130;
casa2.box = false;

console.log(casa2.descrivi());
console.log(casa.descrivi());
casa.indirizzo = {via: 'per cesate', citta: 'garbagnate milanese'};

// SOLUZIONE CON OBJECT.CREATE() -> esegue una shallow copy
let casa3 = Object.create(casa); //partono uguali ma i tipi primitivi vivono poi vite diverse
casa3.superficie = 180;
casa3.box = true;
casa3.vani = 6;
console.log(casa3.descrivi());
console.log(casa.descrivi());
casa3.indirizzo.citta = 'Bollate';
console.log(casa.indirizzo.citta); //i tipi NON primitivi sono legati per tutta la vita
console.log(casa3.indirizzo.citta);

//SOLUZIONE CON SPREAD OPERATOR-> esegue una shallow copy ma solo delle proprietà non dei metodi
let casa4 = {...casa3};

casa4.tipologia = 'villona';
console.log(casa4.tipologia);
console.log(casa.tipologia);

//SOLUZIONE CON JSON.PARSE (JSON.STRINGIFY(OGGETTO))-> shallow copy solo delle proprietà che hanno tipo primitivo. I metodi vengono eliminati così come le date e i valori null. GLi oggetti vengono inclusi ma non nel caso in cui l'oggetto sia stato creato con object.create()

let stringaJsonCasa3 = JSON.stringify(casa3);

casa3.tipologia = null;
console.log(casa3);
console.log(stringaJsonCasa3);
let casa5 = JSON.parse(JSON.stringify(casa3));
casa5.tipologia = 'topaia';
console.log(casa3);
console.log(casa5);

//creare un oggetto lampadina con i metodi accendi e spegni(oltre alle proprietà)
let lampadina = {
  accesa: false,
  colore: 'bianco',
  dimensioni: ['sm', 'l', 'xl'],
  caratteristicheTecniche: {voltaggio: '100', consumoBasso: true},
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

console.log(JSON.stringify(lampadina));

//VOGLIO CREARE L'OGGETTO CASA QUESTA VOLTA UTILIZZANDO IL COSTRUTTORE
function CasaDaVendere(tipologia, sup, vani, bagni, box = true) {
  this.tipologia = tipologia;
  this.superficie = sup;
  this.vani = vani;
  this.bagni = bagni;
  this.box = box;
  this.descrivi = function () {
    return `Tipologia: ${this.tipologia}, superficie: ${this.superficie}mq, numero vani: ${this.vani}, numero bagni: ${
      this.bagni
    }, box: ${this.box ? 'sì' : 'no'}`;
  };
}

let cod33 = new CasaDaVendere('trilocale', 70, 3, 1, false);
console.log(cod33.descrivi());

let cod34 = new CasaDaVendere('villa', 180, 5, 3);
console.log(cod34.descrivi());

//OBJECT.KEYS restituisce un array con i nomi di tutte le proprietà (compresi i metodi)
console.log(Object.keys(cod33));
//voglio conoscere i valori date le proprieta
for (let prop of Object.keys(cod33)) {
  if (typeof cod33[prop] != 'function') {
    //questo test esclude i metodi
    console.log(prop + '= ' + cod33[prop]);
  }
}

//OBJECT.VALUES restituisce un array con tutti i valori
console.log(Object.values(cod33));

//OBJECT.ENTRIES restituisce un array di array ciascuno dei quali contiene due elementi: proprietà e valore
let prova = [
  ['tipologia', 'trilocale'],
  ['superficie', 70],
  ['vani', 3]
];
console.log(prova[1][1]);

//risultato atteso: tipologia: trilocale, superficie: 70, vani: 3
console.log(Object.entries(cod33));
//posso ottenere il risultato usando i metodi degli array
let entries = Object.entries(cod33);
console.log(
  entries
    .filter(elemento => typeof elemento[1] != 'function')
    .map(elemento => elemento[0] + ': ' + elemento[1])
    .join(', ')
);

//oppure ciclando

for (let entry of entries) {
  if (typeof entry[1] != 'function') {
    console.log(entry.join(': '));
  }
}

//FOR IN
for (prop in cod33) {
  if (typeof cod33[prop] != 'function') {
    console.log(prop + ': ' + cod33[prop]);
  }
}

//OBJECT.ASSIGN
let cod35 = Object.assign({}, cod33);
console.log(cod35);
console.log(cod33);
