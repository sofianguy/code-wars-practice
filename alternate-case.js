// Write function alternateCase which switch every letter in string from upper
// to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  var output = '';
  for (var i=0; i<s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      output = output + s[i].toLowerCase();
    } else if (s[i].toLowerCase() === s[i]) {
      output = output + s[i].toUpperCase();
    } else {
      output = output + s[i];
    }
  }
  return output;
}
console.log(alternateCase("abc"), '|', "ABC");
console.log(alternateCase("ABC"), '|', "abc");
console.log(alternateCase("Hello World"), '|', "hELLO wORLD");
