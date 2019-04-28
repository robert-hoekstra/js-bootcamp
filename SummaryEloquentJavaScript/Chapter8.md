# Summary Eloquent JavaScript Chapter 8

## Language
JavaScript will except a lot of input. However when we approach the language wrongly.
It will correct us right away. 

However sometimes it will compute something plain stupid and goes on with the rest of the program. The computer does not catch
the bug of, simply because in language terms speaking a bug was never made in the first place.

Finding and solving these problems is called debugging!

## Strict Mode
to prevent dynamic bindings being generated in a function. We can use `strict` mode. With strict mode we have to define every single property in order for the code to work.
Another change in `strict` mode is the usage of `this`. In strictmode this will hold undefined. 

Constructors created with the `class` notation will always complain if they are called without `new`.

## Types
In order to help writing decent and meanignful code. One can add rigors to the program that checks for all types within JavaScript.

## Testing
Test runners are pieces of code you add to your program. In which the program tests itself for every piece the programmers pointed at.
It costs a bit of time to write this extra code. But it is a lot faster than manually testing!

## Error Propagation
If you wrote code. Other people might use your program and enter the wrong information for certain prompts.
It is a good practice to think about how you are going to catch these errors.

You don't want your program to crash so you have to think in solution that will work.

## Exceptions
Exceptions are pieces of code your program can rely on. So when a function or method for instance breaks,
It can call a function on it's own that can solve the problem.

`Raise` `Throw` `Catch` `Try` 

## Cleaning up after exceptions
`Finally` statements are blocks of code that will run no matter what. So if several tries have failed, it will always run the last piece of code.

## Selective catching
Think about what parts you want to catch. And if your program fails. How and with what information do you tell an other program that something has happend.

## Assertions
Assertions are ways to write code that will give proper feedback that tells what to do or what went wrong.
However this costs very much time to do so. And is not advised by Eloquent JavaScript.

