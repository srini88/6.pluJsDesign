//new keyword creation design pattern...

var Task = function(name){

	this.name = name;
	this.completed = false;
	
}

Task.prototype.complete = function(){   //all tasks have a link to this complete..but those tasks dont own the complete....only one copy of complete exists..
	console.log("completing task: " + this.name);
	this.completed = true;
}

Task.prototype.save = function(){
		console.log("saving task " +  this.name);
	}	


var task1 = new Task("task1");
var task2 = new Task("task2");


task1.complete();
task1.save();
 
task2.complete();
task2.save();

///this way it is much more efficient...

///drawbacks of this...

// complete and save is recreated for every task object...all 2 times..not very efficient..


////prototype shit
////Task has a Task.prototype --- the fns complete and save are truly liked back to prototype..





