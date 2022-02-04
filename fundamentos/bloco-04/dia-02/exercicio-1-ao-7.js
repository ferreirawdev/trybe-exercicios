// Leia atentamente os enunciados e faça o que se pede!
// Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i; // Já deixa o contador declarado

/* --------------- Exercício 1 --------------- */
// percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}

// for (let number of numbers){
//     console.log(number[i]);
// }

/* --------------- Exercício 2 --------------- */
// some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}

// for (soma of numbers){
//     soma += numbers[i];
// }

console.log(soma);

/* --------------- Exercício 3 --------------- */
// calcule e imprima a média aritmética dos valores contidos no array;

let media = soma/(numbers.length - 1);

console.log(media);

/* --------------- Exercício 4 --------------- */
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem:
// "valor menor ou igual a 20";

if (media > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

/* --------------- Exercício 5 --------------- */
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for (i = 0; i < numbers.length; i += 1){
    if (numbers[i] > maior){
        maior = numbers[i];
    }
}

console.log(maior);

/* --------------- Exercício 6 --------------- */
// Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0;

for (i = 0; i < numbers.length; i += 1){
    if ((numbers[i] % 2) != 0){
        impares += 1;
    }
}

if (impares > 0){
    console.log(impares);
} else {
    console.log('nenhum valor ímpar encontrado');
}

/* --------------- Exercício 7 --------------- */
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = maior;

for (i = 0; i < numbers.length; i += 1){
    if (numbers[i] < menor){
        menor = numbers[i];
    }
}

console.log(menor);