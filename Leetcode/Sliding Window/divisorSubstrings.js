/*
2269. Find the K-Beauty of a Number
https://leetcode.com/problems/find-the-k-beauty-of-a-number/


The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

STEPS:
Intialize result to zero 
Turn number into a string so I can slice it and use it for for loop
Turn it back into a number so I can compare with modulo (or let js do it automatically)
If nums % substring === 0 result ++ 
Return result 


*/



const divisorSubstrings = (num, k) => {
    
    let result = 0;
    let stringNum = String(num);
    let sliced = '';
    
    for (let i = 0; i <= stringNum.length - k; i++) {
        sliced = stringNum.slice(i, k + i);
        if(num % sliced === 0) result++;
    }

    return result;
};