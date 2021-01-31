function task(array,number,start,last){

        for(var i=start;i<=last;i++){
            if(array[i]===number){
                return true;
            }
           
        }

         return false;

}
module.exports=task;
