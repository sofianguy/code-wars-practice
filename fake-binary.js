// Given a string of digits, you should replace any 
// digit below 5 with '0' and any digit 5 and above 
// with '1'. Return the resulting string.

function fakeBin(string) {
	var binString = '';

	for (var i=0; i<string.length; i++) {
		var parseNum = parseInt(string[i]);
		if (parseNum < 5) {
			binString = binString + '0';
		} else if (parseNum >= 5) {
			binString = binString + '1';
		}
	}

	return binString;
}

console.log(fakeBin('45385593107843568')); // '01011110001100111'
console.log(fakeBin('509321967506747')); // '101000111101101'
console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011'
console.log(fakeBin('')) // ''
