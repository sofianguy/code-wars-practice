// Your task is to create a function - basic_op().
// The function should take three arguments - operation(string/char),
// value1(number), value2(number). The function should return result of
// numbers after applying the chosen operation.
// Examples:
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  } else {
    console.log('Error: invalid mathmatical operator.');
  }
}

console.log(basicOp('+', 4, 7)); // 11

// ----------------------------------------------------------------------------
function basicOp1(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}

console.log(basicOp1('+', 4, 7)); // 
