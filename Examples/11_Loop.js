/**
 * Loop Controls
 */
for(let i = 0; i < 10 ; i++){                    // s1 -> s2 -> body -> s3 -> s2
    console.log(i);
}


let i;
console.log(i);
for(let i = 100; false; i++){                    
    console.log(i);
}
console.log(i);

/**
 * In a for loop with structure for(let i = 100; false; i++):

Initialization (let i = 100): executes once
Condition check (false): evaluated before each iteration
Body: only executes if the condition is true
Increment (i++): only executes after each iteration
Since the condition is false from the start, the loop body never executes. The for loop simply skips to the next statement (line 14: console.log(i);).
 */