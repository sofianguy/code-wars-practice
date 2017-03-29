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
  var seconds = 0;
  var turtleA = g; // starting point turtleA
  var turtleB = 0; // starting point turtleB

  while (turtleB <= turtleA) {
    seconds++;
    turtleA = turtleA + (v1/3600);
    turtleB = turtleB + (v2/3600);
  }
  return seconds;
}

function convertSeconds(givenSeconds) {
  var minutes = Math.floor(givenSeconds / 60);
  var hours = Math.floor(minutes / 60);
  minutes = minutes - (hours*60);
  var seconds = minutes % 60;

  return [hours, minutes, seconds];
}

var {test} = require('tap');
test('1 - v2 should catch up in 3600 seconds (1 hour)', t => {
  t.equal(raceHours(80, 160, 80), 3600);
  t.end();
});

test('2 - v2 should catch up in 5400 seconds (1.5 hours)', t => {
  t.equal(raceHours(80, 160, 120), 5400);
  t.end();
});


function race(v1, v2, g) {
  var totalSeconds = 0;
  var turtleA = g; // starting point turtleA
  var turtleB = 0; // starting point turtleB

  while (turtleA > turtleB) {
      totalSeconds++;
      turtleA = turtleA + (v1/3600);
      turtleB = turtleB + (v2/3600);
  }
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = ((totalSeconds/60) - minutes) * 60;
  var hours = Math.floor(minutes / 60);
  minutes = minutes - (hours*60);

  return [hours, minutes, seconds];
}

console.log(race(720, 850, 70), [0, 32, 18]);
