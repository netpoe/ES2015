'use strict';
// Sets are different than arrays because no duplicate values are allowed

let tags = new Set();

tags.add('Javascript');
tags.add('Programming');
tags.add({version: '2015'});
tags.add('Web');
tags.add('Web'); // This will be ignored

console.log(`Total items ${tags.size}`); // 4 not 5

tags.clear(); // Clears the whole set


// Using for of loops
for (let tag of tags) {
	console.log(tag);
}

let [a, b, c, d] = tags;
console.log(a, b, c, d); // 'Javascript' 'Programming' {version: '2015'} 'Web'



// WeakSets
// Allow only object values

let weakTags = new WeakSet();

weakTags.add({name: 'Javascript'});
let iOS = {name: 'iOS'};
weakTags.add(iOS);

weakTags.has(iOS); // true
weakTags.delete(iOS); // true



// Using this and forEach
let set = new Set([1, 2]),
		processor = {
	    output(value) {
        console.log(value);
	    },
	    process(dataSet) {
        dataSet.forEach(function(value) {
          this.output(value);
        }, this);
	    }
		};
processor.process(set);

// Using arrow funcs
let set = new Set([1, 2]),
    processor = {
      output(value) {
        console.log(value);
      },
      process(dataSet) {
        dataSet.forEach((value) => this.output(value));
      }
    };
processor.process(set);



// Converting a set to an array without duplicates
let set = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [...set];

console.log(array);             // [1,2,3,4,5]

// Using the spread operator (...) wisely
function eliminateDuplicates(items) {
  return [...new Set(items)];
}

let numbers = [1, 2, 3, 3, 3, 4, 5],
    noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates);      // [1,2,3,4,5]



// When to use sets?
// Example: showing unread posts
let post = { isRead: false };
let postsArray = [ {isRead: false}, {isRead: false} ];

postList.addEventListener('click', (event) => {
	//..
	post.isRead = true; // This alters the post object 
});

for (let post of postsArray) {
	if (!post.isRead) {
		addNewPostClass(post, 'is-read');
	}
}

// With WeakSets we can populate a new WeakSet with only read post objects
let readPosts = new WeakSet();

postList.addEventListener('click', (event) => {
	//..
	readPosts.add(post); // Adds object to a group of read posts
});

for (let post of postsArray) {
	if (readPosts.has(post)) {
		addNewPostClass(post, 'is-read');
	}
}

















