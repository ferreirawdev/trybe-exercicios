const valorCusto = 3;
const valorVenda = 10;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('valor inválido');
} else {
    const custoTotal = valorCusto * 1.2;
    const lucro = valorVenda - custoTotal;
    console.log(lucro * 1000);
}