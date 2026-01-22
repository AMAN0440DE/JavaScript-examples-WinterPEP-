/**
 * we can use the function as a variable also
 */

const add = function addNumber(a,b){
    return a + b;
}

console.log(add(10,20));

// it doesnt make sence to write function name and variable name 2 times just use => arrow function 
// it removes function keyword and function name
// if single parameter then dont even need ()

// const add = (a,b) => {
//      a+b
// }

const mult = (a,b) => a*b;
console.log(mult(20,30));