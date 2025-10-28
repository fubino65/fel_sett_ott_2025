//VAR SCOPE GLOBALE E DI FUNZIONE
//var numero = 18;
// let numero =44; impossibile perchè già dichiarata con var

function prova() {
  var numero = 44; //numero qui è una variabile che non ha niente a che vedere con numero globale dichiarato a riga 2
  var numero = 55;
}

prova();
console.log(numero);

for (var i = 0; i < 10; i++) {
  var numero = 20;
  numero += i;
}

console.log(numero);
console.log(i);
// let i = 77; impossibile perchè è già stata dichiarata con var nel ciclo for a riga 13
let j = '';
for (j = 0; j < 10; j++) {
  let numero = 15;
  numero += j;
  console.log(numero);
}
console.log(numero);
console.log(j);
