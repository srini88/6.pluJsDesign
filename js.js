function myFunc(){

	var result =0;
	for (var i=0 ; i <arguments.length; ++i){
		result += arguments[i];
	}

	var arr = Array.prototype.slice.apply(arguments); //also can use call
	////you need to return an array -- that's why you got slice there..
	console.log(arr.sort());  //works




}


myFunc(8, 9, 3, 4, 5, 6, 7);