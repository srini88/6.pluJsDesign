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
//now removed here...so goes chaining up to AnswerPrototype for the get method....that's why answer 7 wont have exclamation
// FirmAnswerPrototype.get = function fn2(){
// 	return this.val + "!!";
//}

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
console.log(luckyAnswer.get())  ///7