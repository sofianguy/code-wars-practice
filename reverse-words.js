// Write a reverseWords function that accepts a string a parameter, and
// reverses each word in the string. Every space should stay, so you
// cannot use words from Prelude.

// Example:
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverse_words("This is an example!") # returns  "sihT si na !elpmaxe"
// reverseWords "An example!"    -- "nA !elpmaxe"
// reverseWords "double  spaces" -- "elbuod  secaps"

function reverseWords(str) {
  var output = [];
  var strArray = str.split(' ');
  for (var i=0; i<strArray.length; i++) {
    var tempWord = '';
    for (var a=strArray[i].length-1; a>=0; a--) {
      tempWord = tempWord + strArray[i][a];
    }
    output.push(tempWord);
  }
  return output.join(' ');
}
console.log(reverseWords("This is an example!"), '|', "sihT si na !elpmaxe");
