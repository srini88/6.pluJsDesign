//demonstrating chaining API

var Calc = function(){

	this.add = function(x){
		return this;
	}
	this.multiply = function(x){
		return this;
	}
	this.equals = function(callback){
		return this;
	}


}

new Calc().add(1).add(2); //simply added this....to remove error