function ascs(arr){
    function sortNumber(a,b){
        return a-b;
    }
    return arr.sort(sortNumber);
}
var array=[9,8,98,-1,-2];
var result=ascs(array);
module.exports=ascs;
