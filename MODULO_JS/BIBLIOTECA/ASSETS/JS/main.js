//COSTANTI
const MSG_OBBLIGATORIO = 'Campo obbligatorio';
const CODICE_LENGTH = 3;
//const CODICE_REGEX = /^\d{3}$/;
const CODICE_REGEX = new RegExp(`^\\d{${CODICE_LENGTH}}$`); //una regex può anche essere ricavata da una stringa. Attenzione gli slash iniziale e finale non devono esserci nella stringa, e i backslash devono essere escapati con un altro backslash
const LS_KEY = 'biblio';
const SUBMIT_REGISTRA = document.querySelector('form input[type="submit"]').value;
const SUBMIT_MODIFICA = 'Modifica';

//ELEMENTI DEL DOM
const form = document.querySelector('form');
const campiDaValidare = document.querySelectorAll('.toValidate');
const tabella = document.querySelector('table');
const esitoP = document.getElementById('esito');
const deleteAllBtn = document.getElementById('deleteAll');
const submitBtn = document.querySelector('form input[type="submit"]');

//ALTRE VARIABILI
let isValido = true;
let fromLs = JSON.parse(localStorage.getItem(LS_KEY));
let libri = fromLs ? fromLs : []; //se nel ls non c'è nulla per quella chiave libri è null e non è iterabile perchè non è un array.

for (let libro of libri) {
  popolaRigaTabella(libro);
}

//GESTIONE EVENTI
deleteAllBtn.addEventListener('click', () => {
  //cancellare le righe della tabella
  //N.B. L'intestazione è una riga
  //num righe tabella => tabella.rows.length
  //cancellazione righe tabella
  while (tabella.rows.length > 1) {
    console.log(tabella.rows.length); //la lunghezza della tabella decresce man mano che le righe vengono cancellate
    tabella.deleteRow(1); //cancella sempre la prima riga
    // table.deleteRow(table.rows.length - 1); stesso risultato ma partendo dall'ultima riga
  }
  //svuotare l'array libri
  libri = [];
  //allineare il localstorage
  //localStorage.clear();//svuoto tutto il localstorage
  // localStorage.removeItem(LS_KEY);
  localStorage.setItem(LS_KEY, null);
});

for (const campo of campiDaValidare) {
  campo.addEventListener('change', () => validaCampo(campo));
}

form.addEventListener('submit', e => {
  e.preventDefault(); //blocca l'esecuzione della submit
  isValido = true; //reset del flag
  esitoP.textContent = ''; //reset del messaggio di errore

  for (let campo of campiDaValidare) {
    validaCampo(campo);
  }
  //FINE VALIDAZIONE
  if (isValido) {
    //controllare se il codice è già esistente => valorizzo il campo esito con un messaggio di errore e mi fermo
    //console.log(arr.some(element => element > 3)); // true
    if (libri.some(element => element.codice === form.codice.value) && submitBtn.value != SUBMIT_MODIFICA) {
      esitoP.textContent = 'Codice già registrato';
      form.codice.focus();
    } else {
      //caso codice non esistente

      //Creo un oggetto libro
      let libro = new Libro(form.titolo.value.trim(), form.autore.value.trim(), form.codice.value, form.genere.value);
      let indice = '';
      if (submitBtn.value != SUBMIT_MODIFICA) {
        //aggiungo l'oggetto libro a un array di oggetti libro
        libri.push(libro);
      } else {
        //CASO MODIFICA
        indice = libri.findIndex(libro => libro.codice == form.codice.value);
        libri[indice] = {...libro};
        indice++;
      }

      //metto l'array libri nel localstorage
      localStorage.setItem(LS_KEY, JSON.stringify(libri));
      //aggiungo una riga nella tabella
      popolaRigaTabella(libro, indice);
      //svuoto il form e metto il focus sul primo campo
      form.reset();
      form.titolo.focus();
      submitBtn.value = SUBMIT_REGISTRA;
      form.codice.removeAttribute('readonly');
    }
  }
});

//ALTRE FUNZIONI
function validaCampo(campo) {
  let messaggio = ''; //resetto i messaggi
  if (campo.value.trim().length == 0) {
    isValido = false;
    messaggio = MSG_OBBLIGATORIO;
  }

  if (campo.id == 'codice' && !CODICE_REGEX.test(campo.value.trim())) {
    isValido = false;
    messaggio = 'Richieste' + CODICE_LENGTH + 'cifre';
  }
  campo.nextElementSibling.textContent = messaggio; //valorizzo con stringa vuota o messaggio
}

function popolaRigaTabella(libro, indice) {
  console.log(indice);
  let riga;
  if (!indice) {
    console.log('caso aggiunta riga');
    riga = tabella.insertRow();
    riga.insertCell().innerText = libro.titolo;
    riga.insertCell().innerText = libro.autore;
    riga.insertCell().innerText = libro.codice;
    riga.insertCell().innerText = libro.genere;
    riga.setAttribute('data-codice', libro.codice);

    //AZIONI
    let azioni = riga.insertCell();
    //modifica
    let modificaImg = document.createElement('img');
    modificaImg.src = 'ASSETS/MEDIA/edit.png';
    modificaImg.style.cursor = 'pointer';
    modificaImg.setAttribute('title', 'Modifica libro ' + libro.codice);
    azioni.appendChild(modificaImg);
    modificaImg.addEventListener('click', () => {
      form.titolo.value = libro.titolo;
      form.autore.value = libro.autore;
      form.codice.value = libro.codice;
      form.codice.setAttribute('readonly', true);
      form.genere.value = libro.genere;
      submitBtn.value = SUBMIT_MODIFICA;
    });

    //elimina riga
    let eliminaImg = document.createElement('img');
    eliminaImg.src = 'ASSETS/MEDIA/remove.png';
    eliminaImg.style.cursor = 'pointer';
    eliminaImg.setAttribute('title', 'Elimina libro ' + libro.codice);
    azioni.appendChild(eliminaImg);
    eliminaImg.addEventListener('click', () => {
      if (confirm('Stai per rimuovere il libro con codice ' + libro.codice + "Conferma l'operazione")) {
        indice = libri.findIndex(book => book.codice == libro.codice);
        console.log(indice);
        libri.splice(indice, 1);
        // console.log(indice + 1);
        tabella.deleteRow(indice + 1);
        localStorage.setItem(LS_KEY, JSON.stringify(libri));
        return;
      }
    });
  } else {
    console.log('caso modifica riga');
    riga = tabella.rows[indice];
    console.log(riga);
    riga.cells[0].textContent = libro.titolo;
    riga.cells[1].textContent = libro.autore;
    riga.cells[3].textContent = libro.genere;
  }
}

//costruttore oggetto Libro
function Libro(titolo, autore, codice, genere) {
  this.titolo = titolo;
  this.autore = autore;
  this.codice = codice;
  this.genere = genere;
}
