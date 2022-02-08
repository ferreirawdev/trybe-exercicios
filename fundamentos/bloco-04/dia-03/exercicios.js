// Declaração da variável de controle dos laços for
let i;
let j;

/* --------------- Exercício 1 --------------- */
// O fatorial é a multiplicação de um número natural pelos seus antecessores,
// exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (i = 10; i > 0; i -= 1){
    fatorial *= i;
}

console.log(fatorial);

/* --------------- Exercício 2 --------------- */
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
// Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para
// verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let palavraInvertida = '';

for (i = word.length - 1; i >= 0; i -= 1){
    palavraInvertida += word[i];
}

console.log(palavraInvertida);

/* --------------- Exercício 3 --------------- */
// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que
// retorne a menor. Considere o número de caracteres de cada palavra.

let palavraMaior = array[0];
let palavraMenor = array[0];

for (i = 0; i < array.length; i += 1){
    if (palavraMaior.length < array[i].length){
        palavraMaior = array[i];
    }
}

for (i = 0; i < array.length; i += 1){
    if (palavraMenor.length > array[i].length){
        palavraMenor = array[i];
    }
}

console.log(palavraMaior);
console.log(palavraMenor);

/* --------------- Exercício 4 --------------- */
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso,
// escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;

for (i = 0; i <= 50; i += 1){
    let ePrimo = true;
    for (j = 2; j < i; j += 1){
        if (i % j === 0){
            ePrimo = false;
        }
    }
    if (ePrimo){
        maiorPrimo = i;
    }
}

console.log(maiorPrimo);