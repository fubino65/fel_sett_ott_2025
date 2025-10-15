//ROUND() arrotondamento per eccesso o per difetto all'intero più vicino
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.round(-4.5));
console.log(Math.round('-4.5'));
console.log(Math.round('pippo'));

//FLOOR() arrotondamento all'intero inferiore indipendentemente dai decimali
console.log(Math.floor(4.3));
console.log(Math.floor(4.9));
console.log(Math.floor(-4.5));

//CEIL() arrotondamento all'intero superiore indipendentemente dai decimali
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.9));
console.log(Math.ceil(-4.5));

//TRUNC() restituisce la parte intera di un numero decimale compreso il segno
console.log(Math.trunc(4.3));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.5));

//MIN() restituisce il numero più piccolo all'interno di un elenco di numeri
console.log(Math.min(4, 5, 2, 8, 7));
console.log(Math.min([4, 5, 2, 8, 7])); //non posso sostituire l'elenco di numeri con un array

console.log(Math.min(...[4, 5, 2, 8, 7])); //... = spread operator: trasforma un array in un elenco di elementi. Lo destruttura

//MAX() restituisce il numero più grande all'interno di un elenco di numeri
console.log(Math.max(4, 5, 2, 8, 7));
console.log(Math.max([4, 5, 2, 8, 7]));
let numeri = [4, 5, 2, 8, 7];
console.log(Math.max(...numeri));

//RANDOM() restituisce un numero casuale compreso fra 0 compreso e 1 escluso
console.log(Math.random());
//generalmente viene usato insieme al metodo floor() o al metodo ceil()
//voglio generare un numero casuale compreso fra 0 e 3 compreso
let limiteSup = 3;
console.log(Math.floor(Math.random() * (limiteSup + 1))); //restituisce un numero fra 0 e il limite superiore compreso
console.log(Math.floor(Math.random() * limiteSup)); //restituisce un numero fra 0 e il limite superiore escluso
console.log(Math.ceil(Math.random() * limiteSup)); //restituisce un numero fra 1 e il limite superiore compreso
console.log(Math.ceil(Math.random() * (limiteSup - 1))); //restituisce un numero fra 1 e il limite superiore escluso

let limiteInf = 2;
limiteSup = 4;
let range = limiteSup - limiteInf;
console.log(range);
console.log(Math.floor(Math.random() * (range + 1)) + limiteInf);

function generaNumeroCasualeInRange(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.floor(Math.random() * (range + 1)) + limiteInf;
}

console.log(generaNumeroCasualeInRange(0, 3));
console.log(generaNumeroCasualeInRange(2, 5));
console.log(generaNumeroCasualeInRange(-4, -2));

const classe = [
  'ALBERTO',
  'CHIARA',
  'DANIELA',
  'LORENZO',
  'SANTI',
  'WANDA',
  'ALIAKSANDRA',
  'SABRINA',
  'ROBERTA',
  'YEVGENIY',
  'ANNA',
  'LIDIA',
  'SILVIA',
  'ANTONIO',
  'SALVATORE',
  'ILARIA'
];
