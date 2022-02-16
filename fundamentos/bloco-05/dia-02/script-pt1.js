// 1 - Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green';
console.log(pai);

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';
console.log(primeiroFilhoDoFilho);

// 4 - Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho2);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = elementoOndeVoceEsta.nextSibling;
console.log(textElement);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

// 8 - Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);