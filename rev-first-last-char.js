// This is a spin off of my first Kata, you are given a list of
// characters as a comma separated string. Write a function to return
// a string containing all except the first and last characters, separated
// by spaces. If the input string is empty, or the removal of the first
// and last items would cause the string to be empty, return null value.
//
// Arrays are joined by adding a single space between each consecutive
// array element.

function middleCharacter(str) {
  var strArray = str.split(',');
  var output = [];
  if (strArray.length <= 2) {
    return null;
  } else {
    strArray.shift();
    strArray.pop();
    output = strArray;
    return output.join(' ');
  }
}

console.log(middleCharacter('1,2,3')); // '2'
console.log(middleCharacter('1,2,3,4,5,6,7,8,9')); // '2 3 4 5 6 7 8'
