// A Narcissistic Number is a number which is the sum of its own digits,
// each raised to the power of the number of digits.

// For example:
// take 153 (3 digits):
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

// The Challenge:
// Your code must return true or false depending upon whether the given number
// is a Narcissistic number.

// Error checking for text strings or other invalid inputs is not required,
// only valid integers will be passed into the function.

function narcissistic(value) {
  var numDigits = (value.toString()).length;
  var digitsArray = (value.toString()).split('');
  var digitsSum = 0;

  for (var i=0; i<digitsArray.length; i++) {
    digitsSum = digitsSum + Math.pow(parseInt(digitsArray[i]), numDigits);
  }

  if (digitsSum === value) {
    return true;
  } else {
    return false;
  }
}
console.log(narcissistic(153)); // true
console.log(narcissistic(123)); // false
console.log(narcissistic(1634)); // true
