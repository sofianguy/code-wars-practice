// Write a function powersOfTwo which will return list of all powers of 2 from
// 0 to n (where n is an exponent).
// E.g:
// n = 0 -> 2^0 -> [1]
// n = 1 -> 2^0, 2^1 -> [1,2]
// n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]

function powersOfTwo(n) {
  var output = [];
  for (var i=0; i<=n; i++) {
    output.push(Math.pow(2, i));
  }
  return output;
}
console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1,2]);
console.log(powersOfTwo(2), [1,2,4]);
