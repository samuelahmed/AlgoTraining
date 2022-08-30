/*/
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

2011. Final Value of Variable After Performing Operations

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

NOTES: 
// initatize final value
//loop through the operations values (not index) i 
// if i === ++ increment final value if opeartions ++
// else decrement 
//return final value

/*/





const finalValueAfterOperations = (operations) => {

    let count = 0;

    for (let i of operations) {
        if (i === 'X++' || i === '++X') {
            count++
        } else count --;
    }
    
    return count;
}