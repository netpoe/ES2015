'use strict';

// Predefined parameters
// Before
function loadProfiles(usernames){
	let names = typeof usernames !== undefined ? usernames : []; // too verbose
	let namesLength = names.length;
}

// After
// Use default params
function loadProfiles(usernames = []){
	let namesLength = usernames.length;
}

// Call the func and both run without type error
loadProfiles();
loadProfiles(undefined);


// Named params
function setPageThread(name, {popular, expires, activeClass} = {}){ // Assign to empty object
	console.log(`Name:    ${name}`);
	console.log(`Popular: ${popular}`);
	console.log(`Expires: ${expires}`);
	console.log(`Active:  ${activeClass}`); // Available as local vars
}

setPageThread("New thread", {
	popular: false,
	expires: new Date(),
	activeClass: 'active'
});

setPageThread("Another thread", {
	popular: true, // You can leave options out and it'll return undefined, but not an error
});

setPageThread("Another thread"); // Returns object with keys undefined but not error



// Rest parameters
// problem
function displayTags(){
	for (let i in arguments) { // arguments is an array like native object that contains unlimited params passed to the func
		let tag = arguments[i]; // Where does the arguments param come from?
		addTopic(tag);
	}
}

function displayTags(targetElement){
	let target = findElement(targetElement);
	for (let i in arguments) { // loop will break because now there is an argument
		let tag = arguments[i];
		addTopic(tag);
	}
}

// Solution
function displayTags(...tags){ // syntax has ... 3 dots
	for (let i in tags) { 
		let tag = tags[i];
		addTopic(tag);
	}
}

function displayTags(targetElement, ...tags){ // always goes last
	let target = findElement(targetElement);
	for (let i in tags) {
		let tag = tags[i];
		addTopic(tag);
	}
}



// Spread operator
getRequest('/topics/17/tags', function(data){
	let tags = data.tags;
	displayTags(...tags);
});
// The displayTags(...tags); function call is not passing an array but each element of the array
// Like this
// displayTags(tag, tag, tag, tag);



// Arrow functions
function TagComponent(target, urlPath){
	this.targetElement = target;
	this.urlPath = urlPath;
}

TagComponent.prototype.render = function(){
	getRequest(this.urlPath, function(data){
		let tags = data.tags;
		displayTags(this.targetElement, ...tags); // this.targetElement is not defined because is not passed into the scope of the get request function
	});
}

TagComponent.prototype.render = function(){
	getRequest(this.urlPath, (data) => { // The => successfully passes the 'this' to the inner scopes
		let tags = data.tags;
		displayTags(this.targetElement, ...tags);
	});
}

let tagComponent = new TagComponent(targetDiv, '/topics/17/tags');
tagComponent.render();
















