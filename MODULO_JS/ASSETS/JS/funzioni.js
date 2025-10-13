//  DICHIARAZIONE
// let msg = "ciao sono una stringa";

function saluta(nome) {
  console.log('Benvenut* ' + nome);
}

//INVOCAZIONE
saluta('pinco');
saluta('Santi');
saluta('Giovanna');
saluta();
console.log(saluta); //non avendo le parentesi tonde verrà stampata la dichiarazione della funzione come se fosse una stringa (ƒ saluta(nome) {console.log('Benvenut* ' + nome);})

//FUNZIONE SENZA PARAMETRI E SENZA VALORE DI RITORNO (OUTPUT)
function sommaDieciCinque() {
  let a = 10;
  let b = 5;
  let result = a + b;
  console.log(result);
}

sommaDieciCinque();

//FUNZIONE CON PARAMETRI SENZA VALORE DI RITORNO
function somma(a, b) {
  let result = a + b;
  console.log(result);
}

somma(8, 7);
somma(6, 2);
somma(455214454555, 58743211.25545556);
let risultato = somma(10, 10);
console.log(risultato);
console.log(somma(6, 2));

//FUNZIONE CON PARAMETRI E VALORE DI RITORNO
function sommaConOutput(a, b) {
  let result = a + b;
  return result; //return butta fuori in output un valore
  //se qui ci fosse del codice non verrebbe eseguito perchè return interrompe la funzione restituendo un valore
  console.log('dopo return');
}

risultato = sommaConOutput(10, 1);
console.log(risultato);
console.log(sommaConOutput(6, 2));

let prova = 5;
let prova2 = sommaConOutput(prova, 7);
console.log(sommaConOutput(prova, sommaConOutput(1, 1)));

//ESERCIZI
//1.Scrivi una funzione che prenda tre parametri, base e altezza e isTriangolo, e restituisca l'area del rettangolo o triangolo corrispondente.
function getArea(b, h, isTriangolo = false) {
  //isTriangolo=false significa che se il parametro non è passato vale false di default
  let dividendo = typeof isTriangolo == 'boolean' && isTriangolo ? 2 : 1;
  let area = (b * h) / dividendo;
  return area;
}

console.log(getArea(4, 5));

//soluzione 2 con if e verifica che il terzo parametro sia booleano
function getArea2(b, h, isTriangolo) {
  let area = b * h;
  if (typeof isTriangolo == 'boolean' && isTriangolo) {
    area /= 2;
  }
  return area;
}
console.log(getArea2(4, 5, 5));

//altro modo con semplificazione della condizione dell'if
function getArea3(b, h, isTriangolo) {
  if (typeof isTriangolo == 'boolean' && isTriangolo) {
    return (b * h) / 2;
  }
  return b * h;
}

console.log(getArea3(10, 5)); //se non passo il terzo parametro risulta undefined e quindi if (isTriangolo) vale false

//2.Scrivi una funzione che dati due argomenti numerici ne restituisca la divisione;
function dividi(num1, num2) {
  return num1 / num2;
}

dividi(10, 0);

//3. Scrivi un funzione che dati due argomenti numerici ritorni true o false a seconda che il primo argomento sia un multiplo del secondo;
function isMultiplo(num1, num2) {
  return num1 % num2 === 0;
}

console.log(isMultiplo(10, 7));

//4.Scrivi una funzione che restituisca la somma degli elementi di un array numerico
numeri = [1, 2, 3, 4, 5, 6, 7, 8];
function sommaArray(arr) {
  let somma = 0;
  for (const numero of numeri) {
    risultato += parseInt(numero);
  }
  return risultato;
}

console.log(sommaArray(numeri));

//5. Scrivi una funziona che concateni tutti gli elementi di un array separandoli con lo spazio

let fiori = ['ciclamino', 'orchidea', 'margherita', 'rosa'];

function concatenaArray(arr) {
  let risultato = '';
  for (let elemento of arr) {
    risultato += elemento + ' ';
  }
  return risultato;
}
console.log(concatenaArray(fiori));

//5a. Come prima ma voglio dare la possibilità di scegliere il separatore che di default rimane lo spazio. L'ultimo elemento deve essere seguito da un punto.

//N.B. Usando il ciclo for of per determinare l'ultimo elemento devo definire prima del ciclo un contatore che mi indichi quante iterazioni sono già state compiute. Il valore che mi permette di ragionare è la lunghezza dell'array.

function concatenaArray2(arr, sep = ' ') {
  let counter = arr.length;
  let risultato = '';
  for (let elemento of arr) {
    risultato += elemento + (counter > 1 ? sep : '.');
    counter--;
  }
  return risultato;
}

console.log(concatenaArray2(fiori, ', '));
console.log(concatenaArray2(fiori, ' | '));
