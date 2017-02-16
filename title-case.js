// A string is considered to be in title case if each word in the string is
// either (a) capitalised (that is, only the first letter of the word is in
// upper case) or (b) considered to be an exception and put entirely into
// lower case unless it is the first word, which is always capitalised.
//
// Write a function that will convert a string into title case, given an
// optional list of exceptions (minor words). The list of minor words will be
// given as a string with each word separated by a space. Your function should
// ignore the case of the minor words string -- it should behave in the same
// way even if the case of the minor word string is changed.

//First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must
// always be lowercase except for the first word in the string. The
// JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

// Example:
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  // TRICKY JS: to compare if value is undefined or if value exists, you need to
  // use typeof because otherwise in this case the if statement would compare
  // whether the string matches 'undefined'.
  // http://stackoverflow.com/questions/2778901/how-to-compare-variables-to-undefined-if-i-don-t-know-whether-they-exist

  if (title.length === 0 && typeof minorWords == 'undefined') {
    return '';
  } else if (title.length === 0 && minorWords === '') {
    return '';
  }

  var lowerTitle = title.toLowerCase();
  var titleArray = lowerTitle.split(' ');
  var output = [titleArray[0].charAt(0).toUpperCase() + titleArray[0].slice(1)];

  if (title.length > 0 && typeof minorWords == 'undefined') {
    for (var i=1; i<titleArray.length; i++) {
      output.push(titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1));
    }
    return output.join(' ');
  }

  var lowerMinor = minorWords.toLowerCase();
  var minorWordsArray = lowerMinor.split(' ');

  for (var i=1; i<titleArray.length; i++) {
    if (minorWordsArray.includes(titleArray[i])) {
      output.push(titleArray[i]);
    } else {
      output.push(titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1));
    }
  }
  return output.join(' ');
}
console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('')); // ''
console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'
