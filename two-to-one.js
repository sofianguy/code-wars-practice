// Take 2 strings s1 and s2 including only letters from a to z. Return a new
// sorted string, the longest possible, containing distinct letters, - each
// taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  var sArray = (s1+s2).split('').sort();
  var output = [];

  for (var i=0; i<sArray.length; i++) {
    if (output.includes(sArray[i])) {
    } else {
      output.push(sArray[i]);
    }
  }

  return output.join('');
}
var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";
console.log(longest(a,b)); // "abcdefklmopqwxy"
console.log(longest(a,a)); // "abcdefwxy"

var c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(c,c)); // "abcdefghijklmnopqrstuvwxyz"

console.log(longest('s','j')); // "js"
