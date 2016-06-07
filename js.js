//demonstrating chaining API

var Calc = function(){

	this.add = function(x){

	}
	this.multiply = function(x){

	}
	this.equals = function(callback){

	}


}

new Calc().add(1).add(2);  //js.js:18 Uncaught TypeError: Cannot read property 'add' of undefined

//new Calc()would return object...but not the middle add..so the second add does not have anything
