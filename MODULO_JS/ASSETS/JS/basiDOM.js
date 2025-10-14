//SELEZIONE OGGETTI HTML

//N.B. fino a quando non useremo i listener degli eventi le manipolazioni che faremo sui vari oggetti html saranno eseguite al caricamento del file js e quindi saranno un po' fini a se stesse. Portiamo pazienza...

//*** Approccio metodi document.getElemen.....
const par1 = document.getElementById('par1'); //getElementoById è al momento il metodo più performante per la selezione da id
console.log(par1);
console.dir(par1);
//tutti i metodi che hanno la parola Elements (plurale) restituiscono una collection (array).
const titoloPrincipale = document.getElementsByTagName('h1')[0]; //so che di h1 ne ho uno solo per cui lo seleziono aggiungendo l'indice 0 alla collection
console.log(titoloPrincipale);

//voglio selezionare tutti gli h2
const titoliH2 = document.getElementsByTagName('h2');

const btn1 = document.getElementById('btn1');

//*** Approccio document.querySelector
const primoParagrafoSect1 = document.querySelector('#sect1 p'); //querySelector restuisce il PRIMO elemento html che soddisfa il criterio di selezione
console.log('primoParagrafoSect1');
console.dir(primoParagrafoSect1);

const paragrafiSect1 = document.querySelectorAll('#sect1 p'); //querySelectorAll restuisce una collection di elementi che soddisfano il criterio di selezione
console.log('paragrafiSect1');
console.dir(paragrafiSect1);
//voglio sapere il testo di par1
console.log(par1.textContent);
//voglio modificare il testo di par1
par1.textContent = 'nuovo testo del paragrafo bbxbvbxcbxcbxbxb';

//voglio aggiungere a tutti gli h2 il testo "modificato da js"
// for (const titolo of titoliH2) {
//     titolo.textContent = titolo.textContent + ' (modificato da js)';
// }

//titoliH2 è l'array di elementi h2 che ho definito a riga 15
for (let i = 0; i < titoliH2.length; i++) {
  const titolo = titoliH2[i]; //rappresenta l'h2 corrente
  titolo.textContent += ' (modificato da js con ciclo for )'; //.textContent è la proprietà che ci permette di leggere e/o di scrivere il contenuto di un oggetto
}

// voglio colorare di rosso il primo paragrafo della section 1
primoParagrafoSect1.style.color = 'red';

//voglio dare un backgroundcolor aqua a tutti i paragrafi figli di section 1
// for (let paragrafo of paragrafiSect1) {
//   paragrafo.style.backgroundColor = 'aqua';
// }

//paragrafiSect1.style.backgroundColor = 'red'; NON SI PUO' FARE!!! DEVO CICLARE

//**** GESTIONE DEGLI EVENTI */
titoloPrincipale.addEventListener('click', () => {
  titoloPrincipale.style.display = 'none';
  console.log(titoloPrincipale.style.color);
  if (titoloPrincipale.style.color == '') {
    titoloPrincipale.style.color = 'blue';
  } else if (titoloPrincipale.style.color == 'blue') {
    titoloPrincipale.style.color = 'fuchsia';
  } else if (titoloPrincipale.style.color == 'fuchsia') {
    titoloPrincipale.style.color = '';
  }
});

btn1.addEventListener('click', () => (titoloPrincipale.style.display = 'block'));
