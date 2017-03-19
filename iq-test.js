// Bob is preparing to pass IQ test. The most frequent task in this test is
// to find out which one of the given numbers differs from the others. Bob
// observed that one number usually differs from the others in evenness. Help
// Bob — to check his answers, he needs a program that among the given numbers
// finds one that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which
// means indexes of the elements start from 1 (not 0)

// Examples :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
  var numbersArray = numbers.split(' ');
  var even = {count: 0, index: 0};
  var odd = {count: 0, index: 0};
  for (var i=0; i<numbersArray.length; i++) {
    if (parseInt(numbersArray[i]) % 2 === 0) {
      even.count = even.count + 1;
      even.index = i;
    } else if (parseInt(numbersArray[i]) % 2 === 1) {
      odd.count = odd.count + 1;
      odd.index = i;
    }
  }

  if (even.count === numbersArray.length-1) {
    return odd.index + 1;
  } else if (odd.count === numbersArray.length-1) {
    return even.index + 1;
  }
}
console.log(iqTest("2 4 7 8 10"), 3); // 3
console.log(iqTest("1 2 1 1"), 2); // 2
console.log(iqTest("100 100 1"), 3); // 3
console.log(iqTest("5 3 2"), 3); // 3
console.log(iqTest("100 99 100"), 2); // 2
