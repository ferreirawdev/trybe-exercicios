/* -------------------- Exemplos -------------------- 
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
-------------------- Exemplos -------------------- */

/* -------------------- Exercício 1 -------------------- */
// Obtenha o valor "Serviços" do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/* -------------------- Exercício 2 -------------------- */
// Procure o índice do valor "Portfólio" do array menu :
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/* -------------------- Exercício 3 -------------------- */
// Adicione o valor "Contato" no final do array menu :
menu.push('Contato');

console.log(menu);