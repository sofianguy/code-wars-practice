// Description:
// Remove a exclamation mark from the end of string. For a beginner kata, you
// can assume that the input data is always a string, no need to verify it.

// Examples:
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s) {
  if (s[s.length-1] === '!') {
    return s.slice(0, -1);
  } else {
    return s;
  }
}
console.log(remove("Hi!"), '|', "Hi");
console.log(remove("Hi!!!"), '|', "Hi!!");
console.log(remove("!Hi"), '|',  '|', "!Hi");
console.log(remove("!Hi!"), '|', "!Hi");
console.log(remove("Hi!Hi!"), '|', "Hi!Hi");
console.log(remove("Hi"), '|', "Hi");
console.log(remove("Hi! Hi!"), '|', "Hi! Hi");
