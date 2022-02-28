const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

/* 1 - Adicione um evento click no elemento a que possui o id href.
Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento.
Ou seja, ao clicar no link, nada deve acontecer. */
function preventClick(event) {
  event.preventDefault();
}

hrefLink.addEventListener('click', preventClick);

/* 2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox.
Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento.
Ou seja, ao clicar na caixinha, nada deve acontecer. */
inputCheckbox.addEventListener('click', preventClick);

/*  - Adicione um evento keypress no elemento input type="text" que possui o id input-text.
Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. */
function preventKeypress (event) {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
}

inputText.addEventListener('keypress', preventKeypress);