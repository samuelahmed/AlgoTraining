/*
70. Climbing Stairs
https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

STEPS: 
Initialize result to [0,1,2,3]
For loop throuhg n starting from 4
Set result[i] to result[i-1] + result[i-2]
Return result[n]
*/



const climbStairs = (n) => {

    let result = [0,1,2,3]
    
    for(let i = 4; i <= n; i++){
        result[i] = result[ i - 1] + result[i - 2]
    }
    
    return result[n]
};
