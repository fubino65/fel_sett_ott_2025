//condizione?se è vero:se è falso

let eta = 17;
console.log(eta >= 18 ? 'Maggiorenne' : 'Minorenne');
eta >= 18 ? console.log('Maggiorenne') : console.log('Minorenne');

//ESERCIZI
// 1.	Dichiara le variabili a, b e assegna a ciascuna un valore che poi modificherai per testare i diversi casi. Se le variabili a e b sono uguali fra di loro come valore e tipo stampare sulla console il loro valore altrimenti stampare “differenti”;
let a = 'scienza';
let b = 'coscienza';

a === b ? console.log(a) : console.log('differenti');

// 2.	Dichiara una variabile a e assegnale un valore che poi modificherai per testare i diversi casi. Se il valore di a è uguale ad “Anna” stampare sulla console “mamma”, altrimenti stringa vuota (cioè “”);

let nome = 'giuseppe';
console.log(nome === 'Anna' ? 'mamma' : '');
console.log(nome === 'Anna' || nome == 'anna' ? 'mamma' : '');

// 3.	Dichiara una variabile gradi e assegnale un valore che poi modificherai per testare i diversi casi. Se il valore della variabile gradi è maggiore di 100 stampare sulla console “sala e butta la pasta” altrimenti “aspetta ancora un attimo”

let gradi = 10;
console.log(gradi >= 100 ? 'sala e butta la pasta' : 'aspetta ancora un attimo');

// 4.	Dichiara una variabile minuti e assegnale un valore che poi modificherai per testare i diversi casi. Se il valore della variabile minuti è minore di 30 stampare sulla console: “non è ancora passata mezz’ora”, altrimenti “vai pure”;
let minuti = 35;
console.log(minuti < 30 ? "non è ancora passata mezz'ora" : 'vai pure!');
