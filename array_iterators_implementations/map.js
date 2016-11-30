require('./forEach');

Array.prototype.map = function(callback){
    let arr = this;
    let newArr = [];
    arr.forEach(function(item, index, array){
        newArr.push(callback(item, index, array));
    });
    return newArr;
}