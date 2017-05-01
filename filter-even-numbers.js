// JavaScript Array's support a filter function (starting in JavaScript 1.6).
// Use the filter functionality to complete the function given.
//
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray) {
  var output = [];
  for (var i=0; i<numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      output.push(numbersArray[i]);
    }
  }
  return output;
}
console.log(getEvenNumbers([2,4,5,6]), [2,4,6]);
