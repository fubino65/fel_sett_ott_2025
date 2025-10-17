let carrello = ['lamborghini', 'calendario Douglas', 'rolex', 'scheda video', 'portatile', 'villa', 'borsa hermes'];

//SPLICE  serve per eliminare, aggiungere, sostituire all'interno dell'array
//voglio eliminare il calendario
console.log(carrello.splice(1, 1));
console.log(carrello);
carrello = ['lamborghini', 'calendario Douglas', 'rolex', 'scheda video', 'portatile', 'villa', 'borsa hermes'];
//voglio sostituire il calendario douglas con il cal. swarovski
carrello.splice(1, 1, 'calendario swarovski');
console.log(carrello);
//vogliamo aggiungere dopo il portatile un mouse e uno schermo
carrello.splice(5, 0, 'mouse', 'schermo');
console.log(carrello);
//voglio eliminare il rolex ma non ne conosco l'indice
//trovo l'indice del rolex (metodo indexOf)
// let indice = carrello.indexOf('mouse');
let indice = carrello.findIndex(element => element == 'mouse'); //equivalente all'indexOf
indice = carrello.findIndex(function (element) {
  return element == 'mouse';
});
console.log(indice);
carrello.splice(indice, 1);
console.log(carrello);

//AT
console.log(carrello.at(-2));
console.log(carrello.at(3));

//FOREACH
let numeri = [6, 4, 1, 9, 7, 5, 99];
let somma = 0;

numeri.forEach(numero => (somma += numero));
let media = somma / numeri.length;
console.log('media = ' + media);

//posso passare un secondo parametro che rappresenta l'indice dell'iterazione
numeri.forEach((pippo, i) => console.log(i + ': ' + pippo));
numeri.forEach(function (pippo, i) {
  console.log(i + ': ' + pippo);
});

//MAP
//voglio che tutti gli elementi del carrello siano scritti in maiuscolo
let carrelloUpper = carrello.map(articolo => articolo.toUpperCase());
console.log(carrelloUpper);
console.log(carrello); //l'originale non è cambiato
carrello = carrelloUpper; //in questo modo entrambe le variabili puntano alla stessa area di memoria per cui al cambiare dell'una cambia in modo identico anche l'altra.
console.log(carrelloUpper);
console.log(carrello);
carrelloUpper.push('labubu');
console.log(carrelloUpper);
console.log(carrello);

//se volessi fare una shallow copy di carrelloUpper e assegnarla a carrello2 potrei usare lo spread operator ...
//shallow copy = copia per valore solo i tipi primitivi
let carrello2 = [...carrelloUpper];
console.log(carrelloUpper);
console.log(carrello2); //partono uguali
carrello2.unshift('aspirapolvere');
console.log(carrelloUpper);
console.log(carrello2);

//FILTER
numeri = [6, 4, 1, 9, 7, 5, 99];
let numeriPiccoli = numeri.filter(numero => numero < 7);
console.log(numeriPiccoli);

//SORT (ordinamento alfabetico in ordine crescente) RICORDA: prima vengono ordinate le lettere maiuscole e poi le minuscole
//portiamo tutto in maiuscolo
carrello = carrello.map(articolo => articolo.toUpperCase());
console.log(carrello.sort());

//REVERSE (inverte l'ordine degli elementi ma non ordina alfabeticamente)
console.log(carrello2.reverse());
console.log(carrello.reverse()); //su carrello era già stato fatto il sort per cui il reverse ha come effetto quello di ordinare in ordine decrescente. Solo perchè era già stato fatto il sort

let numbers = [1, 6, 'anziano', 4, 'Solstizio', 'alfabeto', 11, 7, 22];
console.log(numbers.sort());

//se volessi ordinare non alfabeticamente un array di numeri dovrei passare a sort una funzione personalizzata
numbers = numbers.filter(numero => typeof numero == 'number'); //tolgo le parole
console.log(numbers);
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

//JOIN
//voglio invertire i caratteri di una stringa e renderli maiuscoli
let stringa = 'geronimo';
console.log(stringa.split('').reverse().join('').toUpperCase());
