///now same shit as previous but by using functions....


function Answer(value){
	this._val = value;
}

///put stuff on prototype...alll Instances of Answer will have access to this rptotype...
Answer.prototype.get = function fn1(){
	return this._val;
}

var lifeAnswer = new Answer(42);

console.log(lifeAnswer.get())   //42


console.log(Answer.prototype === Object.getPrototypeOf(lifeAnswer))  ///true