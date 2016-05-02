//bbasic way

var task = {};

task.title = "my task";
task.desc = "my description";

console.log(task.title, task.desc);


//2nd way 
var task1 = Object.create(Object.prototype);

task1.title = "my task";
task1.desc = "my description";

console.log(task1.title, task1.desc);

//3rd way..

var task3 = new Object();

task3.title = "my task";
task3.desc = "my description";

console.log(task3.title, task3.desc);

//4th way s

var task4 = {

title: "my task", 
desc : "my description"

};console.log(task4.title, task4.desc);