// small city population of 1000
// increases by 2% each year and a 50 people increase
// how many years before the population reaches a population of 1200

function nbYear(p0, percent, aug, p) {
    // your code
    var numYears = 0;
    var pop = p0;
    while (pop <= p) {
    	numYears = numYears + 1;
      pop = pop + (pop * percent) + aug;
    }
    return numYears;
}

console.log(nbYear(1000, 0.02, 50, 1200));	