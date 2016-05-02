///angular always start with iife...



(function (){
	angular.module("taskManager", [])   //creating a module..
	.controller('taskController', ['Task' , function(Task){
		

		var ctrl = this;
		///creating multiple tasks at once...use object method
		//pasing in object to the new Task
		ctrl.tasks = [ new Task({name:'task1'}),
		new Task({name:'task2', completed:false})];

		///my tasks already get the complete function


	}]);

})();

