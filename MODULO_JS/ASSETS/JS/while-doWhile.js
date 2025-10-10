//************ WHILE */

//voglio stampare i numeri compresi in un range utilizzando sia il ciclo for che il ciclo while

let da = 7;
let a = 20;

for (let i = da; i <= a; i++) {
  console.log(i);
}

let j = 0; //in questo caso il ciclo non viene mai eseguito perchè la condizione non è soddisfatta
j = da;
while (j >= da && j <= a) {
  console.log(j);
  j++;
}

//SECONDA SOLUZIONE (errata ma utile)
// da = 7;
// a = 20;
// let k = da;

// while (da >= k <= a) {
//   // questa condizione è sempre true perchè viene valutato true<20, true viene trasformato in 1 che è sempre minore di 20. Se anche da non fosse >=k darebbe false e quindi valuterebbe false <20. False viene trasformato in 0 che è sempre minore di 20
//   console.log(k);
//   k++;
// }

//ESERCIZI

//1. Con il ciclo while  stampa i numeri pari compresi fra 20 e 4 dal più grande al più piccolo
da = 20;
a = 4;

while (da >= a) {
  if (da % 2 === 0) {
    console.log(da);
  }
  da--;
}

//SOLUZIONE 2 più compatta
let numero1 = 20;

while (numero1 >= 4) {
  console.log(numero1);
  numero1 -= 2;
}
//N.B. entrambe le soluzioni funzionano solo perchè si parte da un numero pari

//2. Dichiara una variabile test = true.Scrivi un ciclo while che abbia la variabile uguale a true come condizione e iteri solo due volte stampando ciao nella console;
//output ("ciao ciao")

let test = true;
let contatore = 0;

// SOLUZIONE 1
while (test && contatore < 2) {
  console.log('ciao');
  contatore++;
}

// SOLUZIONE 2 (PIU' ADERENTE ALLA TRACCIA)
test = true;
contatore = 0;

while (test) {
  console.log('ciao');
  contatore++;
  if (contatore === 2) {
    test = false;
  }
}

// SOLUZIONE 3 (PARTENDO DAL NUMERO MASSIMO DI ITERAZIONI)
test = true;
contatore = 2;
while (test) {
  console.log('ciao');
  contatore--;
  if (contatore === 0) {
    test = false;
  }
}

//SOLUZIONE 4 (USO DI BREAK PER INTERROMPERE IL CICLO)
test = true;
contatore = 2;
while (test) {
  console.log('ciao');
  contatore--;
  if (contatore === 0) {
    break; //interrompe qualsiasi ciclo
  }
}

//3.  SIMULA UN GIOCO IN CUI IL COMPUTER PENSA A UN NUMERO COMPRESO FRA 0 E 6 E L'UTENTE DEVE INDOVINARLO. OGNI VOLTA CHE SBAGLIA GLI VIENE RIPROPOSTO IL PROMPT
let numeroDaIndovinare = '3';

// let scelta = prompt('indovina il numero magico (fra 0 e 6)');

// while (scelta != numeroDaIndovinare && scelta != null) {
//   //scelta != null permette all'utente di premere annulla
//   scelta = prompt('ritenta');
// }
// if (scelta == numeroDaIndovinare) {
//   //serve solo per gli utenti che non hanno premuto annulla
//   alert('super bravissimo il numero da indovinare era ' + numeroDaIndovinare);
// }

//***********   DO WHILE
//rifacciamo l'ultimo esercizio usando il do-while

numeroDaIndovinare = '2';
let msg = 'indovina il numero (fra 0 e 6)';
let scelta2 = false;
do {
  scelta2 = prompt(msg);
  msg = 'ritenta';
} while (scelta2 != numeroDaIndovinare && scelta2 != null);

if (scelta2 == numeroDaIndovinare) {
  //serve solo per gli utenti che non hanno premuto annulla
  alert('super bravissimo il numero da indovinare era ' + numeroDaIndovinare);
}
