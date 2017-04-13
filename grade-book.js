// Complete the function so that it finds the mean of the three scores passed
// to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for
// negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  var mean = (s1 + s2 + s3) / 3;
  if (mean >= 90) {
    return 'A';
  } else if (mean >= 80) {
    return 'B';
  } else if (mean >= 70) {
    return 'C';
  } else if (mean >= 60) {
    return 'D';
  } else if (mean <= 59) {
    return 'F';
  }
}
console.log(getGrade(95,90,93), 'A');
console.log(getGrade(70,70,100), 'B');
