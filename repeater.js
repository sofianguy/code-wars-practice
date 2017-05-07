// Write a function named repeater() that takes two arguments (a string and
// an integer), and returns a new string where the input string is repeated
// that many times. For example:
// repeater('a', 5)
// should return
// 'aaaaa'

// repeater('Na', 16)
// should return
// 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa`

function repeater(string, n) {
  return Array(n+1).join(string);
}
console.log(repeater('a', 5), '|', 'aaaaa');
console.log(repeater('Na', 16), '|', 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater('Wub ', 6), '|', 'Wub Wub Wub Wub Wub Wub ');

function repeater1(string,n) {
  var output = [];
  for (var i=0; i<n; i++) {
    output.push(string);
  }
  return output.join('');
}
console.log(repeater1('a', 5), '|', 'aaaaa');
console.log(repeater1('Na', 16), '|', 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater1('Wub ', 6), '|', 'Wub Wub Wub Wub Wub Wub ');

function repeater2(string,n) {
  return string.repeat(n);
}
console.log(repeater2('a', 5), '|', 'aaaaa');
console.log(repeater2('Na', 16), '|', 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater2('Wub ', 6), '|', 'Wub Wub Wub Wub Wub Wub ');
