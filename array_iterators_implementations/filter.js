require('./forEach');

Array.prototype.filter = function(callback){
    let arr = this;
    let newArr = [];

    arr.forEach(function(item, index, array){
        if (callback(item, index, array)) {
            newArr.push(item);
        }
    });

    return newArr;
}