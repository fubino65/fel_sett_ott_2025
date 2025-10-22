//COSTANTI
const MSG_OBBLIGATORIO = 'campo obbligatorio';
const VINILS = 'vini';

//ELEMENTI DEL DOM
const form = document.getElementById('wineForm');
console.log(form.nome);
const campiDaValidare = document.querySelectorAll('.toValidate');
const esitoP = document.getElementById('esito');
const tabella = document.querySelector('#wineTable tbody');

//altre variabili
let valid = true;
// let vini = [new Vino('Bruciato', 'Antinori', '2021', 'Rosso'), new Vino('Chianti', 'Piccini', '2021', 'Rosso')];

//recupero l'array dal ls se esiste
let fromLs = JSON.parse(localStorage.getItem(VINILS));
let vini = fromLs ? fromLs : []; //se nel localstorage non c'è nulla per la chiave VINILS vini fromLs sarà null
console.log(vini);

//dato l'array vini andiamo a prepopolare la tabella
for (const vino of vini) {
  popolaRigaTabella(vino);
}

//GESTIONE EVENTI
form.addEventListener('submit', e => {
  e.preventDefault(); //mette in pausa il richiamo della action. Necessario per poter eseguire la validazione dei campi.

  //RESETS
  valid = true; //resetto la variabile nel caso ci siano stati prima degli errori
  esitoP.textContent = ''; //svuoto il campo

  for (const campo of campiDaValidare) {
    validaCampo(campo);
  }
  if (valid) {
    //SOLUZIONE CON FOREACH
    // vini.forEach(vino => {
    //   let exists = false;
    //   if (vino.nome.trim().toUpperCase() == form.nome.value.trim().toUpperCase() && !exists) {
    //     esitoP.textContent = 'Vino già censito';
    //     exists = true;
    //     return;
    //   }
    // });

    //SOLUZIONE CON FOR OF
    // for (const vino of vini) {
    //   if (vino.nome.trim().toUpperCase() == form.nome.value.trim().toUpperCase()) {
    //     esitoP.textContent = 'Vino già censito';
    //     break;
    //   }
    // }

    //SOLUZIONE CON METODO SOME (TRUE SE ALMENO UNO)
    if (vini.some(vino => vino.nome.trim().toUpperCase() == form.nome.value.trim().toUpperCase())) {
      esitoP.textContent = 'Vino già censito';
    } else {
      //caso in cui il vino non sia già censito
      //creo un oggetto di tipo vino e lo aggiungo all'array dei vini.

      let vino = new Vino(
        form.nome.value.trim().toUpperCase(),
        form.produttore.value.trim().toUpperCase(),
        form.annata.value.trim().toUpperCase(),
        form.tipo.value.trim().toUpperCase()
      );

      let imgFile = form.immagine.files[0];
      console.log('imgfile', imgFile);

      let reader = new FileReader();
      if (imgFile) {
        console.log('Dettagli file:', {
          nome: imgFile.name,
          tipo: imgFile.type,
          dimensione: imgFile.size + ' bytes'
        });

        let reader = new FileReader();

        reader.onloadstart = function () {
          console.log('Lettura iniziata...');
        };

        reader.onprogress = function (e) {
          console.log('Progresso:', e.loaded, '/', e.total);
        };

        reader.onload = function (event) {
          console.log('✅ ONLOAD ESEGUITO!');
          console.log('Lunghezza base64:', event.target.result.length);
          vino.immagine = event.target.result;
          console.log('vino.immagine = ', vino.immagine);
          console.log('prima di vini.push vino = ', vino);
          vini.push(vino);
          //aggiungo l'array nel localStorage
          console.log(JSON.stringify(vini));
          localStorage.setItem(VINILS, JSON.stringify(vini));
          //aggiungo una riga nella tabella
          popolaRigaTabella(vino);
        };

        reader.onerror = function (error) {
          console.error('❌ ERRORE:', error);
          alert('Errore durante la lettura del file');
        };

        reader.onloadend = function () {
          console.log('Lettura terminata');
        };

        console.log('Chiamata readAsDataURL...');
        reader.readAsDataURL(imgFile);
      }
      // console.log('prima di vini.push vino = ', vino);
      // vini.push(vino);
      // //aggiungo l'array nel localStorage
      // console.log(JSON.stringify(vini));
      // localStorage.setItem(VINILS, JSON.stringify(vini));

      //svuoto il form e metto il focus sul primo campo
      form.reset();
      form.nome.focus();

      console.log(JSON.stringify(vini));
    }
  }
}); //fine listener submit

//ALTRE FUNZIONI
function validaCampo(campo) {
  //questa function volendo potrei anche dichiararla all'interno dell'event listener
  campo.nextElementSibling.textContent = ''; //reset span di errore
  if (campo.value.trim() == '') {
    valid = false;
    campo.nextElementSibling.textContent = MSG_OBBLIGATORIO;
  }
}

function popolaRigaTabella(vino) {
  let riga = tabella.insertRow();
  riga.insertCell().innerText = vino.nome;
  riga.insertCell().innerText = vino.produttore;
  riga.insertCell().innerText = vino.anno;
  riga.insertCell().innerText = vino.tipo;
  let img = null;
  if (vino.immagine) {
    console.log('entro nell if');
    img = document.createElement('img');
    img.src = vino.immagine;

    console.log(img);
  }
  console.log('img = ' + img);
  img ? riga.insertCell().appendChild(img) : (riga.insertCell().innerText = '');
}

//COSTRUTTORE OGGETTO VINO
function Vino(nome, produttore, anno, tipo, img) {
  this.nome = nome;
  this.produttore = produttore;
  this.anno = anno;
  this.tipo = tipo;
  this.immagine = img;
}
