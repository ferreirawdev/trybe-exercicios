// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai = document.getElementById('pai');

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  const currentChildren = pai.childNodes[i];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');

console.log(segundoEUltimoFilhoDoFilho);
segundoEUltimoFilhoDoFilho.remove();