/**
 * use the Number() function to make sure that input data coming is a number only, feature provided by JS
 */
let x =  Number("10");
console.log(x);
let y = 10;
console.log(typeof(x));
console.log(typeof(y));


let z = Number("Aman");
console.log(z);          // NaN
console.log(typeof(z));  // it will show as a number datatype, but value NaN

// 3rd using new keyword we can assign dattype 