/*
1137. N-th Tribonacci Number
https://leetcode.com/problems/n-th-tribonacci-number/


The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.





STEPS:
Initialize result array to 0,1,1
For loop through n starting from 3
Set result to result -1,-2-3 for initial values
Return result[n]


*/



const tribonacci = (n) => {
    
    let result = [0,1,1]
    
    for(let i = 3; i<=n; i++) {
        result[i] = result[i-1] + result[i-2] + result[i-3]
    }
    
    return result[n]
};