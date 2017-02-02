// Tribonacci works basically like a Fibonacci, but summing the 
// last 3 (instead of 2) numbers of the sequence to generate the next.

// So, if we are to start our Tribonacci sequence with [1,1,1] as 
// a starting input (AKA signature), we have this sequence:
// [1,1,1,3,5,9,17,31,...]

// But what if we started with [0,0,1] as a signature? 
// As starting with [0,1] instead of [1,1] basically shifts the 
// common Fibonacci sequence by once place, you may be tempted to 
// think that we would get the same sequence shifted by 2 places, 
// but that is not the case and we would get:
// [0,0,1,1,2,4,7,13,24,...]

// Well, you may have guessed it by now, but to be clear: 
// you need to create a fibonacci function that given a 
// signature array/list, returns the first n elements - signature 
// included of the so seeded sequence.

// Signature will always contain 3 numbers; 
// n will always be a non-negative number; 
// if n==0, then return an empty array and be 
// ready for anything else which is not clearly specified.



// Function takes a number parameter, which represents how many items in array.
// Output is the fibonnaci sequence. Length of array should equal num parameter.
function fibonacciTest(num) {
	// specify here what two numbers will start the fibonnaci sequence.
	var fibList = [0,1];

	// repeat until reaches fibList length of num.
	while (fibList.length < num) {
		// add to fibList the sum of two preceding numbers in fibList.
		fibList.push(fibList[fibList.length - 2] + fibList[fibList.length - 1]);
	}

	return fibList;
}

console.log(fibonacciTest(9)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
