var task4 = {

title: "my task", 
desc : "my description"

};

///remmeber last parameter to this method is a JSON object

Object.defineProperty (task4, 'toString', {

	"value" : function(){
		return this.title  + " ** " + this.desc;
	}, 
	"writable" : false, 
	"enumerable" : false, 
	"configurable" : false   //does not matter to use ""  or not to 

});
////create an urgent Taks from task 


var urgentTask = Object.create(task4);

//see everything is set to false in task4...however urgent task inherited shit..
Object.defineProperty (urgentTask, 'toString', {

	"value" : function(){
		return this.title  + " ** " +"urgentTask";
	}, 
	"writable" : false, 
	"enumerable" : false, 
	"configurable" : false   //does not matter to use ""  or not to 

});
console.log(urgentTask.toString());  //my task ** urgentTask
