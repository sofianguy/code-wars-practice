// Every day you rent the car costs $40. If you rent the car for 7 or more days,
// you get $50 off your total. Alternatively, if you rent the car for 3 or more
// days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  var beforeDiscount = d * 40;
  if (d >= 7) {
    return beforeDiscount - 50;
  } else if (d >= 3) {
    return beforeDiscount - 20;
  } else {
    return beforeDiscount;
  }
}
console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(9), 310);
