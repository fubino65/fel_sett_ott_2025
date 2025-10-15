//creo un oggetto Date che rappresenta il momento in cui lo sto creando
let adesso = new Date();
console.log(adesso);

//creo un oggetto Date a partire da una determinata data in formato stringa
let compleanno = new Date('1965-11-12');
console.log(compleanno);
let compleannoMarito = new Date('1964-05-20');
let compleannoGiaco = new Date('1998-04-25');
//creo un oggetto Date a partire da una determinata data
let natale25 = new Date(2025, 11, 25); //ricordarsi che il mese è sempre indietro di 1
console.log(natale25.getDay());

//posso confrontare delle date
console.log(compleanno >= compleannoMarito);
console.log(compleanno >= compleannoGiaco ? 'sono più giovane' : 'sono più vecchia');

//di una data posso estrapolare le varie componenti
console.log(adesso.getDate()); //numero del giorno all'interno del mese
console.log(adesso.getDay()); //numero del giorno all'interno della settimana
console.log(adesso.getFullYear());
console.log(adesso.getMonth()); //il mese parte da 0 per cui è sempre uno in meno del mese reale
console.log(adesso.getHours());
console.log(adesso.getMinutes());
//cambio i minuti
console.log(adesso.setMinutes(59));

//dalla data di adesso posso calcolare 15 minuti in più (nell'ottica del cartello della pausa) e ottenere la data di fine
let oraInizio = new Date();
console.log(oraInizio.getHours() + ':' + oraInizio.getMinutes());
let oraFine = new Date();
oraFine.setMinutes(oraInizio.getMinutes() + 15);
console.log(oraFine.getHours() + ':' + oraFine.getMinutes());

//ottengo il timestamp a partire da una data
//timestamp = numero di millisecondi trascorsi dalla Unix Epoch = 01 01 1970 mezzanotte
console.log(oraInizio.getTime());
console.log(oraFine.getTime());
console.log(compleanno.getTime());

//FORMATTAZIONE DELLE DATE
//toLocaleDateString (locale) restituisce giorno mese e anno in base alla locale
console.log(compleanno.toLocaleDateString('it-IT'));
console.log(compleanno.toLocaleDateString('en-US'));
console.log(compleanno.toLocaleDateString('en-UK'));

let options = {
  weekday: 'long',
  year: '2-digit',
  month: 'short',
  day: 'numeric'
};
//N.B. vedo solo quello che definisco nelle options. Quello che non metto nelle options non sarà visualizzato

console.log(compleanno.toLocaleDateString('it-IT', options));
console.log(compleanno.toLocaleDateString('en-US', options));
console.log(compleanno.toLocaleDateString('en-UK', options));
console.log(compleanno.toLocaleDateString('de-CH', options));

//toLocaleTimeString (locale) restituisce ore minuti e secondi in base alla locale
let timeOptions = {
  hour: '2-digit',
  minute: '2-digit'
  //   second: 'numeric'
};
//N.B. anche in questo caso vedo solo quello che definisco nelle options. Quello che non metto nelle options non sarà visualizzato
console.log(compleanno.toLocaleTimeString('it-IT', timeOptions));
console.log(compleanno.toLocaleTimeString('en-US'));
console.log(compleanno.toLocaleTimeString('fa-IR'));
