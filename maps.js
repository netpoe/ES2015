'use strict';
// It's a new data structure that consists of Key - Value pairs
// Example:
let user1 = {name: 'Tom'};
let user2 = {name: 'Andrew'};

let totalReplies = new Map();
totalReplies.set(user1, 5);
totalReplies.set(user2, 42);

console.log(totalReplies.get(user1)); // 5
console.log(totalReplies.get(user2)); // 42
console.log(totalReplies); // Map { { name: 'Tom' } => 5, { name: 'Andrew' } => 42 }

// Using maps in For... Loops
let mapSettings = new Map();

mapSettings.set('user', 'Sam');
mapSettings.set('topic', 'ES015');
mapSettings.set('replies', ['Can\'t wait', 'So cool!']);

console.log(mapSettings.get('topic')); // ES2015
console.log(mapSettings); // Map {
												  // 'user' => 'Sam',
												  // 'topic' => 'ES015',
												  // 'replies' => [ 'Can\'t wait', 'So cool!' ] }

for (let [key, value] of mapSettings) {
	console.log(`${key} = ${value}`);
}

// Using forEach
mapSettings.forEach(function(value, key, ownerMap) {
	console.log(`${key} = ${value}`);
});

totalReplies.forEach(function(value, key, ownerMap) {
	console.log(`${key['name']} = ${value}`);
}); // Tom = 5
		// Andrew = 42




// WeakMaps
// Are not iterable
// Only objects can be passed as data types
let user = {};

let mapSettings2 = new WeakMap();
mapSettings2.set(user, 'ES2015');

console.log(mapSettings2); // WeakMap {}
console.log(mapSettings2.get(user)); // 'ES2015'
console.log(mapSettings2.has(user)); // true
console.log(mapSettings2.delete(user)); // true if had it




// Map initialization
let map = new Map([ ["name", "Nicholas"], ["age", 25]]);

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "Nicholas"
console.log(map.has("age"));    // true
console.log(map.get("age"));    // 25
console.log(map.size);          // 2
map.clear(); // clears the whole Map 




// When to use maps and objects?
let recentPosts = new Map();

createPost('New Post', (data) => {
	recentPosts.set(data['author'], data['message']);
}); // Keys are unknown until runtime, so map

// Otherwise
const POSTS_PER_PAGE = 15;
let userSettings = {
	perPage: POSTS_PER_PAGE,
	showRead: true
}; // Keys are known, so object











