// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples:
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

function remove(s) {
  var sSplit = s.split(' ');
  var output = [];
  for (var i=0; i<sSplit.length; i++) {
    var temp = '';
    for (var a=0; a<sSplit[i].length; a++) {
        if (sSplit[i][a] !== '!') {
          temp = temp + sSplit[i][a];
        }
    }
    output.push(temp);
  }
  return output.join(' ') + '!';
}
console.log(remove("Hi!") , "Hi!")
console.log(remove("Hi!!!") ,"Hi!")
console.log(remove("!Hi") , "Hi!")
console.log(remove("!Hi!") , "Hi!")
console.log(remove("Hi! Hi!") , "Hi Hi!")
console.log(remove("Hi"), "Hi!")
