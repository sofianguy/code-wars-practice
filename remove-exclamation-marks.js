// Write function RemoveExclamationMarks which removes all exclamation
// marks from a given string.

function removeExclamationMarks(s) {
  var output = '';
  for (var i=0; i<s.length; i++) {
    if (s[i] !== '!') {
      output = output + s[i];
    }
  }
  return output;
}
console.log(removeExclamationMarks('Hello World!'), '|', 'Hello World');
