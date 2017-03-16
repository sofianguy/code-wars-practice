// Sum all the numbers of the array (in F# and Haskell you get a list) except
// the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge,
// even if there are more than one with the same value!)
// Example:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)
// -- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.

function sumArray(array) {
  if (array.length <= 1 || array === null) {
    return 0;
  }
  var sortedArray = array.sort(function(a,b) {
    return a - b;
  });
  var output = 0;
  for (var i=1; i<sortedArray.length-1; i++) {
    output = output + sortedArray[i];
  }
  return output;
}
console.log(sumArray([6, 2, 1, 8, 10]), '|', 16); // 16
