function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
var array = [2, 5, 9, 6];


var result=contains(array,5);
console.log(result);
module.exports=contains;
