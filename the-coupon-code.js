// Your online store likes to give out coupons for special occasions. Some
// customers try to cheat the system by entering invalid codes or using
// expired coupons.

// Your mission:
// Write a function called checkCoupon to verify that a coupon is valid and
// not expired. If the coupon is good, return true. Otherwise, return false.
// A coupon expires at the END of the expiration date. All dates will be passed
// in as strings in this format: "June 15, 2014"

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
