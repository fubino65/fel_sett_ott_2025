function generaNumeroCasualeInRange(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.floor(Math.random() * (range + 1)) + limiteInf;
}
