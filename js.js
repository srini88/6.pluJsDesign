var answer = {
	get:function fn1(){
		return this.val;
	},
	val:42
}

var firmAnswer = Object.create(answer);

firmAnswer.get = function fn2(){
	return this.val +"!!";
}


console.log(answer.get())  //42
console.log(firmAnswer.get())  //42!!


//you got duplicated logic....in answer.get and firmAnswer.get... 

