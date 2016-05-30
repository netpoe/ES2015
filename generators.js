// The function * declaration defines generator functions. These are special functions from which   we can use the yield keyword to return iterator objects.
function *nameList(){
	yield 'Sam';  // {done: false, value: 'Sam'}
	yield 'Tyler'; // {done: false, value: 'Tyler'}
}

for (let name of nameList()) {
	console.log(name); // Sam // Tyler
}

let names = [...namesList()];
console.log(names); // ['Sam', 'Tyler']

let [first, second] = namesList();
console.log(first, second); // Sam Tyler


// Using * and yield with iterator functions
let post = {
	title: 'New features in JS',
	replies: 19
};

post[Symbol.iterator] = function *(){

	let properties = Objects.keys(this); 
	let count = 0; 
	let isDone = false; 

	for (let p of properties) {
		yield this[p];
	}

};

// We can use our iterator now
for (let p of post) {
	console.log(p); // New features in JS // 19
}