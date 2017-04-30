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

function switchItUp1(number) {
  switch(number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'idk';
  }
}
console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");
