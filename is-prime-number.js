// Define a function isPrime that takes one integer argument 
// and returns true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater 
// than 1 that has no positive divisors other than 1 and itself.
// Example:
// isPrime(5)
// => true
// You can assume you will be given an integer input. You can not assume 
// that the integer will be only positive. You may be given negative numbers.

function isPrime(num) {
	// convert given number to an absolute number
	var newNum = Math.abs(num);
	if (newNum === 1 || 0) {
		// special numbers that are not prime.
		console.log(num, ' is not a prime number.');
		return false;
	} else if (newNum === 2) {
		// 2 is the only even number that is prime.
		console.log(num, ' is a prime number.');
		return true;
	} else if (newNum % 2 === 0) {
		// even numbers (except 2) are not prime numbers
		console.log(num, ' is not a prime number.')
		return false;
	} else {
		// 1. get square root of number and round to whole number
		var sqNewNum = Math.round(Math.sqrt(newNum));
		// 2. trial division every number, starting with 2, until the square root of num (the function's parameter)
		for (var i=2; i<=sqNewNum; i++) {
			// 3. if a number from sq root has remainder 0 after dividing, it's not prime.
			if (newNum % i === 0) {
				console.log(num, ' is a not a prime number.');
				return false;
			}
		}
		console.log(num, ' is a prime number.');
		return true;
	}
}

console.log(isPrime(5));
