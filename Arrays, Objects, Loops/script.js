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