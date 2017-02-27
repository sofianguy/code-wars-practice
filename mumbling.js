// Write function accum:
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  var output = [];
  for (var i=0; i<s.length; i++) {
    output.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
  }
  return output.join('-');
}
console.log(accum("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum("RqaEzty")); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

// ------------------------------------------------------------------------
function accum1(s) {
  var output = [];
  for (var i=0; i<s.length; i++) {
    output.push(s[i].toUpperCase() + Array(i+1).join(s[i]).toLowerCase());
  }
  return output.join('-');
}
console.log(accum1("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum1("RqaEzty")); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
