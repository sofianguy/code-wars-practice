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

// if all money were $1 bills
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
// console.log(tickets([25,50,25,100,25,25,25,100,25,25,50,100,50,50])); // 'YES'
// console.log(tickets([ 25, 25, 25, 25, 25, 100, 100 ])); // 'YES'
// console.log(tickets([100, 25, 25, 50])); // 'NO'

// steps:
// 1) peopleInLine gives $25 -- cashRegister gains $25 (ticketPrice)
// 2) clerk gives ticket (peopleInLine[i] - ticketPrice)
// 3) validate if peopleInLine[i] needs change (peopleInLine[i] - ticketPrice > 0)
// 4) clerk gives change if cashRegister has enough -- need validation
// 5) if cashRegister falls below $0 -- return 'NO'

// ----------------------------------------------------------------------------
class CashRegister {
  constructor() {
    this.bill25Count = 0;
    this.bill50Count = 0;
  }

  makeChange(payment) {
    if (payment === 25) {
      this.bill25Count++;
      return 0;
    } else if (payment === 50) {
      this.bill50Count++
      if (this.bill25Count >= 1) {
        this.bill25Count--;
        return 25;
      } else {
        return -1;
      }
    } else if (payment === 100) {
      // we can give change for 100 if we have one 25, and one 50
      if (this.bill25Count>=1 && this.bill50Count>=1) {
        this.bill25Count--;
        this.bill50Count--;
        return 75;
      }
      // we can also give change if we have 3x 25s
      else if (this.bill25Count>=3) {
        this.bill25Count = this.bill25Count - 3;
        return 75;
      } else {
        return -1;
      }
    }
  }
}

function tickets(payments) {
  var cr = new CashRegister();
  for (var i=0; i<payments.length; i++) {
    if (cr.makeChange(payments[i]) < 0) {
      return 'NO';
    }
  }
  return 'YES';
  // payments is an array
  // create new CashRegister
  // in loop, submit payment
  // return 'YES' or 'NO' if works or fails
}

console.log(tickets([25]), 'YES');
console.log(tickets([50]), 'NO');
console.log(tickets([25,50]), 'YES');
console.log(tickets([25,100]), 'NO');
console.log(tickets([ 25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100 ]), 'NO');
console.log(tickets([ 25, 25, 50, 100, 25, 50, 25, 100, 25, 50, 25, 100]), 'YES');

// test cases:
// var cr1 = new CashRegister();
// console.log(cr1.makeChange(25), 0);
// console.log(cr1.makeChange(50), 25);
// console.log('---------------------------');
//
// var cr2 = new CashRegister();
// console.log(cr2.makeChange(50), -1);
// console.log('---------------------------');
//
//
// var cr3 = new CashRegister();
// console.log(cr3.makeChange(25), 0);
// console.log(cr3.makeChange(50), 25);
// console.log(cr3.makeChange(25), 0);
// console.log(cr3.makeChange(100), 75);
// console.log('---------------------------');
//
//
// var cr4 = new CashRegister();
// console.log(cr4.makeChange(100), -1);
// console.log('---------------------------');
//
//
// var cr5 = new CashRegister();
// console.log(cr5.makeChange(25), 0);
// console.log(cr5.makeChange(25), 0);
// console.log(cr5.makeChange(25), 0);
// console.log(cr5.makeChange(100), 75);
// console.log('---------------------------');
//
// var cr6 = new CashRegister();
// console.log(cr6.makeChange(25), 0);
// console.log(cr6.makeChange(50), 25);
// console.log(cr6.makeChange(50), -1);
// console.log('---------------------------');
//
// var cr7 = new CashRegister();
// console.log(cr7.makeChange(25), 0);
// console.log(cr7.makeChange(50), 25);
// console.log(cr7.makeChange(25), 0);
// console.log(cr7.makeChange(100), 75);
// console.log(cr7.makeChange(50), -1);
// console.log('---------------------------');
//
// var cr8 = new CashRegister();
// console.log(cr8.makeChange(25), 0);
// console.log(cr8.makeChange(25), 0);
// console.log(cr8.makeChange(25), 0);
// console.log(cr8.makeChange(100), 75);
// console.log(cr8.makeChange(50), -1);
// console.log('---------------------------');
