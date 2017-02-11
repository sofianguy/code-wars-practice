// Create a function with two arguments that will return a list of length
// (n) with multiples of (x).
// Assume both the given number and the number of times to count will be
// positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(howMany, nLength) {
  var result = [howMany];

  while (result.length < nLength) {
    var temp = result[result.length - 1];
    result.push(temp + howMany);
  }

  return result;
}

console.log(countBy(1,10)); // [1,2,3,4,5,6,7,8,9,10]

// ------------------------------------------------------------------------
function countBy1(x, n) {
  var output = [];
  for (var i=1; i<=n; i++) {
    output.push(x * i);
  }
  return output;
}

console.log(countBy1(2,5)); //
