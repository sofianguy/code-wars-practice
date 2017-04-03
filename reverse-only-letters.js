// Given a string str, reverse it omitting all non-alphabetic characters.
// Examples:
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output:
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string

function reverseLetter(str) {
  var onlyLetters = str.replace(/[^a-zA-Z]/g, '');
  var output = '';
  for (var i=0; i<onlyLetters.length; i++) {
    if (Number.isInteger(parseInt(onlyLetters[i]))) {
    } else {
      output = onlyLetters[i] + output;
    }
  }
  return output;
}
console.log(reverseLetter('krishan'), 'nahsirk');
console.log(reverseLetter('ultr53o?n'), 'nortlu');
