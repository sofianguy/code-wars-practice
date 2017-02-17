// Given two arrays a and b write a function comp(a, b) (compSame(a, b)
// in Clojure) that checks whether the two arrays have the "same" elements,
// with the same multiplicities. "Same" means, here, that the elements in b
// are the elements in a squared, regardless of the order.

// Examples:
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a, b) returns true because in b 121 is the square of 11, 14641 is
// the square of 121, 20736 the square of 144, 361 the square of 19, 25921
// the square of 161, and so on. It gets obvious if we write b's elements in
// terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// Invalid arrays
// If we change the first number to something else, comp may not return
// true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks:
// a or b might be [] (all languages). a or b might be nil or null or None
// (except in Haskell, Elixir, C++, Rust).

// If a or b are nil (or null or None), the problem doesn't make sense
// so return false.
// If a or b are empty the result is evident by itself.
// Note for C: The two arrays have the same size (> 0) given as parameter in function comp.

function comp(array1, array2) {
  if (typeof array1 !== 'object' || typeof array2 !== 'object') {
    console.log('Given parameter are not array types');
    return false;
  } else if (array1 == null || array2 == null) {
    console.log('Given parameter is null');
    return false;
  } else if (array1.length !== array2.length) {
    console.log('Two given arrays are not the same length');
    return false;
  }

  // .sort() converts each item in array to a string.
  // So if the numbers are strings, "2116" is smaller than "361" because 2116 starts with 2.
  var sorted1 = array1.sort(function(a,b) {
    return a - b;
  });
  var sorted2 = array2.sort(function(a,b) {
    return a - b;
  });
  for (var i=0; i<sorted1.length; i++) {
    if (sorted2[i] !== (sorted1[i] * sorted1[i])) {
      return false;
    }
  }
  return true;
}
var a = [121, 144, 19, 161, 19, 144, 19, 11]
var b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
console.log(comp(a,b)); // true

console.log(comp([46,19], [2116,361])); // true
console.log(comp([],[])); // true
console.log(comp(45, 45)); // false
console.log(comp([null,0,3], [2341,2,1])); // false
console.log(comp(null, [2])); // false
