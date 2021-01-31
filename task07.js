function sumofs(arr){

var square=1;
var sum=0;
var n=arr.length;

 for(var i=0;i<n;i++)
    {
        square=arr[i]*arr[i];
        sum+=square;
    }
    return sum;
}
var array=[1,2,3];
var result=sumofs(array);
module.exports=sumofs;
