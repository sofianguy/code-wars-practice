// Your task is to write a function which returns the sum of following series
// upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer upto 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function seriesSum(n) {
  var series = [1, 1/4];

  if (n === 0) {
    return '0.00';
  } else if (n === 1) {
    return series[0].toFixed(2);
  } else if (n === 2) {
    var sum = series[0] + series[1];
    return sum.toString();
  }

  while (series.length < n) {
    // formula for sequence pattern: 1/3n+1
    var temp = 1 / (3*series.length + 1);
    series.push(temp);
  }

  var sumSeries = series.reduce(function (a,b) {
    return a + b;
  });

  return sumSeries.toFixed(2);
}

console.log(seriesSum(0)); // 0.00
console.log(seriesSum(1)); // 1.00
console.log(seriesSum(2)); // 1.25
console.log(seriesSum(3)); // 1.39
console.log(seriesSum(5)); // 1.57
