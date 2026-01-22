/**
 * function
 */

function addNumbers(a,b){
    a = a+2;
    b = b+2;                             // these a and b are local to this function only
    return Number(a) + Number(b);        // here Number() function comes in picture when input must be a number unlike int  var in java
}   // return is optional

let a = 10;
let b = 20;                              // these a and b are diffrent than prev
addNumbers(a,b);                        // storing value is optional
console.log(a + " " + b);

// what if I only pass 1 parameter in 2s function then unlike java it throws error; in java it shows that it needs 2 parameters; in js it fits exactly 

function add(a,b){
    return Number(a) + Number(b);
}

let x = 10;
console.log(add(x));             // will return NaN as (10 + NaN = NaN)
// here add(x) goes to a only if wants to put it as b then needs to be explicitly defined

// we can use default, if, nullish coersion 
// in parameter add(a = 0 ; b = 0); if null then makes it 0
// a ??= 0
