function mine(arr1){
var mf = 1;
var m = 0;
// var haha;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                        
                  mf=m; 
                 var haha = arr1[i];
                }
        }
        m=0;
}
return [haha,mf]  ;

}
var arra=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var result=mine(arra);
console.log(result);
module.exports=mine;


