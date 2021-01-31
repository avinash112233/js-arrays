function range(start, len) 
     {
		var arr = [];
		for (var i = 0; i < len; i++, start++) 
        {
			arr.push(start);
		}
      		return arr;
}
module.exports=range;
