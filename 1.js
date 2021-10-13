function loop(start, end, cb) {
        if (start < end) {
            cb(start);
            return loop(start + 1, end, cb);
    }
}
var array = ['Javascrip', 'PHP', 'Ruby'];

loop(0, array.length, function(index) {
    console.log(array[index]);
}):
