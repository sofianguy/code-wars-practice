// You are going to be given a word. Your job is to return the middle
// character of the word. If the word's length is odd, return the middle
// character. If the word's length is even, return the middle 2 characters.
// Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// Input: A word (string) of length 0 < str < 1000
// Output: The middle character(s) of the word represented as a string.

function getMiddle(string) {
  var output = '';

  if (string.length % 2 === 0) {
    var temp = string.length / 2;
    output = output + string[temp-1] + string[temp];
  } else {
    var temp = Math.round(string.length / 2);
    output = output + string[temp-1];
  }

  return output;
}
console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
