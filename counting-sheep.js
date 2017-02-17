// Consider an array of sheep where some sheep may be missing from their
// place. We need a function that counts the number of sheep present in
// the array (true means present).

// For example:
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  var count = 0;
  for (var i=0; i<arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countSheeps([
   true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true])); // 17
