var task4 = {

title: "my task", 
desc : "my description"

};

///remmeber last parameter to this method is a JSON object

Object.defineProperty (task4, 'toString', {

	"value" : function(){
		return this.title  + " ** " + this.desc;
	}, 
	"writable" : true, 
	"enumerable" : true, 
	"configurable" : true   //does not matter to use ""  or not to 

});

///why you do this shit ...

//task4.toString = "hi;"  //it is broken now the toString() now...

//that's why you use defineProperty....to make it writable false..


console.log(task4.toString());
console.log(task4)