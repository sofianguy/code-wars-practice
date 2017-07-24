// Calculate the product of all elements in an array.
// In C#, if the array is null, you should throw ArgumentNullException and if
// the array is empty, you should throw InvalidOperationException.
// In JavaScript, if the array is null or is empty, the function should return
// null.
// In PHP, if the array is NULL or empty, return NULL.
// In Ruby, if the array is nil or is empty, the function should return nil.
// As a challenge, try writing your method in just one line of code. It's
// possible to have only 36 characters within your method.

function product(values) {
  var output = 1;
  if (values === null || values.length === 0) {
    return null;
  } else {
    for (var i=0; i<values.length; i++) {
      output = output * values[i];
    }
    return output;
  }
}
console.log(product([5, 4, 1, 3, 9]), 540);
console.log(product([-2, 6, 7, 8]), -672);
console.log(product([10]), 10);
console.log(product([0, 2, 9, 7]), 0);
console.log(product(null), null);
console.log(product([]), null);
