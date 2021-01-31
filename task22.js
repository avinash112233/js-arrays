function diff(arr,x){
    
   var sortByDiff = (arr,x) => arr.sort((a,b)=> Math.abs(a-x) - Math.abs(b-x))
    return(sortByDiff(arr,x));
}
module.exports=diff;
