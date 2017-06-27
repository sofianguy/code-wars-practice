// Write a function to split a string and convert it into an array of words.

// e.g.
// string_to_array("Robin Singh") => ["Robin", "Singh"]
// string_to_array("I love arrays they are my favorite") => ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Note: in Javascript the function is written in camelCase as 'stringToArray'

function stringToArray(string) {
  return string.split(' ');
}
console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
