// Your task is to make a function that can take any non-negative integer as an
// argument and return it with it's digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.
// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

function descendingOrder(n) {
  var nArray = n.toString().split('');

  var sortedDesc = nArray.sort(function(a,b) {
    return b - a;
  });
  
  var output = [];
  for (var i=0; i<sortedDesc.length; i++) {
    output.push(parseInt(sortedDesc[i]));
  }

  return parseInt(output.join(''));
}
console.log(descendingOrder(21445), 54421);
console.log(descendingOrder(145263), 654321);
console.log(descendingOrder(1254859723), 9875543221);
