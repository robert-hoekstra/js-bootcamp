# Chapter 4 Data Structures: Objects and Arrays

## The weresquirrel
Write a log that contains all the data that happens on a day that might cause the the morphing of Jacques.

## Data Sets
To put a lot of data into a set you can use an array to store different values in it.

We can define an array by using brackets. And every value is seperated by commas.

An array starts at 0 instead of 1.
Also calling a specific value out of the array can be done like `listOfLetters[0]`
Above is also called zero based counting.

## Properties
A lot of expressions look like `myString.length` or `Math.max`.
These are expressions that access a property of some value.
those words after the dot are called properties.

all JavaScript values have properties. Except null and undefined.

There are two ways to call a property. Either with a `.` or with `[]` behind the expression. The difference is that the brackets will try to evaluate a property within the expression. Whileas the dot will search for a literal expression.

If we want to call a property within an Array we used the brackets.

## Methods
Properties that contain functions are called Methods. So `toUpperCase` is a method of a string.

## Objects
Values can also be an object. In order to have an object one parses multiple keyvalues between `{}`

Just like:
 `let day1 = {`
  `squirrel: false,`
  `events: ["work", "touched tree", "pizza", "running"]`
`};`

Reading a property that does not exist will give the value undefined.

You can also delete properties with the delete operator.

With the object.keys function one can print out every property within an object.

## Mutability
Every value in Javascript is immutable. Except for objects. You can change their properties.

So multiple properties can also carry the same value.

When comparing 2 different properties carrying the same value. javaScript will still tell us it is false. Because when we look deeper it are two seperate values.

## The lycanthrope's Log
Correlation is a measure of dependence between statistical variables. 0 meand not related. -1 or 1 means they are perfectly related. 

If one is the same, then the other one is also the same.

We can also compute the correlation between two boolean variables. For that we can use the phy coefficient. 

## Computing Correlation
Arrays have an `inlcudes` method that checks if a given value exists in the array.

## Array loops
Looping in javaScript can be done by adding a .length function on a array. And let the i variable increment each time equal to the length of the array.

However it can be done in a more simple way. 
`for (let entry of JOURNAL) {`
  `console.log(`${entry.events.length} events.`);`
`}`

This works for strings and other data structures two!

## Further Arrayology
`.push` and `.pop` are used to add and remove elements at the end of an array.

If we want to make that happen at the start of the array we used `.unshift` and `.shift`

If you want to search from the end we can use `lastIndexOf` and if we want to go to the start we use `indexOf`

Both of the functions take a second argument that indicated where to start searching.

Another method is `.slice` It will actually take the start and end indices and it returns an array with the values between them. the start index is inclusive and the end index is exclusive. One can also slice without an end index. this will cause a slice all the way untill the end of the array.

`.concat` can be used to glue arrays together.
If you pass concat as an arhument that is not an array, the vallue will be added to the new array as if it were a one value array.

## Strings and their properties
String, number and booleans are no objects. Thus can't we make new properties that stick to the valuetype. Those values are immutable.

For strings we can also used the same methods as for arrays.
However there come more methods in play, such as:
`.trim()` and `padStart`. We also also split and join strings with `.split` and `.join` or even repeat a string with `.repeat(n)` and we can ofcourse run the `.length` function on a string.

## Rest Parameters
we can use three-dot notation to create a rest parameter. It is a parameter that contains all further arguments.

## The Math Object
Math has several handy functions, such as:
.max
.min
.sqrt
.cos
.sin
.tan
.acos
.asin
.atan
.PI
.random
.floor
.ceil
.round
.abs

## Destructuring

Instead of using square brackets but braces. one can look into an array and bind to a value that is inside a array or object.

## JSON
In order to send something that is memorized on your machine. We need to serialize it. A popular serialization format is JSON. It stands for JavaScript Object Notation. 

It is a little similar to arrays and objects with a few restrictions. All property names have to be surrounded by double quotes. And only simple data expressions are allowed. 

With the functions `JSON.stringify` and `JSON.parse` we can convert data to a JSON friendly format. 