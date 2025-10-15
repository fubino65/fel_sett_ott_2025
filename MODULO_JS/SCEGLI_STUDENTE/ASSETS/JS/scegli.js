const btn1 = document.getElementById('btn1');
const risultatoSpan = document.getElementById('risultato');

//altre variabili
const studenti = [
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

//GESTIONE EVENTI
btn1.addEventListener('click', () => {
  risultatoSpan.classList.remove('lampeggio');
  risultatoSpan.innerText = studenti[generaNumeroCasualeInRange(0, studenti.length - 1)];
  risultatoSpan.offsetWidth; //forza il ricalcolo del layout
  risultatoSpan.classList.add('lampeggio');
});
