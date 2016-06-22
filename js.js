var answer = {
	get:function fn1(){
		return this.val;
	},
	val:42
}

var firmAnswer = Object.create(answer);

firmAnswer.get = function fn2(){
	return answer.get() +"!!";   //we want to call answer.get() in the context of firmAnswer  ///we are not doing it nowsd
}
firmAnswer.val = 3.14;


console.log(firmAnswer.get())  //gives 42!!! which is wrong ..we want it to show 3.14!!





//you got duplicated logic....in answer.get and firmAnswer.get... 

///typically what you want to do is call function one from function2..