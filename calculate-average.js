// Write function avg which calculates average of numbers in given list.

function findAverage(array) {
  var sum = array.reduce(function(a,b) {
    return a+b;
  });

  return sum / array.length;
}
console.log(findAverage([1,1,1]), 1);
console.log(findAverage([1,2,3]), 2);
