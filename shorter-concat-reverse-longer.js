// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix
// of the reverse of the longest.
// Strings a and b may be empty, but not null (In C# strings may also be null.
// Treat them as if they are empty.
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function reverseString(str) {
  var stringSplit = str.split('');
  var reverseArray = stringSplit.reverse();
  return reverseArray.join('');
}

function shorterReverseLonger(a,b) {
  if (a.length > b.length) {
    return b + reverseString(a) + b;
  } else if (a.length < b.length) {
    return a + reverseString(b) + a;
  } else if (a.length === b.length) {
    return b + reverseString(a) + b;
  }
}

console.log(shorterReverseLonger('first', 'abcde'), 'abcdetsrifabcde');
console.log(shorterReverseLonger('hello', 'bau'), 'bauollehbau');
console.log(shorterReverseLonger('abcde', 'fghi'), 'fghiedcbafghi');
