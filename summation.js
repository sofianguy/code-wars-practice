// Summation
// Write a program that finds the summation of every number between 1 and num.
// The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function summation(num) {
  var output = 0;
  for (var i=1; i<=num; i++) {
    output = output + i;
  }
  return output;
}
console.log(summation(1), 1);
console.log(summation(8), 36);
