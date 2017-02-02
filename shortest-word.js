// Given a string of words, return the length of shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(string) {
	// turn string (sentence) into array of strings (each word)
	var arrString = string.split(' ');

	// This is the counter. Start counter with first element of array.
	var shortestWord = arrString[0];

	for (var i=0; i<=arrString.length-1; i++) {
		console.log('for loop i: ', i);
		console.log('for loop shortestWord: ', shortestWord)
		console.log('for loop arrString[i]: ', arrString[i])
		if (arrString[i].length <= shortestWord.length) {
			shortestWord = arrString[i];
		}
	}
	console.log('end shortestword: ', shortestWord)

	return shortestWord.length;
}

console.log(findShort('turns out random test cases are ' + 
	'easier than writing out basic ones')); // 3






