// ROT13 is a simple letter substitution cipher that replaces a letter with the
// letter 13 letters after it in the alphabet. ROT13 is an example of the
// Caesar cipher.

// Create a function that takes a string and returns the string ciphered with
// Rot13. If there are numbers or special characters included in the string,
// they should be returned as they are. Only letters from the latin/english
// alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using "encode" in Python is considered cheating.

function rot13(message) {
  var alphabet = {
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

  var messageArr = message.split('');
  var output = [];
  for (var i=0; i<messageArr.length; i++) {
    var isUppercase = messageArr[i].toUpperCase() === messageArr[i];
    var isLowercase = messageArr[i].toLowerCase() === messageArr[i];
    if (alphabet.hasOwnProperty(messageArr[i]) && isLowercase) {
      output.push(alphabet[messageArr[i]]);
    } else if (alphabet.hasOwnProperty(messageArr[i].toLowerCase()) && isUppercase) {
      output.push(alphabet[messageArr[i].toLowerCase()].toUpperCase());
    } else {
      output.push(messageArr[i]);
    }
  }
  return output.join('');
}

var {test} = require('tap');
test('1 - test one lowercase letter t should return g', t => {
  t.equals(rot13('t'), 'g');
  t.end();
});

test('2 - one lowercase word', t => {
  t.equals(rot13('test'), 'grfg');
  t.end();
});

test('3 - one uppercase letter', t => {
  t.equals(rot13('T'), 'G');
  t.end();
});

test('4 - uppercase and lowercase input', t => {
  t.equals(rot13('Codewars'), 'Pbqrjnef');
  t.end();
});

test('5 - uppercase, lowercase, numbers, punctuation, spaces', t => {
  t.equals(rot13('10+2 is twelve.'), '10+2 vf gjryir.');
  t.end();
});

test('6 - test for encrypted word to decrypted word', t => {
  t.equals(rot13('Pbqrjnef'), 'Codewars');
  t.end();
});
