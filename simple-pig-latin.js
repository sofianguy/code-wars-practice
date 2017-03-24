// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('This is my string'); // hisTay siay ymay tringsay

function pigIt(str) {
  var strArray = str.split(' ');
  var output = [];
  for (var i=0; i<strArray.length; i++) {
    output.push(strArray[i].slice(1) + strArray[i][0] + 'ay');
  }
  return output.join(' ');
}

var {test} = require('tap');
test('1 - pig latin one word', t => {
  t.equal(pigIt('Pig'), 'igPay');
  t.end();
});

test('2 - pig latin one word using String.slice()', t => {
  t.equal(pigIt('Pig'), 'igPay');
  t.end();
});

test('3 - pig latin two words', t => {
  t.equal(pigIt('Pig latin'), 'igPay atinlay');
  t.end();
});

test('4 - pig latin whole sentence', t => {
  t.equal(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
  t.end();
});
