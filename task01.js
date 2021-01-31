function fun(arr,n){
    // Enter your logic here
    
    var newarray=arr.slice(0,n);
    return newarray;

}
var array=[1,2,3,4,5];
var result=fun(array,2);
console.log(result);
module.exports = fun;
