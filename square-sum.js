// Complete the squareSum method so that it squares each number passed into it
// and then sums the results together.
//
// For example:
// squareSum([1, 2, 2]); // should return 9

function squareSum(numbers) {
  var output = 0;
  for (var i=0; i<numbers.length; i++) {
    output = output + Math.pow(numbers[i], 2);
  }
  return output;
}
console.log(squareSum([1,2,2]), 9);
