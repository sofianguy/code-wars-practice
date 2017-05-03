// Given a "square" array of subarrays, find the sum of values from the first
// value of the first array, the second value of the second array, the third
// value of the third array, and so on...
// Example 1:
// var exampleArray = [[1, 0, 0, 0],
//                    [0, 1, 0, 0],
//                    [0, 0, 1, 0],
//                    [0, 0, 0, 1]]
//
// diagonalSum(exampleArray) // => 4

// Example 2:
// var exampleArray = [[1, 0, 0, 0, 0],
//                    [0, 1, 0, 0, 0],
//                    [0, 0, 1, 0, 0],
//                    [0, 0, 0, 1, 0],
//                    [0, 0, 0, 0, 1]]
//
// diagonalSum(exampleArray) // => 5

function diagonalSum(matrix) {
  var output = 0;
  for (var i=0; i<matrix.length; i++) {
    output = output + matrix[i][i];
  }
  return output;
}
console.log(diagonalSum([[12]]), 12);
console.log(diagonalSum([[1, 2], [3, 4]]), 5);
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 15);
console.log(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 34);
