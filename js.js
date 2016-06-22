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
firmAnswer.val = 3.14;


console.log(firmAnswer.get())  //3.14


//you got duplicated logic....in answer.get and firmAnswer.get... 

///typically what you want to do is call function one from function2..