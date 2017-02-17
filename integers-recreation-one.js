// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared
// are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is
// 2500 which is 50 * 50, a square!
//
// Given two integers m, n (1 <= m <= n) we want to find all integers between
// m and n whose sum of squared divisors is itself a square. 42 is such a number.
//
// The result will be an array of arrays(in C an array of Pair), each subarray
// having two elements, first the number whose squared divisors is a square
// and then the sum of the squared divisors.
//
// Examples:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function factor(num) {
  var result = [];
  for (var i=1; i<=num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
  // return [1,2,3,6,7,14,21,42];
}

function squareList(a) {
  var result = [];
  for (var i=0; i<a.length; i++) {
    result.push(a[i] * a[i]);
  }
  return result;
  // return [1,4,9,36,49,196,441,1764];
}

function sumList(b) {
  return b.reduce(function(a,b) {
                return a + b;
              });
  // return 2500;
}

function isSquared(c) {
  return Math.sqrt(c) % 1 === 0;
  // return true;
}

function listSquared(m,n) {
  var output = [];

  while (m <= n) {
    var a = factor(m);
    var b = squareList(a);
    var c = sumList(b);
    var d = isSquared(c);
    if (d) {
      output.push([m, c]);
    }
    m++
  }
  return output;

  // output.push([m,c]); // array.push() returns length of array
}

console.log(listSquared(42,250)); // [ [ 42, 2500 ], [ 246, 84100 ] ]
console.log(listSquared(1,1)); // [ [ 1, 1 ] ]
console.log(listSquared(1,42)); // [ [ 1, 1 ], [ 42, 2500 ] ]
