// Iterators, a way of looping through plain javascript objects
// While we can use for of loops with arrays:

let names = ['Sam', 'Tyler', 'Brook'];
for (let name of names) {
	console.log(name);
} // This is what's really happening
let iterator = names[Symbol.iterator](); // Access the Array prototype object Symbol class

let firstRun = iterator.next(); // Returns {done: false, value: 'Sam'}
let name = firstRun.value;

let secondRun = iterator.next(); // Returns {done: false, value: 'Sam'}
let name = secondRun.value; 

let thirdRun = iterator.next(); // Returns {done: false, value: 'Sam'}
let name = thirdRun.value;

let fourthRun = iterator.next(); // Returns {done: true, value: undefined}


// Now, let's recreate an iterator with objects
let post = {
	title: 'New features in JS',
	replies: 19
};

post[Symbol.iterator] = function(){

	let properties = Objects.keys(this); // Returns array wit property names
	let count = 0; // Access properties array by index
	let isDone = false; // Will be set to true

	let next = () => {
		if (count >= properties.length) isDone = true;
		return { done: isDone, value: this[properties[count++]] }; // this refers to the post object
	}

	return { next };

};

// We can use our iterator now
for (let p of post) {
	console.log(p); // New features in JS // 19
}

let values = [...post];
console.log(values); // ['New features in JS', 19]

let [title, replies] = post;
console.log(title); // New features in JS
console.log(replies); // 19






























