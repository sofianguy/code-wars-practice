// You got a scratch lottery, you want to know how much money you win.
// There are six sets of characters on the lottery. Each set of characters
// represents a chance to win. The text has a coating on it. When you buy the
// lottery ticket and then blow it off, you can see the text information below
// the coating.

// Each set of characters contains three animal names and a number, like this:
// "tiger tiger tiger 100". If the three animal names are the same,
// Congratulations, you won the prize. You will win the same bonus as the
// last number.

// Given the lottery, returns the total amount of the bonus.
// Input/Output
// [input] string array lottery
// A string array that contains six sets of characters.

// [output] an integer
// the total amount of the bonus.

// Example
// lottery = [
// "tiger tiger tiger 100",
// "rabbit dragon snake 100",
// "rat ox pig 1000",
// "dog cock sheep 10",
// "horse monkey rat 5",
// "dog dog dog 1000"
// ]
// the output should be 1100.
// "tiger tiger tiger 100" win $100, and "dog dog dog 1000" win $1000.
// 100 + 1000 = 1100

function scratch(lottery) {
  var output = 0;
  for (var i=0; i<lottery.length; i++) {
    var tempCount = 0;
    var lotterySplit = lottery[i].split(' ');
    for (var a=0; a<lotterySplit.length; a++) {
      if (lotterySplit[a] === lotterySplit[0]) {
        tempCount++;
      }
    }
    if (tempCount === 3) {
      tempCount = 0;
      output = output + parseInt(lotterySplit[3]);
    }
  }
  return output;
}
console.log(scratch([
"tiger tiger tiger 100",
"rabbit dragon snake 100",
"rat ox pig 1000",
"dog cock sheep 10",
"horse monkey rat 5",
"dog dog dog 1000"
]),1100)
