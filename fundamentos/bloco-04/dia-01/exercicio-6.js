const chessPiece = 'Queen';

switch (chessPiece.toLowerCase()) {
    case 'king':
      console.log('Rei: uma casa em qualquer direção');
      break;
    case 'rook':
      console.log('Torre: horizontal ou vertical');
      break;
    case 'bishop':
      console.log('Bispo: diagonal');
      break;
    case 'queen':
      console.log('Rainha: horizontal ou vertical ou diagonal');
      break;
    case 'knight':
      console.log('Cavalo: três casas em "L"');
      break;
    case 'pawn':
      console.log("Peão: uma casa para frente, no primeiro movimento dele podem ser duas");
      break;
    default:
      console.log('Peça inválida');
      break;
}