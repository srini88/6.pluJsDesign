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


///in ecma script 2015- we now have classes.....
///node.js allows us to create classes using strict mode..
///without node = have to use babel to trasile this javascript file..to ECMA 5..


----------------------------module pattern...
we dont new shit up...



--------------------Factory pattern  ---reading JS 
a pattern to simplify ...
simplifies object creation.... repo - open connection to DB ..set up caching....dont want to do in my controller and in my routes...

creating different objects based on the need...
task repository, user repository,  project repository...

dont want to pull all those different repositories in my controller or in my route.....so we just create a repository factory... that we need at that time so that controller does not have to worry about that...




-------skipped pluralsight --- started reading ..
//https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// Imagine that we have a script where for each DOM element found on a page with class "foo" we wish to increment a counter. What's the most efficient way to query for this collection of elements? Well, there are a few different ways this problem could be tackled:

// Select all of the elements in the page and then store references to them. Next, filter this collection and use regular expressions (or another means) to only store those with the class "foo".
// Use a modern native browser feature such as querySelectorAll() to select all of the elements with the class "foo".
// Use a native feature such as getElementsByClassName() to similarly get back the desired collection.

//which is better... 3 is better -- you are narrowing..

Developers using jQuery don't have to worry about this problem however, as it's luckily abstracted away for us using the Facade pattern. As we'll review in more detail later, this pattern provides a simple set of abstracted interfaces (e.g $el.css(), $el.animate())

///anti patterns..
Polluting the global namespace by defining a large number of variables in the global context
Passing strings rather than functions to either setTimeout or setInterval as this triggers the use of eval() internally.
Modifying the Object class prototype (this is a particularly bad anti-pattern)
Using JavaScript in an inline form as this is inflexible
The use of document.write where native DOM alternatives such as document.createElement are more appropriate. document.write has been grossly misused over the years and has quite a few disadvantages including that if it's executed after the page has been loaded it can actually overwrite the page we're on, whilst document.createElement does not. We can see here for a live example of this in action. It also doesn't work with XHTML which is another reason opting for more DOM-friendly methods such as document.createElement is favorable


Creational Design Patterns

Creational design patterns focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process.

Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton and Builder.

Structural Design Patterns

Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn't need to do the same. They also assist in recasting parts of the system which don't fit a particular purpose into those that do.

Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter and Proxy.

Behavioral Design Patterns

Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system.

Some behavioral patterns include: Iterator, Mediator, Observer and Visitor.



-------------------JS design patterns pluralsight-----------

Arguments aren't required 
JS arguments are untyped....

Unspecified arguments become undefined...

Arguments available through the arguments object 
It's array-like but not really an array...
arguments has a length property... cannot perfom actions like sorting and filtering..


---------chaining..----

new Calc(0).add(2)

-----------------------------------
///watching youtube video....

//https://www.youtube.com/watch?v=PMfcsYzj-9M

object is a dictioray or hash...

primitives are passsed by value, objects are passed by refefrence...


if you assign object to one of these valiarbale...we are not copying the object...

	we are just copying the reference...


when you create a function in JS it creates an objet ..with 3 properties 

name, lenght, prototype..