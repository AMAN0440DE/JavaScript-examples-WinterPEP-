/**
 * comparision operator -> two types
 * == -> tries to typecast both operand into single type
 * === -> compatres strictly
 */

let x = 10;
let y = "10";

console.log(x==y);  // explicitly convert and compare  : loose comparision    // true    -> coersion
console.log(x===y);    // false

console.log(x!=y);    // false  similar to == loose
console.log(x!==y);    // true  similar to === strict


