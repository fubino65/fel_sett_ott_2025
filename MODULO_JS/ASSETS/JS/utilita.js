function generaNumeroCasualeInRange(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.floor(Math.random() * (range + 1)) + limiteInf;
}
function isDataSuccessiva(data1, data2) {
  return data2 > data1;
}

function contaOccorrenze(frase, sottostringa) {
  count = 0;
  index = 0;

  while ((index = frase.indexOf(sottostringa, index)) !== -1) {
    count++;
    index += sottostringa.length;
  }
  return count;
}
