// It's pretty straightforward. Your goal is to create a function that removes
// the first and last characters of a string. You're given one parameter.

function removeChar(str) {
  var output = str.substr(1).slice(0,-1);
  return output;
}
console.log(removeChar('eloquent')); // 'loquen'
console.log(removeChar('country')); // 'ountr'
