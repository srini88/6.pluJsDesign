//you know when dealing with functions you put stuff on the prototype right...same way now you dealing wiht plain object...same we we do prototype..by using Object.create() 

//put stuff on the prototype and make others extend it...


var AnswerPrototype = {

	get:function fn1(){
		return this.val;
	}
};


var lifeAnswer = Object.create(AnswerPrototype);

lifeAnswer.val = 42;

console.log(lifeAnswer.get())

var deathAnswer = Object.create(AnswerPrototype);

deathAnswer.val  = 3.14;
console.log(deathAnswer.get());  //3.14


///others inherit FirmAnswerPrototype
var FirmAnswerPrototype = Object.create(AnswerPrototype);
///another way ...call the parent get method using call 
///below this will be for lucky...
FirmAnswerPrototype.get = function fn2(){
	//console.log(this === luckyAnswer)  //true
	//console.log(luckyAnswer)
	return AnswerPrototype.get.call(this) + "!!";
}

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
console.log(luckyAnswer.get())  ///7