/**
 * let x = 10; -> you let JS to determine the type of variable
 * 
 * let is a keyword that lets you change the value, 
 * const wont let you change the value
 * 
 * 
 * var was old way to define a variable; in 2015 major update came 
 * 
 * let: Declares a block-scoped variable that can be reassigned. It is the recommended way to declare variables in modern JavaScript.
 * const: Declares a block-scoped constant that cannot be reassigned after initialization. Use it for values that should remain unchanged.
 * var: An older keyword with function-level or global scope. It is not recommended for new code due to issues like hoisting and unintended global variables.
 * 
 * 
 */
let x = 10;
console.log(typeof(x));
console.log(x);

x = 20; 
console.log(x);

const y = 10;
console.log(y);
y = 30;
console.log(y);
