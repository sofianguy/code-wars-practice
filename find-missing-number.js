// This question is a variation on the Arithmetic Progression
// Kata:https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/cpp
//
// The following was a question that I received during a technical interview
// for an entry level software developer position. I thought I'd post it here
// so that everyone could give it a go:
// You are given an unsorted array containing all the integers from 0 to 100
// inclusively. However, one number is missing. Write a function to find and
// return this number. What are the time and space complexities of your solution?

function missingNum(unsortedArray) {
  var sortedArray = unsortedArray.sort();

  for (var i=0; i<sortedArray.length; i++) {
    if (i !== sortedArray[i]) {
      return i;
    }
  }
}

console.log(missingNum([0,1,2,3,5])); // 4

// --------------------------------------------------------------------------
function missingNum1(unsortedArray) {
  // unknown sum of numbers in array including missing number
  var shouldBeSum = 0;
  for (var i=0; i<=unsortedArray.length; i++) {
    shouldBeSum = shouldBeSum + i;
  }

  var unsortedSum = 0;
  for (var i=0; i<unsortedArray.length; i++) {
    unsortedSum = unsortedSum + unsortedArray[i];
  }

  return shouldBeSum - unsortedSum;
}

console.log(missingNum1([0,1,2,3,5])); // 4

// --------------------------------------------------------------------------
function missingNum2(unsortedArray) {
  var unsortedSum = 0;
  
  for (var i=0; i<unsortedArray.length; i++) {
    unsortedSum = unsortedSum + unsortedArray[i];
  }

  // 5050 is total sum of 0 to 100
  return 5050 - unsortedSum;
}
