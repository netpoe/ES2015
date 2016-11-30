require('./forEach');

Array.prototype.reduce = function(callback, initialValue){
    var accumulator = (initialValue != undefined) ? initialValue : 1, 
        currentValue, 
        currentIndex, 
        array;

    var arr = this;

    arr.forEach(function(item, index, $array){
        currentValue = item;
        currentIndex = index;
        array = $array;
        accumulator = callback(accumulator, currentValue, currentIndex, array);
    });

    return accumulator;
}