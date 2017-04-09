// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.

function positiveSum(arr) {
  var output = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
      output = output + arr[i];
    }
  }
  return output;
}
console.log(positiveSum([1,2,3,4,5]), 15);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1,-2,-3,-4,-5]), 0);
console.log(positiveSum([-1,2,3,4,-5]), 9);
