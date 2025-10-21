//COSTANTI
const MSG_OBBLIGATORIO = 'campo obbligatorio';

//ELEMENTI DEL DOM
const form = document.getElementById('wineForm');
console.log(form.nome);
const campiDaValidare = document.querySelectorAll('.toValidate');
const esitoP = document.getElementById('esito');

//altre variabili
let valid = true;
let vini = [new Vino('Bruciato', 'Antinori', '2021', 'Rosso'), new Vino('Chianti', 'Piccini', '2021', 'Rosso')];

//GESTIONE EVENTI
form.addEventListener('submit', e => {
  valid = true; //resetto la variabile nel caso ci siano stati prima degli errori
  e.preventDefault(); //mette in pausa il richiamo della action. Necessario per poter eseguire la validazione dei campi.

  for (const campo of campiDaValidare) {
    validaCampo(campo);
  }
  if (valid) {
    vini.forEach(vino => {
      console.log(vino.nome);
      console.log(form.nome.value.trim());
      if (vino.nome.trim().toUpperCase() == form.nome.value.trim().toUpperCase()) {
        esitoP.textContent = 'Vino già censito';
        return;
      }
      esitoP.textContent = 'ok';
    });
  }
});

//ALTRE FUNZIONI
function validaCampo(campo) {
  //questa function volendo potrei anche dichiararla all'interno dell'event listener
  campo.nextElementSibling.textContent = '';
  if (campo.value.trim() == '') {
    valid = false;
    campo.nextElementSibling.textContent = MSG_OBBLIGATORIO;
  }
}

//COSTRUTTORE OGGETTO VINO
function Vino(nome, produttore, anno, tipo) {
  this.nome = nome;
  this.produttore = produttore;
  this.anno = anno;
  this.tipo = tipo;
}
