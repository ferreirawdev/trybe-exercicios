/* --------------- Exercício 1 --------------- */
// Crie um objeto player contendo as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

/* --------------- Exercício 2 --------------- */
// Acesse as chaves name , lastName e age e concatene as suas informações
// para imprimir no console uma mensagem no seguinte formato: "A jogadora
// Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

/* --------------- Exercício 3 --------------- */
// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um
// array contendo as datas em que a jogadora Marta foi considerada
// a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

/* --------------- Exercício 4 --------------- */
// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato:
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

/* --------------- Exercício 5 --------------- */
// Acesse a chave medals e faça um console.log no seguinte formato:
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

/* ------------- FOR/IN e FOR/OF ------------- */
/* --------------- Exercício 1 --------------- */
// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem
// 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let name in names){
    console.log('Olá, ' + names[name]);
}

/* --------------- Exercício 2 --------------- */
// Usando o objeto abaixo, utilize for/in e imprima um console.log
// com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car){
    console.log(key + ': ' + car[key]);
}

/* ----------------- FUNÇÕES ----------------- */
// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1.

/* --------------- Exercício 1 --------------- */
// Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas constantes, a e b,
// definidas no começo com os valores que serão operados.

// const a = 72;
// const b = 18;

/* ---------- Programa 1 ---------- */
// console.log(a + b);

/* ---------- Programa 2 ---------- */
// console.log(a - b);

/* ---------- Programa 3 ---------- */
// console.log(a * b);

/* ---------- Programa 4 ---------- */
// console.log(a / b);

/* ---------- Programa 5 ---------- */
// console.log(a % b);

function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function modulo(a, b){
    return a % b;
}

/* --------------- Exercício 2 --------------- */
// Faça um programa que retorne o maior de dois números.
// Defina, no começo do programa, duas constantes com os
// valores que serão comparados.

function maiorNumero (num1, num2){
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

/* --------------- Exercício 3 --------------- */
// Faça um programa que retorne o maior de três números.
// Defina, no começo do programa, três constantes com os
// valores que serão comparados.

function maiorDeTres(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else {
        return num3;
    }
}

/* --------------- Exercício 4 --------------- */
// Faça um programa que, dado um valor recebido como parâmetro,
// retorne "positive" se esse valor for positivo, "negative"
// se for negativo e "zero", caso contrário.

function positivoNegativo(valor){
    if (valor > 0){
        return 'positive';
    } else if (valor < 0){
        return 'negative';
    } else {
        return 'zero';
    }
}

/* --------------- Exercício 5 --------------- */
// Faça um programa que receba três constantes com os valores dos
// três ângulos internos de um triângulo. Retorne true se os ângulos
// representarem os ângulos de um triângulo e false, caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangulo (alfa, beta, gama){
    let somaAngulos = alfa + beta + gama;
    if (alfa >= 180 || beta >= 180 || gama >= 180) {
        return 'Um triângulo não pode ter um ângulo maior ou igual a 180°';
    } else if (alfa < 0 || beta < 0 || gama < 0) {
        return 'Não existe ângulo negativo em um triângulo';
    } else if (somaAngulos === 180){
        return 'true';
    } else if (somaAngulos < 180 || somaAngulos > 180) {
        return 'false';
    }
}