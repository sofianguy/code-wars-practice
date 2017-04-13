// Given two integers, which can be positive and negative, find the sum of all
// the numbers between including them too and return it. If both numbers are
// equal return a or b.
// Note! a and b are not ordered!
// Example:
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum(a,b) {
  var min = Math.min(a,b);
  var max = Math.max(a,b);
  var output = 0;
  while (min <= max) {
    output = output + min;
    min++;
  }
  return output;
}
console.log(getSum(1,0), 1);
console.log(getSum(-1,2), 2);
console.log(getSum(1,1), 1);
