// You will be given an array of objects representing data about developers who 
// have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array which includes the developer who is the oldest. 
// In case of a tie, include all same-age senior developers listed in the same order 
// as they appeared in the original input array.

// For example, given the following input array:
// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];

// your function should return the following array:
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

// Notes: The input array will always be valid and formatted as in the example above.

function findSenior(list) {
	// Start with first object in given array and put it in a new array that will be the result.
	var mostSenior = [list[0]];

	for (var i=1; i<list.length; i++) {
		// Compare first object with next object. If equal value then add to new array.
		// if there are several objects added to the new array, the value 'age' should all be the same for comparison.
		if (list[i].age === mostSenior[0].age) {
			mostSenior.push(list[i]);
			// if the next object's property 'age' is larger than the new array's 'age', 
			// replace the entire new array with an array of the object with the new largest property value 'age'
		} else if (list[i].age > mostSenior[0].age) {
			mostSenior = [list[i]];
		}
	}

	return mostSenior;
}

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
console.log(findSenior(list1));
// [ { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
// { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' } ]

var list2 = [
	{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
	{"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Clojure"},
	{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}
]
console.log(findSenior(list2));
// [ {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Clojure"} ]

