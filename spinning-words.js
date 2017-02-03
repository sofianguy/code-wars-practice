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

// ---------------------------------------------------------------------------------------
// OTHER SOLUTIONS:
function spinWords1(string) {
	var arrString = string.split(' ');

	arrString.forEach(function(eachWord, index, arrString) {
		if (eachWord.length >= 5) {
			// for each word in arrString, if it's length is greater than or equal to 5, 
			// .split() each word --> turns into array
			// .reverse() each letter in the word --> .reverse() is an array method; reverses array in place
			// .join('') for each index in .reverse()'d array --> turns word back into string
			// arrString[index] reassigned to reversed word string
			arrString[index] = eachWord.split('').reverse().join('');
		}
	});

	// turn array into one string with a space as separator
	return arrString.join(' ');
}

console.log(spinWords1('Hey fellow warriors')); // 'Hey wollef sroirraw'




