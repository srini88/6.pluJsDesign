var parent = {

	get: function(){
		return this.val;
	},
	val :50
}

console.log(parent.get())  //50

var child = Object.create(parent);

child.val = 20;


console.log(child.get())  //20 ////get method is on the parent..but this value is on the child itself....


//console.log(child.get());  //50  here, nothing  on the child so goes to the parent and gets it...


//console.log(child)  //child has parent prototype linked to it...



//console.log(Object.getPrototypeOf(child) === parent)  //true

