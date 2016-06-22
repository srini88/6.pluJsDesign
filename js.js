///now same shit as previous but by using functions....


function Answer(value){
	this._val = value;
}

///put stuff on prototype...alll Instances of Answer will have access to this rptotype...
Answer.prototype.get = function fn1(){
	return this._val;
}

var lifeAnswer = new Answer(42);

///Now lets do inheritance of Answer...


function FirmAnswer(value){

	Answer.call(this, value);   ////you always use call right to call the base classs and pass in this property...remember from Bear...

}

FirmAnswer.prototype = Object.create(Answer.prototype);  //extending Answer.prototype.....
//also to make this shit consistent...

FirmAnswer.prototype.constructor = FirmAnswer;   ///may be not necessary...to keep conssitent..

////Now you add stuff to FirmAnswerPrototype.... very imp...you  have to do this after deriving prototype at line 24...


FirmAnswer.prototype.get = function fn2(){
	return this._val + "!!!!";
}


var FA = new FirmAnswer(40);

console.log(FA.get())




