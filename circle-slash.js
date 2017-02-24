// Task
// Suppose there are n people standing in a circle and they are numbered 1
// through n in order.

// Person 1 starts off with a sword and kills person 2. He then passes the
// sword to the next person still standing, in this case person 3. Person 3
// then uses the sword to kill person 4, and passes it to person 5. This
// pattern continues around and around the circle until just one person remains.

// What is the number of this person?
// Example:
// For n = 5, the result should be 3.
// 1 kills 2, passes to 3.
// 3 kills 4, passes to 5.
// 5 kills 1, passes to 3.
// 3 kills 5 and wins.

// Input/Output
// [input] integer n
// The number of people. 1 through n standing in a circle.
// 1 <= n <= 1e9
// [output] an integer
// The index of the last person standing.

function circleSlash(n) {

  // creating array of range n
  var peopleArray = [];  // [1,2,3,4,5]
  for (var i=1; i<=n; i++) {
    peopleArray.push(i);
  }

  // for (var a=0; a<peopleArray.length; a++) {
  //   if (peopleArray[a] % 2 === 0) {
  //     peopleArray.splice(a,1);
  //   }
  // }
  // console.log('removed even numbers: ', peopleArray);
  var currentSword = 1;
  while (peopleArray.length > 1) {
    peopleArray.splice(currentSword,1);
    currentSword = currentSword + 1;
  }
  //
  // for (var b=0; b<peopleArray.length; b++) {
  //   if (b === (peopleArray.length-2)) {
  //     currentSword = peopleArray[0];
  //     peopleArray.splice(currentSword, 1, 'dead');
  //   }
  //
  //
  //   console.log('index: ', b);
  //   console.log('before splice: ', peopleArray);
  //   peopleArray.splice(currentSword, 1, 'dead');
  //   console.log('after splice: ', peopleArray);
  //
  //   var temp = peopleArray.indexOf('dead', b);
  //   currentSword = peopleArray[temp + 1];
  //   console.log('currentSword forloop: ', currentSword);
  //
  //   // if (currentSword === undefined) {
  //   //   currentSword = peopleArray[0];
  //   //   peopleArray.splice(currentSword, 1, 'dead');
  //   // }
  // }

  // while (peopleArray.length > 1) {
  //   peopleArray.splice(currentSword,1);
  //   // console.log('while loop: ', peopleArray);
  // }

  return 'asdf';
}
console.log(circleSlash(5)); //
