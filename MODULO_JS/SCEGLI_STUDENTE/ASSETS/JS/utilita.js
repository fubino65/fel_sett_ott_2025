function generaNumeroCasualeInRange(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.floor(Math.random() * (range + 1)) + limiteInf;
}

function isDataSuccessiva(data1, data2) {
  return data2 > data1;
}
