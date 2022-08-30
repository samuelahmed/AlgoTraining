/*
509. Fibonacci Number
https://leetcode.com/problems/fibonacci-number/

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,


STEPS:
Initialize result to [0,1]
For loop starting from 2 till i <= n
Result push result[i-2] plus result[i-1]
return result[n]

*/

const fib = (n) => {
    
    let result = [0,1]
    
    for(let i = 2; i<= n; i++){
        result.push(result[i-1] + result[i-2])
    }
    
    return result[n]
};


   