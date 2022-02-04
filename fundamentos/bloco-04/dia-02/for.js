/* -------------------- Exemplos -------------------- 
let cars = ['Saab', 'Volvo', 'BMW'];
//

let cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
//

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1){
  console.log(cars[index]);
}
-------------------- Exemplos -------------------- */

/* -------------------- Exercício 1 -------------------- */
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1){
    console.log(groceryList[i]);
}

/* -------------------- FOR/OF -------------------- */

/* -------------------- Exemplos --------------------
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5
//

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
//

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
//

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]
-------------------- Exemplos -------------------- */

/* -------------------- Exercício 1 -------------------- */
// Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names){
    console.log(name);
}