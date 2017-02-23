// In short: an invalid sequence (a string with non numeric character) must
// return 1, an already complete (or empty) sequence must return 0; a broken
// sequence with more than one number missing should return the lowest missing
// number; otherwise return the missing number.
// Note that the input may be with random order.

// examples:
// findMissingNumber("1 3 2 5") // returns 4, because 4 is missing
// findMissingNumber("1 2 3 4") // returns 0, because the sequence isn't broken
// findMissingNumber("1 5") // returns 2, because the sequence is missing more
//                        than one number and 2 is the lowest between 2, 3 and 4
// findMissingNumber("2 1 4 3 a") // returns 1, because it's an
//                        invalid sequence. In this case, it's invalid because
//                        contain a non numerical character.

function findMissingNumber(stringOfNums) {
  if (stringOfNums.length === 0) {
     return 0;
  }

  var arrNums = stringOfNums.split(' ').sort(function(a,b) {
    return a - b;
  });
  var output = 0;

  for (var i=0; i<arrNums.length; i++) {
    if (parseInt(arrNums[i]) > output && parseInt(arrNums[i]) === (output+1)) {
      output = parseInt(arrNums[i]);
    } else if (isNaN(parseInt(arrNums[i]))) {
      return 1;
    }
  }

  if (output === parseInt(arrNums.pop())) {
    return 0;
  } else {
    return output + 1;
  }
}
console.log(findMissingNumber("1 3 2 5")); // 4
console.log(findMissingNumber("1 2 3 4")); // 0
console.log(findMissingNumber("1 5")); // 2
console.log(findMissingNumber("2 1 4 3 a")); // 1
console.log(findMissingNumber('')); //
