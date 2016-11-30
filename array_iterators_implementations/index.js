require('./forEach');
require('./map');
require('./filter');
require('./reduce');

let arr = [0,2,4,6];

arr.forEach(function(item, index, arr){
    // console.log(item); // 2, 4, 6
});

var newArr = arr.map(function(item, index, array){
    return item *= 2;
});
// console.log(newArr); // [ 4, 8, 12 ]

var newArr = arr.filter(function(item, index, array){
    return item > 2;
});
// console.log(newArr); // [ 2 ]

var initialValue = 0;
var newArr = arr.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
}, initialValue);
console.log(newArr);










