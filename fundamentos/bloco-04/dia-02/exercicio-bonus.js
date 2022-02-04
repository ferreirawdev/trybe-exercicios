/* ------------------ BÔNUS ------------------ */

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux;
let i;
let j;

/* --------------- Exercício 1 --------------- */
// Ordene o array numbers em ordem crescente e imprima seus valores;

for (i = 1; i < numbers.length; i += 1) {
    for (j = 0; j < i; j += 1) {
        if (numbers[i] < numbers[j]) {
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers);

/* --------------- Exercício 2 --------------- */
// Ordene o array numbers em ordem decrescente e imprima seus valores;

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 1; i < numbers.length; i += 1) {
    for (j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers);

/* --------------- Exercício 3 --------------- */
// Agora crie um novo array a partir do array numbers, sem perdê-lo.
// Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (i = 0; i < numbers.length; i += 1){
    if (i + 1 < numbers.length) {
        newNumbers.push(numbers[i] * numbers[i + 1]);
    } else {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log(newNumbers);