// The new "Avengers" movie has just been released! There are a lot of people
// at the cinema box office standing in a huge line. Each of them has a single
// 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every
// single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially
// has no money and sells the tickets strictly in the order people follow in
// the line?

// Return YES, if Vasya can sell a ticket to each person and give the change.
// Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100])
//     // => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(peopleInLine) {
  var cashRegister = 0;
  var ticketPrice = 25;
  for (var i=0; i<peopleInLine.length; i++) {
    var isChangeNeeded = peopleInLine[i] - ticketPrice > 0;
    var changeToGive = peopleInLine[i] - ticketPrice;
    cashRegister = cashRegister + ticketPrice;
    if (isChangeNeeded) {
      cashRegister = cashRegister - changeToGive;
      if (cashRegister < 0) {
        return 'NO';
      }
    }
  }
  return 'YES';
}
// console.log(tickets([25, 25, 50, 50])); // 'YES'
// console.log(tickets([25, 100])); // 'NO'
// console.log(tickets([25, 50, 25, 100])); // 'YES'
// console.log(tickets([25,25,50,100,25,25,25,100,25,50,25,100,25,25,25,100,50,50])); // 'YES'
console.log(tickets([25,50,25,100,25,25,25,100,25,25,50,100,50,50])); // 'YES'
console.log(tickets([ 25, 25, 25, 25, 25, 100, 100 ])); // 'YES'
console.log(tickets([100, 25, 25, 50])); // 'NO'

// steps:
// 1) peopleInLine gives $25 -- cashRegister gains $25 (ticketPrice)
// 2) clerk gives ticket (peopleInLine[i] - ticketPrice)
// 3) validate if peopleInLine[i] needs change (peopleInLine[i] - ticketPrice > 0)
// 4) clerk gives change if cashRegister has enough -- need validation
// 5) if cashRegister falls below $0 -- return 'NO'
