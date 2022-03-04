/* / ----------> EXERCÍCO 1 <---------- / 
Crie uma função que receba um número e retorne seu fatorial.
- Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N.
Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */

const factorial = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    num *= i;
  }
  return num;
};

console.log(factorial(4));

/* / ----------> BÔNUS <---------- /
tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator. */

const factorial = (num) => (num > 1 ? num * factorial(num - 1) : 1);
console.log(factorial(4));

/* / ----------> EXERCÍCO 2 <---------- /
Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu' */

const longestWord = (phrase) => {
  let wordArray = phrase.split(" ");
  let longestWord = "";
  let longestWordLength = 0;

  for (let i = 0; i < wordArray.length; i += 1) {
    if (wordArray[i].length > longestWordLength) {
      longestWord = wordArray[i];
      longestWordLength = wordArray[i].length;
    }
  }
  return longestWord;
};

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

/* / ----------> EXERCÍCO 3 <---------- /
Crie uma página que contenha:
- Um botão ao qual será associado um event listener;
- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

// ./exercise-3.html

/* / ----------> EXERCÍCO 4 <---------- /
Crie um código JavaScript com a seguinte especificação: (Não se esqueça de usar template literals)

- Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

Exemplo:
- String determinada: "Tryber x aqui!"
- Parâmetro: "Bebeto"
- Retorno: "Tryber Bebeto aqui!"

- Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

- Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
- JavaScript;
- HTML; ... #goTrybe". */

const func1 = (string) => `Tryber ${string} aqui!`;

const mainSkills = ["Git", "GitHub", "HTML", "CSS", "JavaScript"];

const func2 = (string) => {
  const sortedMainSkills = mainSkills.sort();
  let newString = `${func1(string)} Minhas cinco principais habilidades são:
  `;

  for (let i = 0; i < sortedMainSkills.length; i += 1) {
    newString = `${newString}
    - ${sortedMainSkills[i]}`;
  }

  newString = `
  ${newString}
  
  #goTrybe`;

  return newString;
};

console.log(func2("Bebeto"));
