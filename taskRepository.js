//deals with API calls....this is injected into our Task factory,,,

(function(){
	//getting taskManager module..
	var app = angular.module('taskManager');

	var taskRepo = function(){
		var db={};

		var get = function(id){
			console.log("getting task "+ id);
			return {
				name: "new task from db"
			}
		}
		var save = function(task){
			console.log("saving "+ task.name + "to the db");
		}

		return {
			get:get,
			save:save
		}
	}
	app.service("TaskRepository", taskRepo);  //also used factory no change

})();