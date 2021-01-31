// program to remove duplicate value from an array

function getUnique(arr){
    
    var uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}

var array = [1, 2, 3, 2, 3];


var result=getUnique(array);
module.exports=getUnique;
