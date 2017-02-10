// You must implement a function maxDiff that return the difference between
// the biggest and the smallest value in a list(lst) received as parameter.
// The list(lst) contains integers, that means it may contain some negative numbers.
// If the list is empty or contains a single element, return 0.
// The list(lst) is not sorted.
// Examples:
// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7
// maxDiff([]); // return 0
// maxDiff([16]); // return 0

function getMaxOfArray(numArray) {
  if (numArray.length == 0) {
    return 0;
  }
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  if (numArray.length == 0) {
    return 0;
  }
  return Math.min.apply(null, numArray);
}


function maxDiff(numsArray) {
  // var bigNum = 0;
  // var smallNum = getMaxOfArray(numsArray);

  // for (var i=0; i<numsArray.length; i++) {
  //   if (numsArray[i] > bigNum) {
  //     bigNum = numsArray[i];
  //     console.log('bigNum: ', bigNum)
  //   }
  // }
  //
  // for (var i=numsArray.length; i>0; i--) {
  //   if (numsArray[i] < smallNum) {
  //     smallNum = numsArray[i];
  //     console.log('smallNum: ', smallNum);
  //   }
  // }
  // console.log('end bigNum: ', bigNum);
  // console.log('end smallNum: ', smallNum)

  // return bigNum - smallNum;

  return getMaxOfArray(numsArray) - getMinOfArray(numsArray);
}

console.log(maxDiff([])); // 0
console.log(maxDiff([16])); // 0
console.log(maxDiff([1, 2, 3, 4])); // 4
console.log(maxDiff([1, 2, 3, -4])); // 7
