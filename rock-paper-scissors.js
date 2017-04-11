// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

function rps(p1, p2) {
  if (p1 === 'scissors' && p2 === 'rock') {
    return 'Player 2 won!';
  } else if (p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'scissors') {
    return 'Player 2 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!';
  } else if (p1 === 'rock' && p2 === 'paper') {
    return 'Player 2 won!';
  } else if (p1 === p2) {
    return 'Draw!';
  }
}
console.log(rps('scissors', 'rock'), 'Player 2 won!');
console.log(rps('scissors','paper'), 'Player 1 won!');
console.log(rps('paper','paper'), 'Draw!');
