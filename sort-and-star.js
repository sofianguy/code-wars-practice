// You will be given an vector of string(s). You must sort it alphabetically
// (case-sensitive!!) and then return the first value.
//
// The returned value must be a string, and have '***' between each of its
// letters.

function twoSort(s) {
  var firstValue = s[0];
  for (var i=0; i<s.length; i++) {
    if (firstValue > s[i]) {
      firstValue = s[i];
    }
  }
  return firstValue.split('').join('***');
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who",
                      "knows", "perhaps"]), '|', 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier",
                    "than", "writing", "out", "basic", "ones"]), '|', 'a***r***e');
