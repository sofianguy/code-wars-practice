// Complete function lastThreeDigits. Function accept two arguments m and
// n(two positive integer). Returns the last 3 digits of m^n by string format.
// Some examples:
//  lastThreeDigits(10,10) === "000"
//  lastThreeDigits(9,9) === "489"
//  lastThreeDigits(8,8) === "216"
//  lastThreeDigits(7,7) === "543"
//  lastThreeDigits(6,6) === "656"
//  lastThreeDigits(5,5) === "125"

//  m and n may be very huge
//  lastThreeDigits(22,33) === "552"
//  lastThreeDigits(333,444) === "521"

//  If the result of m^n has only 1 or 2 digits, return 1 or 2 digits
//  lastThreeDigits(1,1) === "1"

//  //Otherwise, Don't omit the digit 0
//  lastThreeDigits(7,21) === "007"

function lastThreeDigits(m,n) {
  var exponential = Math.pow(m,n);
  var toString = exponential.toString();
  var output = toString.slice(-3);
  return output;
}
console.log(lastThreeDigits(10,10), '000');
