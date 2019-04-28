# Summary Eloquent JavaScript Chapter 10

## Modules
A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use.

The relations between modules are called dependencies.
So to say when a module requires a piece of another module it is dependend on that module, thus creating a dependency.

When one is done making a proper solution or program to a problem. It is a good practice to take a step back and organize the whole program in a structured way.

## Packages
A package is a chunk of code that van be distributed. It is handy to use packages if your code is used in multiple programs.
When one needs to update this copied pasted code in every single file, it will become a horrendous job to do so.

A package comes with documentation explaining what it does so that people can understand and use it.
Packages can be updated when a problem has been debugged.

However in order to use a package we need infrastructure. for JavaScript the infrastructure is provided by NPM.
NPM is a online service where one can upload and download packages. and it is a program bundles with Node.js that helps you install and manage them.

Packages also come with licenses. It is a common practice to check those licenses before using the package.

## Improvised Modules
You can use JavaScript functions to create local scopes and objects to represent module interfaces. 
Before 2015 people tend to make their own module system because modules did not exist in the language.

## Evaluating data as code
In order to evaluate code one can use the `Function` function. It will wrap it contents in it's own scope in which it wont bother with other code.

## CommonJS
The main concept in CommonJS modules is a function called `require`

When you load a module it will be wrapped in a function thus it gets their own scope. 

## ECMAScript Modules
Since 2015 we can actually use `import` and `export` instead of calling a function to access a dependency. 

Import declerations may not appear inside functions or blocks.

## Building and Bundling
Code gets dynamic and it gets updated all the time. In which programs are written in such a way it does not look like how code used to look like 10 years ago.
Also having a lot of serperate files can increase loading time significantly on a website. So in order to fix that, programmers compile their code. And they bundle it to bigger files.

Also to make code less big we can use minifiers. that take code and remove all the unnessecary stuff, such as whitespace and comments.

## Module Design