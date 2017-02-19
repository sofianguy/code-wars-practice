// You have been recruited by an unknown organization for your cipher
// encrypting/decrypting skills.
// Being new to the organization they decide to test your skills.
// Your first test is to write an algorithm that encrypts the given string
// in the following steps.

// The first step of the encryption is a standard ROT13 cipher. This is a
// special case of the caesar cipher where the letter is encrypted with its
// key that is thirteen letters down the alphabet,
// i.e. A => N, B => O, C => P, etc..
// Part two of the encryption is to take the ROT13 output and replace each
// letter with its exact opposite. A => Z, B => Y, C => X.
// The return value of this should be the encrypted message.
// Do not worry about capitalization or punctuation. All encrypted messages
// should be lower case and punctuation free.
// As an example, the string "welcome to our organization" should return
// "qibkyai ty ysv yvgmzenmteyz".
// Good luck, and congratulations on the new position.

function encrypter(string) {
  var alphabet = {
    'a':'m',
    'b':'l',
    'c':'k',
    'd':'j',
    'e':'i',
    'f':'h',
    'g':'g',
    'h':'f',
    'i':'e',
    'j':'d',
    'k':'c',
    'l':'b',
    'm':'a',
    'n':'z',
    'o':'y',
    'p':'x',
    'q':'w',
    'r':'v',
    's':'u',
    't':'t',
    'u':'s',
    'v':'r',
    'w':'q',
    'x':'p',
    'y':'o',
    'z':'n'
  };
  var inputArray = string.split('');
  var output = [];

  for (var i=0; i<inputArray.length; i++) {
    if (alphabet.hasOwnProperty(inputArray[i])) {
      output.push(alphabet[inputArray[i]]);
    } else {
      output.push(inputArray[i]);
    }
  }
  return output.join('');
}
console.log(encrypter('welcome to our organization')); // 'qibkyai ty ysv yvgmzenmteyz'
console.log(encrypter('qibkyai ty ysv yvgmzenmteyz')); // 'welcome to our organization'

// ---------------------------------------------------------------------------
// ROT13 encryption:
function encrypter1(string) {
  var alpha = {
    'a':'n',
    'b':'o',
    'c':'p',
    'd':'q',
    'e':'r',
    'f':'s',
    'g':'t',
    'h':'u',
    'i':'v',
    'j':'w',
    'k':'x',
    'l':'y',
    'm':'z',
    'n':'a',
    'o':'b',
    'p':'c',
    'q':'d',
    'r':'e',
    's':'f',
    't':'g',
    'u':'h',
    'v':'i',
    'w':'j',
    'x':'k',
    'y':'l',
    'z':'m'
  };
  var inputArray = string.split('');
  var output = [];

  for (var i=0; i<inputArray.length; i++) {
    if (alpha.hasOwnProperty(inputArray[i])) {
      output.push(alpha[inputArray[i]]);
    } else {
      output.push(inputArray[i]);
    }
  }
  return output.join('');
}
console.log(encrypter1('welcome to our organization')); // 'jrypbzr gb bhe betnavmngvba'
console.log(encrypter1('jrypbzr gb bhe betnavmngvba')); // 'welcome to our organization'
