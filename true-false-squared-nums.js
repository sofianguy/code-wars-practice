// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
// that checks whether the two arrays have the "same" elements, with the same 
// multiplicities. "Same" means, here, that the elements in b are the elements 
// in a squared, regardless of the order.
// Example: 
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 
// 14641 is the square of 121, 20736 the square of 144, 
// 361 the square of 19, 25921 the square of 161, and so on. 
// It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

function comp(array1, array2) {
	console.log('array1 before: ', array1);
	var newArray1 = array1.sort();
	console.log('array1 after: ', newArray1);

	console.log('array2 before: ', array2);
	var newArray2 = array2.sort();
	console.log('array2 after: ', newArray2);

	if (newArray1.length !== newArray2.length) {
		console.log('ERROR: The two given arrays do not have the same number of items');
		return false;
	}

	for(i=0; i<=newArray1.length; i++) {
		if (newArray1[i]*newArray1[i] !== newArray2[i]) {
			console.log('ERROR: Item in array1 squared does not equal ' + 
				'the value in corresponding item in array2');
			return false;
		} else {
			return true;
		}
	}
}

var a = [121, 144, 19, 161, 19, 144, 19, 11];
var b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a, b));
