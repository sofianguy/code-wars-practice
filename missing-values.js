// Task
// You are given an array of positive ints where every element appears three
// times, except one that appears only once (let's call it x) and one that
// appears only twice (let's call it y).
// Your task is to find x * x * y.

// Example:
// For arr=[1, 1, 1, 2, 2, 3], the result should be 18
// 3 x 3 x 2 = 18

// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000
// 200 x 200 x 100 = 4000000

// Input/Output
// [input] integer array arr
// an array contains positive integers.
// [output] an integer
// The value of x * x * y

function missingValues(arr) {
  var sortedArray = arr.sort(function(a,b) {
    return a - b;
  });

  var twiceNum = 0;
  var onceNum = 0;
  var tempCount = 0;
  for (var index=0; index<sortedArray.length; index++) {
    if (sortedArray[index] === sortedArray[index + 1]) {
      tempCount = tempCount + 1; // tempCount++ or tempCount += 1
    } else if (tempCount === 2) {
      tempCount = 0;
    } else if (tempCount === 1) {
      tempCount = 0;
      twiceNum = sortedArray[index];
    } else if (tempCount === 0) {
      onceNum = sortedArray[index];
    }
  }

  return onceNum * onceNum * twiceNum;
}
console.log(missingValues([1, 1, 1, 2, 2, 3])); // 18
console.log(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200])); // 4000000
