//new keyword creation design pattern...

var Task = function(name){

	this.name = name;
	this.completed = false;
	this.complete = function(){
		console.log("completing task: " + this.name);
		this.completed = true;
	}
	this.save = function(){  //not on prototype..so many compies of the same godammn function
		console.log("saving task " +  this.name);
	}
	//return this;  - happens by default when using new
}

var task1 = new Task("task1");
var task2 = new Task("task2");


task1.complete();
task1.save();
 
task2.complete();
task2.save();


///drawbacks of this...

// complete and save is recreated for every task object...all 2 times..not very efficient..








