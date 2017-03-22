// Create a function isDivisible(n,x,y) that checks if a number n is
// divisible by two numbers x AND y

// Example:
// isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
// isDivisible(100,5,3)--> false because 100 is not divisible by 3
// isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

function isDivisible(n,x,y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(3,1,3), true);
console.log(isDivisible(12,2,6), true);
console.log(isDivisible(100,5,3), false);
console.log(isDivisible(12,7,5), false);
