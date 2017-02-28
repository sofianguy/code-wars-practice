// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"

// ------------------------------------------------------------------
function repeatStr1(n, s) {
  return Array(n+1).join(s);
}
console.log(repeatStr1(6, "I")); // "IIIIII"
console.log(repeatStr1(5, "Hello")); // "HelloHelloHelloHelloHello"

// ------------------------------------------------------------------
function repeatStr2(n,s) {
  var output = ''
  for (var i=0; i<n; i++) {
    output = output + s;
  }
  return output;
}
console.log(repeatStr2(6, "I")); // "IIIIII"
console.log(repeatStr2(5, "Hello")); // "HelloHelloHelloHelloHello"

// ------------------------------------------------------------------
function repeatStr3(n,s) {
  var output = '';
  var i=0;
  while (i < n) {
    output = output + s;
    i++;
  }
  return output;
}
console.log(repeatStr3(6, "I")); // "IIIIII"
console.log(repeatStr3(5, "Hello")); // "HelloHelloHelloHelloHello"

// ------------------------------------------------------------------
function repeatStr4(n,s) {
  var output = '';
  while (n > 0) {
    output = output + s;
    n--;
  }
  return output;
}
console.log(repeatStr4(6, "I")); // "IIIIII"
console.log(repeatStr4(5, "Hello")); // "HelloHelloHelloHelloHello"
