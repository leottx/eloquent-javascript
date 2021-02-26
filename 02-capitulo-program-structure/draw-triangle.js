// Looping Triangle
// const drawTriangle = function() {
//   let char = '#'
//   for(i = 7; i !== 0; i--) {
//     console.log(char);
//     char += '#'
//   }
// }

// drawTriangle();

// Fizz Buzz
// const fizzBuzz = function() {
//   for(i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0){
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

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