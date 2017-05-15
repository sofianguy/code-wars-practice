// Given two numbers and an arithmetic operator (the name of it, as a string),
// return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number
// in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:
// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5
// Try to do it without using if statements!

function arithmetic(a,b,operator) {
  if (operator === 'add') {
    return a+b;
  } else if (operator === 'subtract') {
    return a-b;
  } else if (operator === 'multiply') {
    return a*b;
  } else if (operator === 'divide') {
    return a/b;
  }
}
console.log(arithmetic(1, 2, "add"), 3);
console.log(arithmetic(8, 2, "subtract"), 6);
console.log(arithmetic(5, 2, "multiply"), 10);
console.log(arithmetic(8, 2, "divide"), 4);
