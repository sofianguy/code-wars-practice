// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to
// know how many years 'Y' this sum has to be kept in the bank in order for
// this sum of money to amount to 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly,
// and the new sum is re-invested yearly after paying tax 'T'.

// Note that the principal is not taxed but only the year's accrued interest
// Example:
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
//
// After 1st Year -->   P = 1041.00
// After 2nd Year -->   P = 1083.86
// After 3rd Year -->   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to amount
// to the desired sum.
// Assumptions : Assume that Desired Principal 'D' is always greater than the
// initial principal, however it is best to take into consideration that if the
// Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// Your task is to complete the method provided and return the number of years
// 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

function calculateYears(principal, interest, tax, desired) {
  // starting deposit is the starting principal for year 1
  // .toFixed() converts number to string
  // parseInt() will convert string to number, but rounded number
  // use parseFloat() instead to include decimal number

  var interestFromPrincipal = parseFloat((principal * interest).toFixed(2));
  var interestAfterTax = parseFloat((interestFromPrincipal - (interestFromPrincipal * tax)).toFixed(2));
  var newPrincipal = parseFloat((principal + interestAfterTax).toFixed(2));
  var countYears = 1;

  if (desired == principal) {
    return 0;
  }

  while (desired > newPrincipal) {
    interestFromPrincipal = parseFloat((newPrincipal * interest).toFixed(2));
    interestAfterTax = parseFloat((interestFromPrincipal - (interestFromPrincipal * tax)).toFixed(2));
    newPrincipal = parseFloat((newPrincipal + interestAfterTax).toFixed(2));

    countYears = countYears + 1;
  }

  return countYears;
}

console.log(calculateYears(1000.00, 0.05, 0.18, 1100.00)); // 3

// STEP-BY-STEP:
// first year:
// 1) principal plus interest: 1000 * 1.05 = 1050
// 2) calculate tax (interest * tax rate)
//      interest = 1000 * 0.05 = 50
//      taxed = 50 * 0.18 = 9
//      subtract tax from interest = 50 - 9 = 41
// 3) add principal plus interest after tax = 1000 + 41 = 1041
// 4) continue because not greater than 1100 desired amount
// second year:
// 1) remaining principal (from first year) = 1041
// 2) principal plus interest: 1041 * 1.05 = 1093.05
// 3) calculate tax (interest * tax rate)
//      interest = 1041 * 0.05 = 52.05
//      taxed = 52.05 * 0.18 = 9.369
//      subtract tax from interest = 52.05 - 9.369 = 42.681
// 4) add principal plus interest after tax = 1041 + 42.681 = 1083.681
// 5) continue because not greater than 1100 desired amount
// third year:
// 1) remaining principal from second year = 1083.681
// 2) principal plus interest = 1083.681 * 1.05 = 1137.865
// 3) calculate tax (interest * tax rate)
//      interest = 1083.681 * 0.05 = 54.184
//      taxed = 54.184 * 0.18 = 9.753
//      subtract tax from interest = 54.184 - 9.753 = 44.431
// 4) add principal plus interest after tax = 1083.681 + 44.431 = 1128.112
// 5) stop because amount is over desired amount of 1100
// 6) count the number of years
