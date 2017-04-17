// Complete the bool_to_word (Javascript: boolToWord ) method.
//
// Given: a boolean value
//
// Return: a 'Yes' string for true and a 'No' string for false

function boolToWord(bool) {
  if (bool === false) {
    return 'No';
  } else if (bool === true) {
    return 'Yes';
  }
}
console.log(boolToWord(true), 'Yes');
console.log(boolToWord(false), 'No');
