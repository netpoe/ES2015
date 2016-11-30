Array.prototype.forEach = function(callback){
    let arr = this;
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}