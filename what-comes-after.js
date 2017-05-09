// You will be given two inputs: a string of words and a letter. For each string,
// return the alphabetic character after every instance of letter (case
// insensitive).

// If there is a number, punctuation or underscore following the letter, it
// should not be returned.

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"
// Return an empty string if there are no instances of letter in the given string.

function comesAfter(str,l) {
  var output = '';
  for (var i=0; i<str.length-1; i++) {
   if (str[i].toUpperCase() === l.toUpperCase()) {
      if (str[i+1].match(/^[A-Z]+$/i)) {
        output = output + str[i+1];
      }
    }
  }
  return output;
}
console.log(comesAfter("Pirates say arrrrrrrrr.",'r'),'arrrrrrrr');
console.log(comesAfter("Free coffee for all office workers!",'F'),'rfeofi');
console.log(comesAfter("king kUnta is the sickest rap song ever kNown k!",'k'),'iUeN');
console.log(comesAfter("p8tice makes pottery p0rfect!",'p'),'o');
console.log(comesAfter("d8u d._ rly 2d1s",'D'),'');
console.log(comesAfter("nothing to be found here",'z'),'');
console.log(comesAfter('S  RRRV6WH Le hE d3fU   J A cgTnfcaIggFGpMdfaV  b 0dJ odl1zUye4bs ow', 'w') );
