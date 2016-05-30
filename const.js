'use strict';

// const avoids the use of 'magic numbers'
function loadProfiles(userNames){
	if (userNames.length > 3) { // Is this 3 the same as the other one?
		// ..
	}
	if (someElement > 3) {
		// ..
	}
}

function loadProfiles(userNames){
	const MAX_USERS = 3; // The convention is with uppercase and underscore
	MAX_USERS = 10; // Cannot be reassigned
	if (userNames.length > MAX_USERS) {
		// ..
	}
	const MAX_REPLIES = 3;
	if (someElement > MAX_REPLIES) {
		const CONST = ";"; // Consts are not hoisted
		// ..
	}

	const MAX; // Error, needs to have value
	MAX = 10;

}