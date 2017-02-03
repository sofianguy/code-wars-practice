// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of 
// junk but containing one "needle"
// After your function finds the needle it should return a 
// message (as a string) that says:
// "found the needle at position " plus the index it found the needle
// So
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return:
// 'found the needle at position 5'

function findNeedle(haystack) {
	for (var i=0; i<haystack.length; i++) {
		if (haystack[i] == 'needle') {
			return 'found the needle at position ' + i;
		}
	}
	return 'found no needles in haystack.'
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
// 'found the needle at position 5'

// ---------------------------------------------------------------------------------------
// OTHER SOLUTIONS:

function findNeedle1(haystack) {
	// ** array.indexOf(element) returns -1 if element not found
	if (haystack.indexOf('needle') === -1) {
		return 'found no needles in haystack'
	}
	return 'found the needle at position ' + haystack.indexOf('needle');
}

console.log(findNeedle1(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
// 'found the needle at position 5'

console.log(findNeedle1(['1', '2', '3', '4']));
// 'found no needles in haystack'

