function one(arr,n){

    var newarray=arr.slice(-n);
    return newarray;
}
var array=[1,2,3,4,5,6];
var result=one(array,3);
module.exports=one;
