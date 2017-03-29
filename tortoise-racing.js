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

function race(v1, v2, g) {
  var time = g / (v2 - v1) * 3600;

  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(((time/60) - minutes) * 60);
  var hours = Math.floor(minutes / 60);
  minutes = minutes - (hours*60);

  return [hours, minutes, seconds];
}

var {test} = require('tap');
test('1 - v2 should catch up in 3600 seconds (1 hour)', t => {
  t.deepEquals(race(80, 160, 80), [1,0,0]);
  t.end();
});

test('2 - v2 should catch up in 5400 seconds (1.5 hours)', t => {
  t.deepEquals(race(80, 160, 120), [1,30,0]);
  t.end();
});

test('v1: 720 v2:  850 g:  70', t => {
  t.deepEquals(race(720, 850, 70), [0, 32, 18])
  t.end()
});
