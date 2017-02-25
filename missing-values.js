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
  var tempMatchCount = 0;
  for (var index=0; index<sortedArray.length; index++) {
    if (sortedArray[index] === sortedArray[index + 1]) {
      tempMatchCount = tempMatchCount + 1; // tempMatchCount++ or tempMatchCount += 1
    } else if (tempMatchCount >= 2) {
      // if next value of array doesn't match the current value and the tempMatchCount
      // is more than 1 or 0, reset tempMatchCount back to 0;
      tempMatchCount = 0;
    } else if (tempMatchCount === 1) {
      // if there's one match, that means the number appears twice
      tempMatchCount = 0;
      twiceNum = sortedArray[index];
    } else if (tempMatchCount === 0) {
      // if there's no match, that means the number appears only once
      onceNum = sortedArray[index];
    }
  }

  return onceNum * onceNum * twiceNum;
}
console.log(missingValues([1, 1, 1, 2, 2, 3])); // 18
console.log(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200])); // 4000000
console.log(missingValues([1,1,1,1,1,1,1,1,2,2,3])); // 18
console.log(missingValues([1,2,2,3,3,3,3,3,3])); // 2
