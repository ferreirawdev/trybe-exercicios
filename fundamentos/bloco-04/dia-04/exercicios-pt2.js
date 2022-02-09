// Declaração das variáveis de controle dos laços for
let i;
let j;

/* --------------- Exercício 1 --------------- */
// Crie uma função que receba uma string e retorne
// true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra){
    for (i in palavra){
        if (palavra[i] != palavra[(palavra.length - 1) - i]){
            return false;
        }
        return true;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

/* --------------- Exercício 2 --------------- */
// Crie uma função que receba um array de inteiros e retorne
// o índice do maior valor.

function indiceMaiorValor(array){
    let indiceMaior = 0;
    for (i in array){
        if (array[indiceMaior] < array[i]){
            indiceMaior = i;
        }
    }
    return indiceMaior;
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

/* --------------- Exercício 3 --------------- */
// Crie uma função que receba um array de inteiros e retorne
// o índice do menor valor.

function indiceMenorValor(array){
    let indiceMenor = 0;
    for (i in array){
        if (array[indiceMenor] > array[i]){
            indiceMenor = i;
        }
    }
    return indiceMenor;
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

/* --------------- Exercício 4 --------------- */
// Crie uma função que receba um array de nomes e retorne
// o nome com a maior quantidade de caracteres.

function maiorNome(nomes){
    let maiorNome = nomes[0];
    for (i in nomes){
        if (maiorNome.length < nomes[i].length){
            maiorNome = nomes[i];
        }
    }
    return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* --------------- Exercício 5 --------------- */
// Crie uma função que receba um array de inteiros e retorne
// o inteiro que mais se repete.

function maisRepetido(array){
    let repeteco = 0;
    let repeticoes = 0;
    let indexNumero = 0;
    for (i in array){
        let verificaNumero = array[i];
        for (j in array){
            if (verificaNumero === array[j]){
                repeteco += 1;
            }
        }
        if (repeteco > repeticoes){
            repeticoes = repeteco;
            indexNumero = i;
        }
        repeteco = 0;
    }
    return array[indexNumero];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

/* --------------- Exercício 6 --------------- */
// Crie uma função que receba um número natural (número inteiro não negativo) N
// e retorne o somatório de todos os números de 1 até N.

function somatorio(numero){
    let somatorio = 0;
    for (i = 1; i <= numero; i += 1){
        somatorio += i;
    }
    return somatorio;
}

console.log(somatorio(5));

/* --------------- Exercício 7 --------------- */
// Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending){
    word = word.split('');
    ending = ending.split('');
    control = true;
    for (i = 0; i < ending.length; i += 1){
      if (word[word.length - ending.length + i] != ending[i]){
        control = false;
      }
    }
    return control;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));