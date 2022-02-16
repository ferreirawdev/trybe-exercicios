/* ----- PARTE 1 ----- */
// 1 - Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// console.log(elementoOndeVoceEsta);

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green';
// console.log(pai);

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';
// console.log(primeiroFilhoDoFilho);

// 4 - Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;
// console.log(primeiroFilho);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
// console.log(primeiroFilho2);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = elementoOndeVoceEsta.nextSibling;
// console.log(textElement);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// console.log(terceiroFilho);

// 8 - Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
// console.log(terceiroFilho2);

/* ----- PARTE 2 ----- */
// 1 - Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');

irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);
console.log(irmaoElementoOndeVoceEsta);

// 2 - Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');

filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
console.log(filhoElementoOndeVoceEsta);

// 3 - Crie um filho para `primeiroFilhoDoFilho`.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilhoDoFilho = document.createElement('section');

filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
console.log(filhoPrimeiroFilhoDoFilho);

// 4 - A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);