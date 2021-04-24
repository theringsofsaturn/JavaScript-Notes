// JS Functions


// What is a function?
// A function is a block of organized, reusable code that all developers must use!


// Defining a function


// A function can have zero parameters



const sayHelloFunction = function() {
    console.log("Hello!");
};


// A function can have one parameter

const saySomethingFunction = function(something) {
    console.log(something);
};

// A function can have even more parameters

const saySomethingElseFunction = function(something, name) {
     console.log(name + " says " + something);
};


// A function can return nothing or it can return a result back



// First function just prints something in console without returning anything

const sayHelloFunction = function() { 
    console.log("Hello!"); 
};

// Second function returns a computed value as a result
const square = function(x) {
    return x * x;
};


// Usage of functions
// Let's see how the pre declared functions can now be invoked



sayHelloFunction() // prints "Hello!"

saySomethingFunction("Hello Strivers") // prints what you pass in between the parenthesis --> "Hello Strivers"

saySomethingElseFunction("Hello!", "Tobia") // prints "Tobia says Hello!"



// If a function returns a value you can even store it in a variable



const twoTimesTwo = square(2) // the variable twoTimesTwo will hold the result coming from square function calculated with parameter 2
const hundredTimesHundred = square(100) // the variable twoTimesTwo will hold the result coming from square function calculated with parameter 100

console.log(twoTimesTwo) // prints 4
console.log(hundredTimesHundred) // prints 10000