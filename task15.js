function des(arr,pn){
    arr.sort(function(a,b) {return b-a;});
    console.log(arr);
    return arr[pn];
}
var array=[,2,3,4,5,6];
var result=des(array,3);
console.log(result);
module.exports=des;
