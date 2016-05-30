'use strict';

// Example func
function loadProfiles(userNames){
	var loadingMessage, flashMessage; // JS hoists the variables inside func block
	if (userNames.length > 3) {
		var loadingMessage = "Take a while";
		displaySpinner("loadingMessage");
	} else { // This block is never called
		var flashMessage = "Loading"; // This variable is never assigned hence it's undefined
		displayFlash(flashMessage);
	}
	console.log(flashMessage); // returns undefined
}
loadProfiles(["Name", "Name", "Name", "Name"]); // > 3

// Introducing let
function loadProfiles(userNames){
	// let declarations are not hoisted
	if (userNames.length > 3) {
		let loadingMessage = "Take a while";
		displaySpinner("loadingMessage");
		console.log(flashMessage); // returns ReferenceError, not undefined
	} else {
		let flashMessage = "Loading";
		displayFlash(flashMessage);
	}
	console.log(flashMessage); // returns ReferenceError, not undefined
}
loadProfiles(["Name", "Name", "Name", "Name"]); // > 3

// Let in for loops
function loadProfiles(userNames){
	// ..
	for (var i in userNames) {
		fetchProfiles(`user/${userNames[i]}`, function(){
			console.log(`Fetched for ${userNames[i]}`); // Returns always index 3 because i is hoisted
		});
	}
}

function loadProfiles(userNames){
	// ..
	for (let i in userNames) {
		fetchProfiles(`user/${userNames[i]}`, function(){
			console.log(`Fetched for ${userNames[i]}`); // works fine because i is always a new index
		});
	}
}

// Difference between reassign and redeclare
let flashMessage = "Hello";
flashMessage = "Goodbye"; // reassign

let flashMessage = "Hello";
let flashMessage = "Goodbye"; // Error, cannot redeclare

let flashMessage = "Hello";
function loadProfiles(){
	let flashMessage = "Goodbye"; // No error, different scope
}














