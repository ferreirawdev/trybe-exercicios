/* -- Variáveis de nota da pratica3.js -- */

const nota = 90;
const nota2 = 70;
const nota3 = 40;

/* ------------------------------ */

let estadoCandidata;
let estadoCandidata2;
let estadoCandidata3;

if (nota >= 80) {
    estadoCandidata = 'aprovada';
} else if (nota < 80 && nota >= 60) {
    estadoCandidata = 'lista';
} else {
    estadoCandidata = 'reprovada';
}

if (nota2 >= 80) {
    estadoCandidata2 = 'aprovada';
} else if (nota2 < 80 && nota2 >= 60) {
    estadoCandidata2 = 'lista';
} else {
    estadoCandidata2 = 'reprovada';
}

if (nota3 >= 80) {
    estadoCandidata3 = 'aprovada';
} else if (nota3 < 80 && nota3 >= 60) {
    estadoCandidata3 = 'lista';
} else {
    estadoCandidata3 = 'reprovada';
}

switch (estadoCandidata) {
    case 'aprovada':
        console.log('Você foi reprovada(o)');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log('não se aplica');
        break;
}

switch (estadoCandidata2) {
    case 'aprovada':
        console.log('Você foi reprovada(o)');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log('não se aplica');
        break;
}

switch (estadoCandidata3) {
    case 'aprovada':
        console.log('Você foi reprovada(o)');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log('não se aplica');
        break;
}