// Create a function that takes as a parameter an array of numbers represented
// as strings and outputs an array of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.

function toNumberArray(stringarray) {
  var output = [];
  for (var i=0; i<stringarray.length; i++) {
    output.push(parseFloat(stringarray[i]));
  }
  return output;
}
console.log(toNumberArray(["1", "2", "3"]), [1, 2, 3]);
console.log(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);
