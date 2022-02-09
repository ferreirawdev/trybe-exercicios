// Declaração das variáveis de controle dos laços for
let i;
let j;

/* ------------------ BÔNUS ------------------ */
/* --------------- Exercício 1 --------------- */
// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que,
// dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de
// asteriscos de lado de tamanho n.

let n = 5;
let asterisco = '*';
let linhas = '';

for (i = 0; i < n; i += 1){
    linhas += asterisco;
}

for (i = 0; i < n; i += 1){
    console.log(linhas);
}

/* --------------- Exercício 2 --------------- */
// Para o segundo exercício, faça o mesmo que antes, mas que imprima um
// triângulo retângulo com 5 asteriscos de base.

let base = 5;
linhas = '';

for (i = 0; i < base; i += 1){
    linhas += asterisco;
    console.log(linhas);
}

/* --------------- Exercício 3 --------------- */
// Agora inverta o lado do triângulo.

linhas = '';
let posicaoAsterisco = base;

for (i = 0; i <= base; i += 1){
    for (j = 0; j <= base; j += 1){
        if (j < posicaoAsterisco){
            linhas += ' ';
        } else {
            linhas += asterisco;
        }
    }
    console.log(linhas);
    posicaoAsterisco -= 1;
    linhas = '';
}

/* --------------- Exercício 4 --------------- */
// Depois, faça uma pirâmide com n asteriscos de base.

n = 5;
linhas = '';
let meioDaPiramide = (n + 1) / 2;
let esquerdaDaPiramide = meioDaPiramide;
let direitaDaPiramide = meioDaPiramide;

for (i = 0; i <= meioDaPiramide; i += 1){
    for (j = 0; j <= n; j += 1){
        if (j > esquerdaDaPiramide && j < direitaDaPiramide){
            linhas += asterisco;
        } else {
            linhas += ' ';
        }
    }
    console.log(linhas);
    direitaDaPiramide += 1;
    esquerdaDaPiramide -= 1;
    linhas = '';
}

/* --------------- Exercício 5 --------------- */
// Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
// Assuma que o valor de n será sempre ímpar:

n = 7;
meioDaPiramide = (n + 1) / 2;
esquerdaDaPiramide = meioDaPiramide;
direitaDaPiramide = meioDaPiramide;

for (i = 1; i <= meioDaPiramide; i += 1){
    linhas = '';
    for (j = 1; j <= n; j += 1){
      if (j == esquerdaDaPiramide || j == direitaDaPiramide || i == meioDaPiramide){
        linhas += asterisco;
      } else {
        linhas += ' ';
      }
    }
    console.log(linhas);
    direitaDaPiramide += 1;
    esquerdaDaPiramide -= 1;
}

/* --------------- Exercício 6 --------------- */
// Faça um programa que diz se um número definido numa variável é primo ou não.

let divisores = 1;
let supostoPrimo = 47;

for (i = 2; i <= supostoPrimo; i += 1){
    if (supostoPrimo % i === 0){
        divisores += 1;
    }
}

if (divisores === 2){
    console.log(supostoPrimo + ' é primo.');
} else {
    console.log(supostoPrimo + ' não é primo.');
}