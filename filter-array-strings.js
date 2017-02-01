// Make a program that filters a list of strings and returns a 
// list with only your friends name in it.
// If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
	// Apparently I only have friends with 4 letter names.
	// So I'm going to add these friends to a new list called "realFriends".
	var realFriends = [];

	// First I reject names that aren't 4 letters long. #bye
	// Then I only add names that are 4 letters long to list realFriends. #hi
	for (var i=0; i<friends.length; i++) {
		if (friends[i].length === 4) {
			realFriends.push(friends[i]);
		}
	}

	// But what if none of the names on the list are 4-letters long?
	// #NoFriends4U #sadface
	if (realFriends = 'undefined') {
		return "NoFriends4U. No 4-letter names in given list."
	} else {
		// But if there are 4-letter names, return new friends list 
		return realFriends;		
	}
}

var pplList = ["Ryan", "Kieran", "Jason", "Yous"];
console.log(friend(pplList));
