// Write function toAcronym which takes a string and make an acronym of it.
//
// Rule of making acronym in this kata:
//
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:
//
// Code wars -> C, w -> C W -> CW

function toAcronym(input) {
  var inputArray = input.split(' ');
  var output = '';
  for (var i=0; i<inputArray.length; i++) {
    output = output + inputArray[i][0].toUpperCase();
  }
  return output;
}
console.log(toAcronym("Code Wars"), "CW");
console.log(toAcronym("Water Closet"), "WC");
console.log(toAcronym("Portable Network Graphics"), "PNG");
console.log(toAcronym("PHP: Hypertext Preprocessor"), "PHP");
console.log(toAcronym("hyper text markup language"), "HTML");
