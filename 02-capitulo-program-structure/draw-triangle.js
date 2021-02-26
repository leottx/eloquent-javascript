// Looping Triangle
const drawTriangle = function() {
  let char = '#'
  for(i = 7; i !== 0; i--) {
    console.log(char);
    char += '#'
  }
}

drawTriangle();