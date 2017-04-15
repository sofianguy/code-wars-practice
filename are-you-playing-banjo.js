// Create a function which answers the question "Are you playing Banjo?". If
// your name starts with the letter "R" or lower case "r", you are playing Banjo!

// The function takes a name as its only argument, and returns one of the
// following strings:
// C# name + "plays banjo" name + "does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
}
console.log(areYouPlayingBanjo('Martin'), '|', 'Martin does not play banjo');
console.log(areYouPlayingBanjo('Rikke'), '|', 'Rikke plays banjo');
