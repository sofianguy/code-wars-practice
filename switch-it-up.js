// When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// Try using "Switch" statements.

function switchItUp(number) {
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six',
              'Seven', 'Eight', 'Nine'];
  return words[number];
}
console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");
