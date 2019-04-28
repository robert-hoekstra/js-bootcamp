# Summary Eloquent JavaScript Chapter 11

## Asynchronicity
in a synchronous programming model the program runs from a to b in one flow.

However in a asynchronous model the program runs multiple commands at the same time.

In order to get the second model we need to start threads of control.
Most computers contain multiple processors. So we can use multiple threads as well. A thread is needed in order to run an extra program.

## Callbacks
a callback function is a function such as `setTimeout` in which we tell the function to wait a few milliseconds untill the functions is to be executed. 

## Promises
A promise is an aynchronous action that may complete at some point and produce a value.
The easiest way to create a promise is by calling `Promise.resolve`

To get the result of a promise we can use the `then` method.

## Failure
## Networks are hard
## Collections of Promises
## Network Flooding
## Message routing
## Async Functions
## Generators
## The Event Loop
## Asynchronous Bugs