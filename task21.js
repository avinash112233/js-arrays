var array = [2, 4, 7, 1, 3, 8, 9]

const arrsort = arr => arr.sort((a, b) => a - b);

const test = (arr) => {
    var copy = arrsort(arr.slice()),
        result = [],
        fn = 'pop';
    while (copy.length) {
        fn = { pop: 'shift', shift: 'pop' }[fn];
        result.push(copy[fn]());
    }
    return result;
}

console.log(test(array));
module.exports=test;
