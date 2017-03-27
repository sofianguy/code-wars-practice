// You have to search all numbers from inclusive 1 to inclusive a given number
// x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array:
// the count of these numbers,
// their sum
// and their product

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

function numbersWithDigitInside(x,d) {
  var count = 0;
  var numbers = [];
  for (var i=1; i<=x; i++) {
    if (i.toString().includes(d.toString())) {
      count++;
      numbers.push(i);
    }
  }
  if (numbers.length===0) {
    return [0,0,0];
  }
  var numbersSum = numbers.reduce(function(a,b) {
    return a+b;
  });
  var numbersProd = numbers.reduce(function(a,b) {
    return a*b;
  });
  return [count, numbersSum, numbersProd];
}

console.log(numbersWithDigitInside(11,1), [3, 22, 110]);
console.log(numbersWithDigitInside(5,6), [0,0,0]);
console.log(numbersWithDigitInside(1,0), [0,0,0]);
