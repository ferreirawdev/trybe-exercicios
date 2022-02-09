// Declaração das variáveis de controle dos laços for
let i;
let j;

/* --------------- Exercício 1 --------------- */
// Faça um programa que receba uma string em algarismos romanos
// e retorne o número que a string representa.

const algarismosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}

function romanoParaDecimal(numero){
    numero = numero.toLowerCase();
    let tam = numero.length;
    let soma = algarismosRomanos[numero[tam - 1]];
    let numeroAtual = algarismosRomanos[numero[tam - 1]];
    for (i = 2; i <= tam; i += 1){
        let proxNumero = algarismosRomanos[numero[tam - i]];
        if (numeroAtual <= proxNumero){
            soma += proxNumero;
        } else {
            soma -= proxNumero;
        }
        numeroAtual = proxNumero;
    }
    return soma;
}

console.log(romanoParaDecimal('MMXVIII'));
console.log(romanoParaDecimal('VI'));
console.log(romanoParaDecimal('IV'));

/* --------------- Exercício 2 --------------- */
// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for, percorra essa variável, busque os números pares e os
// adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector){
    let pares = [];
    for (i = 0; i < vector.length; i += 1){
        let numeros = vector[i];
        for (j = 0; j < numeros.length; j += 1){
            let numeroAtual = numeros[j];
            if ((numeroAtual % 2) === 0){
                pares.push(numeroAtual);
            }
        }
    }
    return pares;
}

console.log(arrayOfNumbers(vector));

/* --------------- Exercício 3 --------------- */
// A partir do array de frutas basket, retorne um objeto que contenha o
// nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'],
// deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 }
// quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato:
// Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
    blocoUm: [{
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },],
    blocoDois: [{
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },],
};

/* --------------- Exercício 4 --------------- */
// Acesse as chaves nome, sobrenome, andar e apartamento do último morador
// do blocoDois e faça um console.log no seguinte formato:
// "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

/* --------------- Exercício 5 --------------- */
// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1,
// acessando suas chaves nome e sobrenome,
// depois faça o mesmo para os moradores do bloco 2.

for (i = 0; i < moradores.blocoUm.length; i += 1){
    console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
}
  
for (i = 0; i < moradores.blocoDois.length; i += 1){
  console.log(moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome);
}