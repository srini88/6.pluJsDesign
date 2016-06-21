//demonstrating chaining API

var Calc = function(start){

	this.add = function(x){
		start +=x;
		return this;
	}
	this.multiply = function(x){
		start *= x;
		return this;
	}
	this.equals = function(callback){
		return this;
	}


}

new Calc(0).add(1).add(2); //simply added this....to remove error