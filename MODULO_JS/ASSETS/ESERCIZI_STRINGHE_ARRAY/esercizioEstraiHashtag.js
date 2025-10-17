//elementi DOM
const inputTA = document.getElementById('testoInput');
const outputArt = document.getElementById('testoOutput');
const btn = document.querySelector('button');
const labelOutput = document.querySelector('label[for="testoOutput"]');
//ALTRE VARIABILI
const results = [];
const labelOrig = labelOutput.textContent;

//GESTIONE DEGLI EVENTI
btn.addEventListener('click', valorizzaOutput);

inputTA.addEventListener('change', valorizzaOutput);

//FUNZIONI DI UTILITA'
function valorizzaOutput() {
  let inputValue = inputTA.value.trim();
  let outputValue = '';
  //se l'utente non ha scritto niente do errore
  if (inputValue.length == 0) {
    outputValue = 'inserisci parole';
  } else {
    const words = inputValue.split(' ');
    const hashWords = words.filter(parola => parola.startsWith('#') && parola.length > 1);
    outputValue =
      hashWords.length == 0 ? 'nessun hashtag trovato' : hashWords.map(parola => '<p>' + parola + '</p>').join('');
  }
  outputArt.innerHTML = outputValue;
}
