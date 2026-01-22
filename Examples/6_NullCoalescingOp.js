let x;            // undefined variable
let y = x ??= 10; // nullish coalescing operator   // checks if x has any value or not if not then give values as 10 
// useful in banking systems as in banks its bad to put any value undefind
console.log(y);

