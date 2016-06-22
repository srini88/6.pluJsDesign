var answer = {
	get:function fn1(){
		return this.val;
	},
	val:42
}

var firmAnswer = Object.create(answer);

firmAnswer.get = function fn2(){
	return answer.get.call(firmAnswer) +"!!";  //using call and passing in context....
}
firmAnswer.val = 3.14;


console.log(firmAnswer.get())  //gives 3.14!!! which is correct..




//you got duplicated logic....in answer.get and firmAnswer.get... 

///typically what you want to do is call function one from function2..