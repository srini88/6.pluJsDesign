// //to not pollute the global namespace
// (function (){

// var app = angular.module('taskManager');  //using the same module created in the js file...

// app.factory("Task", function(){
// 	//Task is the same shit we dealt with before...
// 	var Task = function(data){

// 		this.name = data.name;
// 		this.completed = data.completed;
		
// 	}

// 	Task.prototype.complete = function(){  
// 		console.log("completing task: " + this.name);
// 		this.completed = true;
// 	}

// 	Task.prototype.save = function(){
// 			console.log("saving task " +  this.name);
// 	}	

// 	///this creation stuff we got to move to controller
// 	// var task1 = new Task("task1");
// 	// var task2 = new Task("task2");

// 	return Task;  ///same as module.exports on node side...
// 	/////////This loads into Angular a Task object....
// 	///you can use this anywhere in angular..


// });

// ///we need to expose this shit..use factory
// })();


