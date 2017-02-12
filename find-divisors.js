// Create a function named divisors that takes an integer and returns
// an array with all of the integer's divisors(except for 1 and the
// number itself). If the number is prime return the string '(integer)
// is prime' (use Either String a in Haskell).
// Example:
// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"
// You can assume that you will only get positive integers as inputs.

function divisors(integer) {
  var result = [];

  for (var i=2; i<integer; i++) {
    if (integer % i === 0) {
      result.push(i);
    }
  }

  if (result.length === 0) {
    return integer + ' is prime';
  }

  return result;
}

console.log(divisors(12)); // [ 2, 3, 4, 6 ]
