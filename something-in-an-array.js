// Create a find function that takes a string and an array. If the string is in
// the array, return true.
// For example:
// find("hello", ["bye bye","hello"]) // return true
// find("anything", ["bye bye","hello"]) // return false
// Note: Hello != hello, case-sensitive.

function find(string, array) {
  for (var i=0; i<array.length; i++) {
    if (array[i] === string) {
      return true;
    }
  }
  return false;
}
console.log(find("hello", ["bye bye","hello"]), true); //
console.log(find("anything", ["bye bye","hello"]), false); //
