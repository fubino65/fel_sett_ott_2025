//CASI FALSY ("",0,-0,null, NaN, undefined,)
let a = '';
console.log(a ? 'true' : 'false');

let b = -0; //oppure 0
console.log(b ? 'true' : 'false');

b = null;
console.log(b ? 'true' : 'false');

b = undefined;
console.log(b ? 'true' : 'false');

b = NaN;
console.log(b ? 'true' : 'false');

//ATTENZIONE UNA VARIABILE STRINGA CON VALORE 0 NON E' FALSY PERCHE' NON E' STRINGA VUOTA E NON E' 0!!!!!

//SE UNA VARIABILE NON E' FALSY E' TRUTHY
let c = '';
let d = 24;

console.log(d < 30 && c ? 'true' : 'false');

console.log(d % 7 ? 'non multiplo' : 'multiplo');
