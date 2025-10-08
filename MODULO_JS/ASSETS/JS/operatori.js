/***************** OPERATORI UNARI ****************/

//****** meno unario (inverte il segno di una variabile numerica)
let num = 24;
console.log(-num);
console.log(num);
num = -num; //per cambiare segno alla variabile devo riassegnare se stessa con il meno unario
console.log(num);
let stringa = 'ciao';
//se la variabile non è numerica otteniamo il classico valore NaN che indica che il valore non può essere numerico
console.log(-stringa);

//****** più unario (cerca di convertire una variabile non numerica in un numero)
stringa = '52.31';
console.log(stringa);
console.log(+stringa);
stringa = '52volte';
//se la variabile non è numerica otteniamo il classico valore NaN che indica che il valore non può essere numerico
console.log(+stringa);

//****** not logico ! (nega, quindi inverte il valore di un booleano)
let bool = true;
console.log(!bool);
console.log(bool);
bool = !bool;
console.log(bool);

//****** Operatori di incremento ++ o decremento -- (aggiungono o sottraggono una unità dalla variabile di partenza). N.B. cambiano la variabile su cui sono applicati

let num2 = 5;
// num2++;
++num2;
console.log(num2);
// num2--;
--num2;
console.log(num2);
// 6++; espressione non valida perchè il ++ (e il --) può essere applicato solo alle variabili

//caso postfix (++ o --  a destra della variabile) In una espressione prima viene usata la variabile e solo dopo incrementata o decrementata
num2 = 4;
console.log(num2++);
console.log(num2);
let num3 = num2++;
console.log(num3);
console.log(num2);

//caso prefix (++ o --  a sinistra della variabile) In una espressione prima incrementata o decrementata la variabile e solo dopo viene usata.
num2 = 4;
console.log(++num2);
console.log(num2);
num3 = ++num2;
console.log(num3);
console.log(num2);

/***************** OPERATORI BINARI ****************/

//****** MATEMATICI
// + - * / per le quattro operazioni
//% -> modulo (restituisce il resto di una divisione)
console.log(10 % 3);
console.log(10 % 2);
console.log(10 % 0); //NaN  perchè non è possibile calcolare il resto visto che il risultato di una divisione per 0 è = a infinity
console.log(10 / 0);

//****** RELAZIONALI (restituiscono sempre un booleano)
num = 5;
num2 = '5';
console.log(num < num2);
console.log(num <= num2);
console.log(num >= num2);
console.log(num > num2);

console.log(num == num2); //testa solo il valore
console.log(num === num2); //testa sia il valore che il tipo di dato
stringa = 'ciao';
console.log(num == stringa);
console.log(num === stringa);
console.log(num != stringa);
console.log(num !== stringa);

//******OPERATORI DI ASSEGNAZIONE COMPOSTI (vale per tutte le operazioni)
num = 9;
//voglio incrementare num di 3
num = num + 3;
num += 3; //forma contratta di esprimere l'espressione della riga precedente
console.log(num);
//voglio decrementare num di 5
// num = num - 5;
num -= 5;
console.log(num);

//altezza durante la vita di fulvia
let altezza = 130;
//durante l'anno si alza di 5 cm
// altezza = altezza +5;
altezza += 5;
console.log(altezza);
//durante i seguenti due anni si alza di 15cm
altezza += 15;
console.log(altezza);
//alla fine si alza di 13 cm
altezza += 13;
console.log(altezza);
//con la vecchiaia si accorcia di 3 cm
altezza -= 3;
console.log(altezza);

//******OPERATORE DI CONCATENAZIONE DELLE STRINGHE +
let nome = 'Filippo';
let nome2 = 'Rita';
let nome3 = 'Doris';
console.log('I miei migliori amici sono ' + nome + ', ' + nome2 + ', ' + nome3 + '.');
//Concatenazione usando il template literal
console.log(`I miei migliori amici sono ${nome}, ${nome2}, ${nome3}.`);

//ATTENZIONE: QUANDO CONCATENO NUMERI CON ALMENO UNA STRINGA SOMMA FINO A CHE RIESCE E POI CONCATENA!!!!
num = 10;
num2 = '5';
num3 = 20;
//Numero + stringa (concatena e il risultato finale è una stringa )
console.log(num + num2);
//numero + numero + stringa (somma i primi due numeri e poi concatena con la stringa: il risultato finale è una stringa)
console.log(num + num3 + num2);
//numero + stringa+ numero  (concatena il primo numero con la stringa e poi concatena il terzo numero: il risultato finale è una stringa)
console.log(num + num2 + num3);
//trasformo tutti gli operandi in numeri (se sono già numeri rimangono numeri)
console.log(+num + +num2 + +num3);

//******OPERATORI LOGICI
let divisore = 3;
let dividendo = 27;
console.log(dividendo / divisore);
//voglio testare se il divisore è maggiore 3 E dividendo è un multiplo di divisore
console.log(divisore >= 3 && dividendo % divisore == 0);

let frutto1 = 'pesca';
let frutto2 = 'albicocca';
let frutto3 = 'albicocca';
//voglio sapere se c'è almeno un frutto che si ripete
console.log(frutto1 == frutto2 || frutto2 == frutto3 || frutto1 == frutto3);

//******OPERATORI DI TIPO
//typeof (solo per i tipi primitivi e le function. Restituisce sempre ua stringa (string, number, boolean, function..))
console.log(typeof frutto1);
//voglio sapere se frutto1 è una stringa
console.log(typeof frutto1 == 'string');
//voglio sapere se frutto1 è un numero
console.log(typeof frutto1 == 'number');
//voglio sapere se divisore è un numero
console.log(typeof divisore == 'number');
//voglio sapere se divisore è un numero e frutto1 è una stringa
console.log(typeof divisore == 'number' && typeof frutto1 == 'string');

//ESERCIZI
//1. stampa sulla console il risultato del confronto fra due variabii numeriche per verificare se la prima è maggiore della seconda
num = 7;
num2 = 3;
console.log(num > num2);

//2. Dichiara la variabile num e assegnale un valore numerico. Dichiara un’altra variabile numerica num2 e assegna a questa num++; Stampa nella console il valore della variabile num e della variabile num2; Cosa osservi? Come lo spieghi?
num = 7;
num2 = num++;
console.log(num2);
console.log(num);

num = 7;
num2 = ++num;
console.log(num2);
console.log(num);

//3.Calcola l'area di un rettangolo i cui lati sono lunghi rispettivamente 4 e 6. Stampa il risultato nella console

let base = 6;
altezza = 4;
let area = base * altezza;
console.log(area);

//4. Data una variabile numerica verificare se è pari
num = 6;
console.log('num è pari? ', num % 2 == 0);

//4a. Data una variabile numerica verificare se è dispari
num = 25;
console.log('num è dispari? ', num % 2 == 1);
console.log('num è dispari? ', num % 2 != 0);
console.log('num è dispari? ', !(num % 2 == 0));

//5. Date due variabili numeriche valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.
num = 4;
num2 = 15;
console.log((num > 0 && num2 < 20) || num === 5); //le parentesi rosa non sono necessarie (perchè la && ha precedenza sul ||)ma sono cmq utili a comprendere più velocemente il senso del codice

//6. Date due stringhe valutare se stringa1 non è vuota ("", '', ``) e stringa2 non è la parola "treno".
let str1 = '000';
let str2 = 'treno';

console.log(!str1 == '' && str2 !== 'treno');
console.log(str1 != '' && str2 !== 'treno');

//soluzione al contrario: per essere coerente devo trasformare && in ||
console.log(str1 == '' || str2 == 'treno');

//7. Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.
num = 4;
num2 = 15;
num3 = 21;

console.log((num > 0 || num2 < 20) && num3 >= 10 && num3 <= 20);

//guarda come cambia il risultato se tolgo le parentesi (o le sposto perchè il formattatore me le sposta sugli end)
console.log(num > 0 || (num2 < 20 && num3 >= 10 && num3 <= 20));

// 8.	Definisci una variabile che ha come valore il numero di partecipanti a una festa, un’altra variabile che ha come valore le bottiglie di birra che sono state acquistate e una terza che ha come valore  la capacita delle bottiglie. Stampa sulla console quanta birra può bere in media ciascun partecipante
let partecipanti = 20;
let numBottiglie = 70;
let capacita = 0.6;
let risultato = (numBottiglie * capacita) / partecipanti;
console.log(`Ogni partecipante potrà bere in media ${risultato}l di birra.`);
console.log('Ogni partecipante potrà bere in media ' + risultato + 'l di birra.');
