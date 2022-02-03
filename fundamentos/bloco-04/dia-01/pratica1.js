const myName = 'Wellington';
const birthCity  = 'Petrópolis';
let birthYear = '1993';

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = '2030';
console.log(birthYear);

/* O erro no código abaixo acontece porque 'birthCity' é uma constante,
não podendo ter seu valor alterado */

birthCity = 'Curitiba';
console.log(birthCity);