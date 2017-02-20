// Write a function, persistence, that takes in a positive parameter num
// and returns its multiplicative persistence, which is the number of times
// you must multiply the digits in num until you reach a single digit.

// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  var count = 0;
  var numArray = num.toString().split('');

  while (numArray.length !== 1) {
    console.log('while loop numArray: ', numArray.length);
    var multipliedNums = numArray.reduce(function(a,b) {
      return a * b;
    });
    numArray = multipliedNums.toString().split('');
    count = count + 1;
  }

  return count;
}
console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
