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