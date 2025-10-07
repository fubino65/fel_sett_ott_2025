// Le stringhe delimitate da "" o '' non possono andare a capo, non possono essere spezzate su più righe.

//TEMPLATE LITERAL
//E'delimitata dai backtick (scrivere tl + invio) stringa a tutti gli effetti che però può essere spezzata su più righe e può risolvere al suo interno espressioni javascript racchiuse in ${espressione}. Per scrivere ${} digitare tlv seguito da ctrl+space e poi invio

let prova = 'ciao io mi chiamo';
prova += ' Fulvia';
console.log(prova);

prova = `io invece mi chiamo
Paola`;
console.log(prova);
let cognome = 'stilton';
console.log(`nome = ${nome} cognome = ${cognome}`);
