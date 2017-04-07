// My friend John and I are members of the "Fat to Fit Club (FFC)". John is
// worried because each month a list with the weights of members is published
// and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more,
// I will modify the order of the list". It was decided to attribute a "weight"
// to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list
// 100 will come before 99. Given a string with the weights of FFC members in
// normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights
// becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were
// strings and not numbers: 100 is before 180 because its "weight" (1) is less
// than the one of 180 (9) and 180 is before 90 since, having the same "weight"
// (9) it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(strng) {
  var strngArr = strng.split(' ');
  var weights = [];
  for (var i=0; i<strngArr.length; i++) {
    var tempSum = 0;
    for (var a=0; a<strngArr[i].length; a++) {
      tempSum = tempSum + parseInt(strngArr[i][a]);
    }
    weights.push([parseInt(strngArr[i]), tempSum]);
  }

  var output =  weights.sort(function(a,b) {
    // if (a[1] === b[1]) {
    //   return Math.min(a[2], b[2]);
    // } else {
      return a[1] - b[1];
    // }
  });

  console.log('weights: ', weights)
  console.log('output: ', output);
}
console.log(orderWeight("56 65 74 100 99 68 86 180 90"), ' | ', "100 180 90 56 65 74 68 86 99");
// console.log(orderWeight("103 123 4444 99 2000"), ' | ', "2000 103 123 4444 99");
