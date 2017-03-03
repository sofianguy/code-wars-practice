// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  var numArray = num.toString().split('');
  var output = '';
  for (var i=0; i<numArray.length; i++) {
    output = output + (numArray[i]*numArray[i]).toString();
  }
  return parseInt(output);
}
console.log(squareDigits(9119)); // 811181
