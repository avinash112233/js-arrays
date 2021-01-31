function repeating(arr1){
    var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
return ['item',mf];



}
var array=[1,1,22,3,6,3,2,22,1];
var result=repeating(array);
console.log(result);
module.exports=repeating;
