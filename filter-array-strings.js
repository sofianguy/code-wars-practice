// Make a program that filters a list of strings and returns a 
// list with only your friends name in it.
// If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
	// Sort array of strings to alphabetical order
	var sortedFriends = friends.sort();

	// Apparently I only have friends with 4 letter names.
	// So I'm going to add these friends to a new list called "realFriends".
	var realFriends = [];
	// First I reject names that aren't 4 letters long. #bye
	// Then I only add names that are 4 letters long to list realFriends. #hi
	for (var i=0; i<sortedFriends.length; i++) {
		if (sortedFriends[i].length === 4) {
			realFriends.push(sortedFriends[i]);
		}
	}

	if (realFriends = []) {
		return "NoFriends4U. No 4-letter names in given list."
	}
	
	// Return output of new friends list 
	return realFriends;
}

var pplList = ["Ryan", "Kieran", "Jason", "Yous"];
console.log(friend(pplList));
