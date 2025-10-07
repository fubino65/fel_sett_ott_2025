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
