// Create a function that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (Math.abs(number) % 2 === 0) {
    return "Even";
  } else if (Math.abs(number) % 2 === 1) {
    return "Odd";
  }
}
console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(0), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-3), "Odd");
