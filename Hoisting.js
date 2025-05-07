/*
 Hoisting  is a process where variable and methods are moved to the top of their scope
 function and variable are called before declaration

*/
// example

console.log("x value is before declaration", x)
var x = 10;

console.log("x value after declaration ", x)

console.log("calling before declaration",absum(10,20));

function absum(a,b){
    return a+b;
}

//let and const does not work  cannot access before initialization 
//They remain in a "temporal dead zone" from the start of the block until the declaration is encountered.
// Accessing them before their declaration results in a ReferenceError.

console.log("let variable before declaration", b)
console.log("let variable before declaration", c)
let b;
const c = 10;

