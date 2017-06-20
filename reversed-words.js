// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str) {
  var splitStr = str.split(' ');
  var output = [];
  for (var i=splitStr.length-1; i>=0; i--) {
    output.push(splitStr[i]);
  }
  return output.join(' ');
}

console.log(reverseWords("hello world!"), '|', "world! hello")
console.log(reverseWords("yoda doesn't speak like this" ),  '|', "this like speak doesn't yoda")
console.log(reverseWords("foobar"                       ),  '|', "foobar")
console.log(reverseWords("kata editor"                  ),   '|', "editor kata")
console.log(reverseWords("row row row your boat"        ),  '|', "boat your row row row")
