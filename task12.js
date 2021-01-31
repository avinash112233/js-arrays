function adding(arr1,arr2){
   var result=[];
   var ctr=0,x=0;
   if(arr1 === 0){
       return "array1 is empty"
   }
   if(arr2 === 0){
       return "arrray2 is empty"
   }
   while(ctr<arr1.length && ctr<arr2.length){
       result.push(arr1[ctr]+arr2[ctr]);
       ctr++;
   }
   if (ctr === arr1.length) 
 {
    for (x = ctr; x < arr2.length; x++)   {
      result.push(arr2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < arr1.length; x++) 
    {
      result.push(arr1[x]);
    }
  }
  return result;

}
var array1=[1,2,3,4];
var array2=[1,2,3,4];
var result=adding(array1,array2);
console.log("sum of two arrays",result);
module.exports=adding;
