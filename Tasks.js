//to not pollute the global namespace
(function (){

var app = angular.module('taskManager');  //using the same module created in the js file...

//Task Repository deas with api calls
app.factory("Task", function(TaskRepository){
	//Task is the same shit we dealt with before...
	var Task = function(data){

		this.name = data.name;
		this.completed = data.completed;
		
	}

	Task.prototype.complete = function(){  
		console.log("completing task: " + this.name);
		this.completed = true;
		this.save();
		//after completing and saving ...lets print out our task obj..
		console.log(this);
	}

	Task.prototype.save = function(){
			TaskRepository.save(this); //deals with db stuff
	}	
	return Task;  //returning whole Task itself


});

})();


