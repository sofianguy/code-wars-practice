// In this simple assignment you are given a number and have to make it
// negative. But maybe the number is already negative?

// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0

// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) can't be negative, see examples above.

function makeNegative(num) {
  if (Math.sign(num) === -1) {
    return num;
  } else if (Math.sign(num) === 0) {
    return 0;
  } else {
    return num * -1;
  }
}
console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0

// ------------------------------------------------------------------------
function makeNegative1(num) {
  return -Math.abs(num);
}
console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0

// ------------------------------------------------------------------------
function makeNegative2(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}
console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0
