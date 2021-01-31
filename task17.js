function task(array,number){
        
        for(var i=0;i<array.length;i++){
        if(array[i]===number){
          (array.splice(i,1));
          return array;
                

        }
}
return false;
}
module.exports = task;
