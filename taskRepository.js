//responsible for making db calls. .

var repo = function(){

	///database get , save , shit like that..emulating
	return {
		get : function(id){
			console.log("getting task" + id);
			return {
				name : "new task from db " + id
			}
		}
	}
}

var repo1 = repo();

console.log(repo1.get(5));

// getting task5
// Object {name: "new task from db 5"}