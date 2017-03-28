// Two tortoises named A and B must run a race. A starts with an average speed
// of 720 feet per hour. Young B knows she runs faster than A and furthermore
// has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B speed
// is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed,
// integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [h, mn, s] where h, mn, s is the time needed in
// hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2
// then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go.

// Examples:
// race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37) => [3, 21, 49]

function raceHours(v1, v2, g) {
  var hours = 0;
  var turtleA = g;
  var turtleB = 0;

  while (turtleB < turtleA) {
    hours++; // hour
    turtleA = turtleA + v1;
    turtleB = turtleB + v2;
  }
  return hours;
}

var {test} = require('tap');
test('1 - v2 should catch up in 1 hour', t => {
  t.deepEqual(raceHours(80, 160, 80), 1);
  t.end();
});

test('2 - v2 should catch up in 2 hours', t => {
  t.deepEqual(raceHours(80, 160, 120), 2);
  t.end();
});
