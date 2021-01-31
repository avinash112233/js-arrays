function merge(array1,array2){
    var arr=array1.concat(array2);
    var uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr;

  
}
module.exports=merge;
