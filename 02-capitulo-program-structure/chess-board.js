// Chessboard
const chessBoard = function() {
  let size = 40;
  let board = ''

  for(j = 0; j < size; j++) {
    for(i = 0; i < size; i++) {
      if (i % 2 === 0) {
        board += ' ';
      } else {
        board += '#'
      }
    }
    board += '\n';
    if (j % 2 === 0) {
      board += ' ';
    }
  }
  
  return board;
}

console.log(chessBoard());