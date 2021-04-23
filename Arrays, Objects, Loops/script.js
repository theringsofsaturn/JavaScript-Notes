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

// Properties
// You can access to objects properties in two ways: dot notation and square brackets.

console.log(user.name); // "John"
console.log(user["name"]); // same result

// In the same way you can change the values of the properties too

user.name = "Roger"; // equivalent to user["name"] = "Roger";

console.log(user.name); // "Roger"


// Delete Properties
// If you need to delete some properties from your objects you can use the reserved keyword delete in front of the object and his property

delete user.name;

console.log(user.name); // undefined

// Object.assign
// let obj2 = obj1 is not enough to clone an object, because there will always be an unwanted bind between the two. 
// A preferrable way to copy all the properties from an object into another one is the following

let obj1 = {
    name: "John"
 }
 
 let obj2 = {}
 
 Object.assign(obj2, obj1); // assign obj2 to obj1
 
 console.log(obj2.name); // "John"

//  Arrays
// ‌JS as many other programming languages provides a way to store sequentially some data. 
// It is called array and is written as a list of values between square brackets, each one separated by commas

let listOfNumbers = [2, 3, 5, 7, 11]; // array of numbers
let listOfNames = ["John","Arnold","Chuck"]; // array of strings
let listOfBools = [true, false, false, false, true]; // array of booleans

// We can access to a specific element of the array by using its index, or position in the list, surrounded again by square brackets 

// N.B. arrays' indexes start from zero!

console.log(listOfNumbers[0]); // 2
console.log(listOfNumbers[1]); // 3
console.log(listOfNumbers[4]); // 11

// What happens if you try to log array element with index 5 or above?