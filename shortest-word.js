// Given a string of words, return the length of shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(string) {
	// turn string (sentence) into array of strings (each word)
	var arrString = string.split(' ');

	// This is the counter. Start counter with first element of array.
	var shortestWord = arrString[0];

	// Look at each word in sentence.
	for (var i=0; i<=arrString.length-1; i++) {
		// Compare each array element with current shorestWord.
		if (arrString[i].length <= shortestWord.length) {
			// Replace shorestWord with i index's element if its 
			// length is shorter than the current shortWord length
			shortestWord = arrString[i];
		}
	}

	// Question calls for shortest word's length
	return shortestWord.length;
}

console.log(findShort('turns out random test cases are ' + 
	'easier than writing out basic ones')); // 3






