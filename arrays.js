// Array destructuring

// Before
var users = ['Tom', 'Kyle', 'Jenny'];

var a = users[0];
var b = users[1];
var c = users[2];

console.log(a, b, c);

// Now
let users = ['Tom', 'Kyle', 'Jenny'];
let [a, b, c] = users;
console.log( a, b, c );

// You can discard values
let [a, , b] = users;
console.log(a, b); // 'Tom', 'Jenny'

// Or use ...rest params
let [ first, ...rest ] = users;
console.log(first, rest); // 'Tom', ['Kyle', 'Jenny']


// New for of loop
// To know if an object works with for ...of loops:
let users = ['Tom', 'Kyle', 'Jenny'];
console.log(typeof names[Symbol.iterator]);

for (let name in names) {
	console.log(name);
}



// Finding an element in an Array
let users = [
	{login: 'Tom', 		admin: false},
	{login: 'Kyle', 	admin: true},
	{login: 'Jenny', 	admin: true},
];

let admin = users.find((user) => {
	return user.admin;
});
console.log(admin); // {login: 'Kyle', admin: true}

// Shorter version
let admin = users.find(user => user.admin);
console.log(admin); // {login: 'Kyle', admin: true}









