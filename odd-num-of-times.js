// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(a) {
  var sortedArray = a.sort(function(a,b) {
    return a - b;
  });

  var tempCount = 0;
  for (var i=0; i<sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      tempCount = tempCount + 1;
    } else if (tempCount % 2 === 1) {
      tempCount = 0;
    } else if (tempCount % 2 === 0) {
      return sortedArray[i];
    }
  }
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10
console.log(findOdd([10])); // 10
