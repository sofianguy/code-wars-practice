// Description:
// Remove words from the sentence if it contains one exclamation mark. Words are
// separated by spaces in the sentence. Please remember, one.

// Examples:
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove(s) {
  var sSplit = s.split(' ');
  var output = [];
  var bangCount = 0;
  for (var i=0; i<sSplit.length; i++) {
    for (var a=0; a<sSplit[i].length; a++) {
      if (sSplit[i][a] === '!') {
        bangCount++;
      }
    }
    if (bangCount === 0 || bangCount > 1) {
      bangCount = 0;
      output.push(sSplit[i]);
    } else if (bangCount === 1) {
      bangCount = 0;
    }
  }
  return output.join(' ');
}

console.log(remove("Hi!"), '|', "")
console.log(remove("Hi! Hi!"), '|', "")
console.log(remove("Hi! Hi! Hi!"), '|', "")
console.log(remove("Hi Hi! Hi!"), '|', "Hi")
console.log(remove("Hi! !Hi Hi!"), '|', "")
console.log(remove("Hi! Hi!! Hi!"), '|', "Hi!!")
console.log(remove("Hi! !Hi! Hi!"), '|', "!Hi!")
