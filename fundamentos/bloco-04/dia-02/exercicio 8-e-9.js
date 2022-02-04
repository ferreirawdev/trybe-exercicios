let i;

/* --------------- Exercício 8 --------------- */
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let meuArray = [];

for (i = 0; i < 25; i += 1){
    meuArray.push(i + 1);
}

console.log(meuArray);

/* --------------- Exercício 9 --------------- */
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (i = 0; i < meuArray.length; i += 1){
    console.log(meuArray[i] / 2);
}