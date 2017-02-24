// Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an
// array of the averages of each integer-number and his follower, if there is one.

// Example:
// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null or None, your method should
// return an empty array.

function averages(numbers) {
  var output = [];
  if (numbers.length === 1 || numbers.length === 0 || numbers === null) {
    return output;
  }
  for (var i=0; i<numbers.length-1; i++) {
    // add two numbers and divide by 2
    // push final number to output
    output.push((numbers[i] + numbers[i+1]) / 2)
  }
  return output;
}
console.log(averages([ 1, 3, 5, 1, -10])); // [ 2, 4, 3, -4.5 ]
