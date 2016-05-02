why design pattern,,,shit already solved use that...

a) creational design pattern = deal with new instances of an object.....use one of the pattern to create an object...

 1) constructor , 2) module...grouping of like methods and services...

specific to javascript...these two 
3) factory pattern and 4) singleton pattern..


b) structural pattern === deal with the make up of actual object itsefl

1) decorator - 2 ) facade 3) flyweight 

c) behavioral 1)command 2) mediator 3) observer..



creational , structural and behavioral - patterns 3 kinds..

pattern solve a problem....

create a newe object -- use curly braces...

var obj = {};

2nd way.. 
Object.create(Object.prototype)

3rd way 

var lastObj = new Object();


in s6 we have class operator.... new classes...


assigning  keys and values....

var obj = {};
obj.param = "new value";

console.log(obj.param);  //get access to the param...

//bracket notation
var obj = {};

obj['param'] = "new val;ue";
console.log(obj['param']) //new value...

///bracket notation can use variables  - - advantages...

/////define property...

Object.defineProperty (obj, 'name', {


});


////////module 2....
craetion design patterns --- used to create new objects...
adapt creation to situation..


///constructor pattern == use to create new objects with their own object scope...
//////constructor pattern  same as creating new instance of a class...
..the new keyword...
with new keywrod - creates a constructor function...
2) links to an object prototype...
3) binds "this " to the new object scope..
4) implicity returns this..












