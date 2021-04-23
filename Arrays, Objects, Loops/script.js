// Ternary Operator
// Shorter version of an if statement, it returns also a value

const age = 19;

// if age is greater than 18 price will hold "20$" as a value, otherwise it will hold "15$"	
const price = age > 18 ? "20$" : "15$"; 

// simple example
x = 10
let ternaryOperator = x > 10 ? true : false;

// the same as with if statemen example
if (x > 10){
    ternaryOperator = true
}else{
    ternaryOperator = false
}

// Truthy and Falsy
// In JS some values are evaluated as true or false even though they aren't booleans. Here is just one example:

// empty string is evaluated as a false value
const truthyOrFalse = "" ? "truthy" : "falsy"; 

// The following values are always falsy:

// false
// 0 (zero)
// '' or "" (empty string)
// null
// undefined
// NaN
// Everything else is truthy.

// === and ==
// Unexpected situations can occur when comparing truthy and falsy values using the ==. It is always better to use in JS the triple equality === (or !== for the inequality), because it is a strict equality check.

console.log(2 == '2');
console.log(2 === '2');

// Let vs const


// const stands for constant. While a variable (let) could vary its value as the program flow proceeds, 
// constants point at the same value for as long as they lives. So it does mean that you can't reassign a value two times when using const!

let myVar = 0
const myConst = 0

myVar = 3 // this is allowed
myConst = 3 // this is NOT allowed


// Objects
// Numbers, boolean and strings are like the atoms that compose our data. 
// Many types of information require more complex structures, though. 
// Objects let us group together simple data types into a single structure.

const user = {
	name: "John", // string property
	surname: "Rambo", // another string property
	age: 18, // numeric property
	isStudent: true, // boolean property
};