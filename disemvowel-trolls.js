// Description:
// Trolls are attacking your comment section!
// A common way to deal with this situation is to 
// remove all of the vowels from the trolls' comments, 
// neutralizing the threat.
// Your task is to write a function that takes a string 
// and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!"
// would become "Ths wbst s fr lsrs LL!".

var vowelsArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

function disemvowel(str) {
	var newStr = '';
	for (i=0; i<str.length; i++) {
		if (str[i] === ) {

		} else {

		}
	}
	return newStr;
}

function disemvowel(str) {
	var newStr = '';
	for (i=0; i<str.length; i++) {
    if(str[i] === "a" || 
       str[i] === "e" || 
       str[i] === "i" || 
       str[i] === "o" || 
       str[i] === "u" ||
       str[i] === "A" || 
       str[i] === "E" ||
       str[i] === "I" ||
       str[i] === "O" ||
       str[i] === "U") {
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}


function disemvowel(str) {
  var result = '';
  
  for(var i = 0; i < str.length; i++) {
    var test = str.charAt(i).toLowerCase();
    if (test !== 'a' && test !== 'e' && test !== 'i' && test !== 'o' && test !== 'u') {
      result = result + str.charAt(i);
    }
  }
  
  return result;
}