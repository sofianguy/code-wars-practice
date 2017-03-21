// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i=0; i<str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      count++;
    }
  }
  return count;
}
console.log(getCount("abracadabra"), 5);
