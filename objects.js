'use strict';

// Removing repetition from creating objects
// Old way;
function buildUser(first, last){
	let fullName = first + " " + last;
	return {first: first, last: last, fullName: fullName};
}

// Object initializer
function buildUser(first, last){
	let fullName = first + " " + last;
	return {first, last, fullName}; // Names must match from func
}

// Call the buildUSer func - it has a shorthand too
let user = buildUser("Sam", "Williams");
console.log(user.first);
console.log(user.last);
console.log(user.fullName);


// Another shorthand
let name = "Sam";
let age = 45;
let friends = ["Brook", "Tyler"];

let user = {name, age, friends};
console.log(user.name);
console.log(user.age);
console.log(user.friends);


// Object desctructuring
let {first, last, fullName} = buildUser("Sam", "Williams");
console.log(first);
console.log(last);
console.log(fullName);

// We can ask for specific properties
let {last, fullName} = buildUser("Sam", "Williams");
console.log(last);
console.log(fullName);



// Assigning functions to objects
// old way
function buildUser(first, last, postCount){
	let fullName = first + " " + last;
	const ACTIVE_POST_COUNT = 10;

	return {
		first,
		last,
		fullName,
		isActive: function(){ // old way
			return postCount >= ACTIVE_POST_COUNT;
		}
	}
}

// new way
function buildUser(first, last, postCount){
	let fullName = first + " " + last;
	const ACTIVE_POST_COUNT = 10;

	return {
		first,
		last,
		fullName,
		isActive(){ // no function keyword
			return postCount >= ACTIVE_POST_COUNT;
		}
	}
}


// Object.assign
// Old way
function countdownTimer(element, time, options) {
	var container = options.container || '.time-container';
	var option1 = options.option1 || 'option1'; // etc...
}

// New way
function countdownTimer(element, timeout, options = {}) {

	let defaults = {
		container: 			'.time-container',
		timeUnit: 			'timeUnit',
		clonedDataAttr: 'cloned',
		timeOutClass: 	'.is-timeout',
		isActiveClass: 	'.active-class'
	};

	// Extend defaults with passed options and declare a new settings object
	let settings = Object.assign({}, defaults, options);

	// Then we can use the properties of both defaults and settings
	if (settings.timeUnit !== defaults.timeUnit) {
		// Do something
	}

}
// Calling the function
countdownTimer('.element', 60, {container: '.new-post-container'});

// Consider that if we pass 2 objects to the let settings = Object.assign();
let options1 = {
  container:       ".main-container",
  isActiveClass:   ".is-active-element"
};

let options2 = {
  isActiveClass:   ".is-active-content"
};

// Like this
let settings = Object.assign({}, defaults, options1, options2);

// The result of settings will be:
{ container: '.main-container', isActiveClass: '.is-active-content' }







