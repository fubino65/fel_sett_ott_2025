//PER LE OPERAZIONI UN PO' COMPLESSE CON I NUMERI E LE CONVERSIONI ALMENO ALL'INIZIO GUARDARE ONLINE O DOVE VOLETE LE VARIE SFUMATURE CHE POSSONO TRARRE IN INGANNO.

Number.isNaN;
console.log(Number.isNaN('Ciao')); //non converte le stringhe
console.log(Number.isNaN(+'ciao'));
console.log(Number.isNaN(0 / 0));

let numero = 100.99;
console.log(numero.toFixed()); //TO FIXED RICORDA CHE ARROTONDA!!!
console.log(parseInt(numero)); //PARSEINT RESTITUISCE LA PARTE INTERA SENZA ARROTONDARE!!!
numero = 100.29;
console.log(numero.toFixed());
numero = 100.29464563;
console.log(numero.toFixed(2));

console.log(Number.isNaN(NaN)); // true
console.log(isNaN(NaN));
console.log(Number.isNaN(Number.NaN));
isNaN(Number.NaN); // true
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(42)); // false
console.log(Number.isNaN('NaN')); // false (non converte stringhe)
console.log(isNaN('NaN'));
console.log(isNaN('fulvia'));
console.log(isNaN('12fulvia'));

console.log(Number.isFinite('123')); //non converte la stringa
console.log(isFinite('123')); //trasforma in numero
console.log(isFinite('12ciao'));

console.log(typeof Number(5));
console.log(Number('123ciao'));
console.log(Number(''));

console.log(typeof new String(23));
console.log(typeof String(23));
console.log(typeof '23');

console.log(23 + '');
