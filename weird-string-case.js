// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
// and returns the same string with all even indexed characters in each 
// word upper cased, and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, 
// therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and 
// spaces(' '). Spaces will only be present if there are multiple words. 
// Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
	var arrString = string.split(' ');

	for (var i=0; i<arrString.length; i++) {
		var tempString = '';
		for (var a=0; a<arrString[i].length; a++) {
			if (a % 2 === 0) {
				tempString = tempString + arrString[i][a].toUpperCase();
			} else if (a % 2 !== 0) {
				tempString = tempString + arrString[i][a].toLowerCase();
			}
		}
		arrString[i] = tempString;
	}

	return arrString.join(' ');
}

console.log(toWeirdCase('String')); // 'StRiNg'
console.log(toWeirdCase('Weird string case')); // 'WeIrD StRiNg CaSe'
