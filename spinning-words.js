// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings passed 
// in will consist of only letters and spaces. Spaces will be included 
// only when more than one word is present.

// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
	var newString = '';
	var arrString = string.split(' ');

	for(var i=0; i<arrString.length; i++) {
		if (arrString[i].length >= 5) {
			for (var a=arrString[i].length-1; a>=0; a--) {
				newString = newString + arrString[i][a];
			}
			if (i !== arrString.length-1) {
				newString = newString + ' ';
			}
		} else {
			newString = newString + arrString[i];
			if (i !== arrString.length-1) {
				newString = newString + ' ';
			}
		}
	}

	return newString;
}

console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('This is another test')); // 'This is rehtona test'



