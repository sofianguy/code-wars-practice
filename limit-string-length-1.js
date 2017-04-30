// Complete the solution, so that it returns the truncated version of the
// string followed by '...'.
// Example:
// solution('Testing String',3) // should return 'Tes...'
// solution('Testing String',8) // should return 'Testing ...'
// solution('Test',8) // should return 'Test'

function solution(string, limit) {
  if (string.slice(0, limit).length === string.length) {
    return string.slice(0, limit);
  } else {
    return string.slice(0,limit) + '...';
  }
}
console.log(solution('Testing String',3), '|', 'Tes...');
console.log(solution('Testing String',8), '|', 'Testing ...');
console.log(solution('Test',8), '|', 'Test');
console.log(solution('Test', 10), '|', 'Test');
