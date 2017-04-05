// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// examples:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN(pin) {
  var reg = /^\d+$/
  var isNum = reg.test(pin);
  if (!isNum) {
    return false;
  } else if (pin.length === 4 || pin.length === 6) {
    return true;
  } else if (pin.length !== 6) {
    return false;
  } else if (pin.length !== 4) {
    return false;
  }
}
console.log(validatePIN("1234"), true);
console.log(validatePIN("12345"), false);
console.log(validatePIN("a234"), false);
