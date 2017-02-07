// Jaden Smith, the son of Will Smith, is the star of films such as
// The Karate Kid (2010) and After Earth (2013). Jaden is also known for some
// of his philosophy that he delivers via Twitter. When writing on Twitter, he
// is known for almost always capitalizing every word.
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized
// in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(str) {
  var arrayOfWords = str.split(' ')
  var out = []
  for(let word of arrayOfWords) {
    let letters = word.split('')
    letters[0] = letters[0].toUpperCase()
    out.push(letters.join(''))
  }
  return out.join(' ')
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
// How Can Mirrors Be Real If Our Eyes Aren't Real


// ---------------------------------------------------------------------------
String.prototype.toJadenCase = function() {
  // this. would refer to the immediate left of .toJadenCase()
  // example: "asdf".toJadenCase() --> this = "asdf"
  var arrayOfWords = this.split(' ');
  var output = [];
  for(let word of arrayOfWords) {
    // Strings are immutable, so put string-word into an array with each letter as an element.
    let letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    output.push(letters.join(''));
  }
  return output.join(' ');
}

"How can mirrors be real if our eyes aren't real".toJadenCase();
// How Can Mirrors Be Real If Our Eyes Aren't Real
['how', 'can', 'mirrors', 'be', 'real', 'if', 'our', 'eyes', 'arent'].toJadenCase();
// TypeError: [...].toJadenCase(); is not a function
