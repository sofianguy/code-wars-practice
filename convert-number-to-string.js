// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
// Examples:
// numberToString(123); // returns '123';`
// numberToString(999); // returns '999';`

function numberToString(num) {
  return num.toString();
}
console.log(numberToString(123), '123');
console.log(numberToString(999), '999');

function numberToString1(num) {
  return '' + num + '';
}
console.log(numberToString1(123), '123');
console.log(numberToString1(999), '999');

function numberToString2(num) {
  return String(num);
}
console.log(numberToString2(123), '123');
console.log(numberToString2(999), '999');
