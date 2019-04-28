# Summary of Eloquent JavaScript Chapter 6

## Encapsulation
The idea of Object Oriented programming is to divide programs into small pieces that are responsible for their own state.

This way we can keep values local to a piece. It makes coding more structured. But it is also less keen to bug.

Properties that are part of the interface are public. the others are called private.

Seperating interface from omplementation is a great idea. It is usally called encapsulation. One can write private properties by adding an underscore to the propertyname at the beginning.

## Methods
Methods are properties that gold function values.

In a method we can use `THIS` it will point the binding at the object it was called on.

However we cant grab those bindings by declaring a function outside of the scope.

## Prototypes
Taken from the book:
Watch closely.

let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
I pulled a property out of an empty object. Magic!

Well, not really. I have simply been withholding information about the way JavaScript objects work. In addition to their set of properties, most objects also have a prototype. A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.

So who is the prototype of that empty object? It is the great ancestral prototype, the entity behind almost all objects, Object.prototype.

console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
As you guess, Object.getPrototypeOf returns the prototype of an object.

The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits Object.prototype. It provides a few methods that show up in all objects, such as toString, which converts an object to a string representation.

Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. Functions derive from Function.prototype, and arrays derive from Array.prototype.

console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true
Such a prototype object will itself have a prototype, often Object.prototype, so that it still indirectly provides methods like toString.

You can use Object.create to create an object with a specific prototype.

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
A property like speak(line) in an object expression is a shorthand way of defining a method. It creates a property called speak and gives it a function as its value.

The “proto” rabbit acts as a container for the properties that are shared by all rabbits. An individual rabbit object, like the killer rabbit, contains properties that apply only to itself—in this case its type—and derives shared properties from its prototype.

## Classes
A class is a type of object. Methods and properties are appointed to the class within curly brackets. 

A constructor makes sure that the prototype has properties that instances of a given class are supposed to have. Another way to write this is to write `new` in front of a function call.

Constructors and all functions actually get a property named `prototype` which holds a plain empty object. constructors are always capitalized so they can easily be distinguished from other functions. 

## Class Notation
Sinds 2015 we don't have to write the prototype property anymore. Writing `new` is more than enough.

## Overriding Derived Properties
Taken from the book:
When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
The following diagram sketches the situation after this code has run. The Rabbit and Object prototypes lie behind killerRabbit as a kind of backdrop, where properties that are not found in the object itself can be looked up.

Rabbit object prototype schema
Overriding properties that exist in a prototype can be a useful thing to do. As the rabbit teeth example shows, overriding can be used to express exceptional properties in instances of a more generic class of objects, while letting the nonexceptional objects take a standard value from their prototype.

Overriding is also used to give the standard function and array prototypes a different toString method than the basic object prototype.

console.log(Array.prototype.toString ==
            Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2
Calling toString on an array gives a result similar to calling .join(",") on it—it puts commas between the values in the array. Directly calling Object.prototype.toString with an array produces a different string. That function doesn’t know about arrays, so it simply puts the word object and the name of the type between square brackets.

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]

## Maps
In JavaScript; A map is a data structure that associated values with other valyes.

So for example we can combine age and names with eachother.

So we can actually look in a map if a value related to another value is known or not.

Object property names must be strings. If the keys within a object can't be converted to strings then you cannot use an object as your map.

However with the map function we can make objects with the above prefixes. It stores the mapping and allows any type of keys.

Next to the `Map` object we also have `set` `get` and `has`. 

## Polymorphism
When we asign the keyword string to a value. Basically we are calling the `toString` method. the method will look at any value that fits the interface in where it wel smartly convert to a string.

## Symbols
You can crate symvols in Javscript with the `Symbol` function. Multiple synbols may have the same name. However you can'y create the symbol twice. therefore symbols als included and not exclusive.


## The Iterator Interface
When we write functions to iterate over values. We actally fire the iterator interface. Where property names as `next` `done` and `value` are stored.
These properties are used to properly let a for loop do its job.


## Getters, Setters, And Statistics
You can get information from a property by using the `get` method.
To set information to a property we can use `set`
Inside a class decleration we can use `static` so the methods are stores on the constructor.

## Inheritance
Some matrices are symmetrical.
Rewriting code is stupid. So in JavaScript we can use the `new` keyword to get a new binding out of an already created binding. Thus we make sure that the symmetrical aspect of the binding stays intact.

This is called inheritance.
## The InstanceOf Operator
the `InstanceOf` operator is handy to check wether a value or binding is derived from itself or from the object class. most of the bindings are in fact derived from the object.