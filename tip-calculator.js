// Write a function, calculateTip(amount, rating) which calculates how much
// you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive. If an unrecognised rating is input,
// then you need to return:
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  var tipRatingPercentages = {
    terrible: 0.00,
    poor: 0.05,
    good: 0.10,
    great: 0.15,
    excellent: 0.20
  };
  if (tipRatingPercentages[rating.toLowerCase()] === undefined) {
    return 'Rating not recognised';
  } else {
    return Math.ceil(amount * tipRatingPercentages[rating.toLowerCase()]);
  }
}
console.log(calculateTip(20, "Excellent")); // 4
console.log(calculateTip(26.95, "good")); // 3
console.log(calculateTip(30, "meh")); // 'Rating not recognised'
