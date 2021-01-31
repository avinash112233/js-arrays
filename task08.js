function sumandproduct(arr){
    var n=arr.length;
    var sum=0;
    var product=1;
    for(var i=0;i<n;i++){
        sum+=arr[i];
        product*=arr[i];


    }
    return [sum,product];
}
var array=[1,2,3,4,5];
var result=sumandproduct(array);
console.log(result);
module.exports=sumandproduct;
