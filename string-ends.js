// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function stringEnds(str, ends) {
  var sliceNum = str.length - ends.length;

  if (str.slice(sliceNum) === ends) {
    return true;
  } else {
    return false;
  }
}
console.log(stringEnds('abc', 'bc'));
