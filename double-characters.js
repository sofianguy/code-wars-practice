// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.
// Examples:
// doubleChar("String") ==> "SSttrriinngg"
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
	var doubleStr = '';

	for (var i=0; i<str.length; i++) {
		console.log('for loop str[i]: ', str[i])
		doubleStr = doubleStr + str[i] + str[i];
	}

	return doubleStr;
}

console.log(doubleChar('String')); // SSttrriinngg
console.log(doubleChar('Hello World')); // HHeelllloo  WWoorrlldd
console.log(doubleChar('1234!_ ')); // 11223344!!__  

